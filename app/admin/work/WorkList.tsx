"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import MediaUploadPreview from "@/components/admin/MediaUploadPreview";

const SLOT_OPTIONS = [
  { value: "slot-4-n", label: "Slot 4-N (Standard Portrait Tall)" },
  { value: "slot1", label: "Slot 1 (Tall Portrait)" },
  { value: "is-landscape", label: "Landscape (Double Wide Card)" },
  { value: "slot-3-n", label: "Slot 3-N (Tall Offset Portrait)" },
  { value: "slot3", label: "Slot 3 (Standard Card)" },
  { value: "slot4", label: "Slot 4 (Compact Card)" },
  { value: "slot2", label: "Slot 2 (Medium Landscape)" },
];

export default function WorkList({ initialData }: { initialData: any[] }) {
  const [works, setWorks] = useState(initialData || []);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleEdit = (id: string, field: string, value: any) => {
    setWorks((prev) => prev.map((w) => (w.id === id ? { ...w, [field]: value } : w)));
  };

  const handleSave = async (work: any) => {
    setSavingId(work.id);
    setMessage("");
    try {
      const res = await fetch(`/api/admin/work/${work.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(work),
      });
      if (!res.ok) throw new Error("Failed to save");
      setMessage(`Saved "${work.title}" successfully!`);
      router.refresh();
    } catch (e) {
      setMessage("Error saving work item");
    } finally {
      setSavingId(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this case study?")) return;
    try {
      const res = await fetch(`/api/admin/work/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      setWorks((prev) => prev.filter((w) => w.id !== id));
      setMessage("Case study deleted.");
      router.refresh();
    } catch (e) {
      setMessage("Error deleting case study");
    }
  };

  const handleAdd = async () => {
    setIsCreating(true);
    try {
      const newOrder = works.length + 1;
      const res = await fetch("/api/admin/work", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "New Case Study",
          description: "Results, press coverage, or key strategic impact...",
          media: JSON.stringify({
            type: "image",
            url: "/images/69cbd8b004769387bc1f446d_69cbd1d5750c3ab50cd60a53_don-julio-1942_listing-image_67dcfb62fc75610ea069ba4b.webp",
            altText: "New case study showcase"
          }),
          link: "/work/new-case-study",
          slot: "slot1",
          regionTags: "AUS",
          cursorText: "View Work",
          isFeatured: true,
          order: newOrder,
        }),
      });
      if (!res.ok) throw new Error("Failed to create work item");
      const created = await res.json();
      setWorks((prev) => [...prev, created]);
      setMessage("New case study added.");
      router.refresh();
    } catch (e) {
      setMessage("Error creating case study");
    } finally {
      setIsCreating(false);
    }
  };

  const handleMove = async (index: number, direction: "up" | "down") => {
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= works.length) return;

    const newWorks = [...works];
    const temp = newWorks[index];
    newWorks[index] = newWorks[targetIndex];
    newWorks[targetIndex] = temp;

    const updated = newWorks.map((w, i) => ({ ...w, order: i + 1 }));
    setWorks(updated);

    for (const w of updated) {
      await fetch(`/api/admin/work/${w.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order: w.order }),
      });
    }
    router.refresh();
  };

  return (
    <div style={{ maxWidth: "900px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0f172a" }}>Portfolio & Work Items ({works.length})</h2>
          <p style={{ fontSize: "0.85rem", color: "#64748b" }}>
            Add, edit, reorder, or slot case studies in the homepage featured grid.
          </p>
        </div>
        <button
          onClick={handleAdd}
          disabled={isCreating}
          style={{
            padding: "0.65rem 1.25rem",
            backgroundColor: "#0f172a",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontWeight: 600,
            cursor: isCreating ? "wait" : "pointer",
          }}
        >
          {isCreating ? "Adding..." : "+ Add Case Study"}
        </button>
      </div>

      {message && (
        <div
          style={{
            padding: "0.75rem 1rem",
            backgroundColor: message.includes("Error") ? "#fee2e2" : "#d1fae5",
            color: message.includes("Error") ? "#991b1b" : "#065f46",
            borderRadius: "6px",
            fontSize: "0.875rem",
          }}
        >
          {message}
        </div>
      )}

      {works.length === 0 && (
        <div style={{ padding: "3rem", textAlign: "center", backgroundColor: "white", borderRadius: "8px", border: "1px dashed #cbd5e1" }}>
          <p style={{ color: "#64748b" }}>No work items found. Click &quot;+ Add Case Study&quot; to create one.</p>
        </div>
      )}

      {works.map((work, index) => (
        <div
          key={work.id}
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            border: "1px solid #e2e8f0",
            padding: "1.75rem",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {/* Header toolbar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #f1f5f9", paddingBottom: "0.75rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ fontWeight: 700, fontSize: "1.05rem", color: "#0f172a" }}>#{index + 1}: {work.title || "Untitled"}</span>
              <span style={{ fontSize: "0.75rem", color: "#64748b", backgroundColor: "#f1f5f9", padding: "2px 8px", borderRadius: "4px" }}>
                Order: {work.order}
              </span>
              {work.isFeatured && (
                <span style={{ fontSize: "0.75rem", color: "#047857", backgroundColor: "#d1fae5", padding: "2px 8px", borderRadius: "4px", fontWeight: 600 }}>
                  ★ Featured Grid
                </span>
              )}
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button
                onClick={() => handleMove(index, "up")}
                disabled={index === 0}
                style={{
                  padding: "0.35rem 0.65rem",
                  backgroundColor: index === 0 ? "#f1f5f9" : "#ffffff",
                  border: "1px solid #cbd5e1",
                  borderRadius: "4px",
                  cursor: index === 0 ? "not-allowed" : "pointer",
                  color: index === 0 ? "#94a3b8" : "#334155",
                }}
              >
                ↑ Move Up
              </button>
              <button
                onClick={() => handleMove(index, "down")}
                disabled={index === works.length - 1}
                style={{
                  padding: "0.35rem 0.65rem",
                  backgroundColor: index === works.length - 1 ? "#f1f5f9" : "#ffffff",
                  border: "1px solid #cbd5e1",
                  borderRadius: "4px",
                  cursor: index === works.length - 1 ? "not-allowed" : "pointer",
                  color: index === works.length - 1 ? "#94a3b8" : "#334155",
                }}
              >
                ↓ Move Down
              </button>
              <button
                onClick={() => handleDelete(work.id)}
                style={{
                  padding: "0.35rem 0.65rem",
                  backgroundColor: "#fee2e2",
                  color: "#991b1b",
                  border: "1px solid #fca5a5",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontWeight: 500,
                }}
              >
                Delete
              </button>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "1rem" }}>
            <div>
              <label style={labelStyle}>Client / Project Title</label>
              <input value={work.title || ""} onChange={(e) => handleEdit(work.id, "title", e.target.value)} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Grid Slot Layout</label>
              <select value={work.slot || "slot1"} onChange={(e) => handleEdit(work.id, "slot", e.target.value)} style={inputStyle}>
                {SLOT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Region Tag (e.g. AUS)</label>
              <input value={work.regionTags || ""} onChange={(e) => handleEdit(work.id, "regionTags", e.target.value)} placeholder="AUS, UAE" style={inputStyle} />
            </div>
          </div>

          <div>
            <label style={labelStyle}>Description / Key Results</label>
            <textarea
              value={work.description || ""}
              onChange={(e) => handleEdit(work.id, "description", e.target.value)}
              rows={2}
              style={inputStyle}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
            <div>
              <label style={labelStyle}>Detail Link URL</label>
              <input value={work.link || ""} onChange={(e) => handleEdit(work.id, "link", e.target.value)} placeholder="/work/..." style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Hover Cursor Text</label>
              <input value={work.cursorText || "View Work"} onChange={(e) => handleEdit(work.id, "cursorText", e.target.value)} style={inputStyle} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "1.5rem" }}>
              <input
                type="checkbox"
                id={`featured-${work.id}`}
                checked={work.isFeatured ?? true}
                onChange={(e) => handleEdit(work.id, "isFeatured", e.target.checked)}
                style={{ width: "18px", height: "18px", cursor: "pointer" }}
              />
              <label htmlFor={`featured-${work.id}`} style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1e293b", cursor: "pointer" }}>
                Feature on Homepage
              </label>
            </div>
          </div>

          <MediaUploadPreview
            label="Case Study Media (Thumbnail / Video)"
            mediaValue={work.media || ""}
            onMediaChange={(mediaStr) => handleEdit(work.id, "media", mediaStr)}
            aspectRatio={work.slot === "is-landscape" ? "16/9" : "4/3"}
            recommendedSize="High res webp/avif or mp4"
          />

          <div style={{ alignSelf: "flex-end" }}>
            <button
              onClick={() => handleSave(work)}
              disabled={savingId === work.id}
              style={{
                padding: "0.55rem 1.5rem",
                backgroundColor: "#0f172a",
                color: "white",
                border: "none",
                borderRadius: "6px",
                fontWeight: 600,
                cursor: savingId === work.id ? "wait" : "pointer",
              }}
            >
              {savingId === work.id ? "Saving..." : "Save Case Study"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

const labelStyle = {
  display: "block",
  marginBottom: "0.35rem",
  fontWeight: 600,
  fontSize: "0.85rem",
  color: "#334155",
};

const inputStyle = {
  width: "100%",
  padding: "0.5rem 0.75rem",
  border: "1px solid #cbd5e1",
  borderRadius: "6px",
  fontFamily: "inherit",
  fontSize: "0.9rem",
};
