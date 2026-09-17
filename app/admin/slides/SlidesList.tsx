"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import MediaUploadPreview from "@/components/admin/MediaUploadPreview";

export default function SlidesList({ initialData }: { initialData: any[] }) {
  const [slides, setSlides] = useState(initialData || []);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleFieldChange = (id: string, field: string, value: any) => {
    setSlides((prev) => prev.map((s) => (s.id === id ? { ...s, [field]: value } : s)));
  };

  const handleSave = async (slide: any) => {
    setSavingId(slide.id);
    setMessage("");
    try {
      const res = await fetch(`/api/admin/slides/${slide.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(slide),
      });
      if (!res.ok) throw new Error("Failed to save");
      setMessage(`Saved slide "${slide.heading}" successfully!`);
      router.refresh();
    } catch (e) {
      setMessage("Error saving slide");
    } finally {
      setSavingId(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this slide?")) return;
    try {
      const res = await fetch(`/api/admin/slides/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      setSlides((prev) => prev.filter((s) => s.id !== id));
      setMessage("Slide deleted.");
      router.refresh();
    } catch (e) {
      setMessage("Error deleting slide");
    }
  };

  const handleAdd = async () => {
    setIsCreating(true);
    try {
      const newOrder = slides.length + 1;
      const res = await fetch("/api/admin/slides", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          heading: "NEW SLIDE HEADING",
          description: "Enter slide description...",
          media: JSON.stringify({
            type: "image",
            url: "/images/69c6645d9d1a1f68a23d3389_67e101f0767f857eb14c5252_hook-island-slide22.avif",
            altText: "New hero slide image"
          }),
          numberLabel: `0${newOrder}`,
          order: newOrder,
        }),
      });
      if (!res.ok) throw new Error("Failed to create slide");
      const created = await res.json();
      setSlides((prev) => [...prev, created]);
      setMessage("New slide added.");
      router.refresh();
    } catch (e) {
      setMessage("Error adding slide");
    } finally {
      setIsCreating(false);
    }
  };

  const handleMove = async (index: number, direction: "up" | "down") => {
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= slides.length) return;

    const newSlides = [...slides];
    const temp = newSlides[index];
    newSlides[index] = newSlides[targetIndex];
    newSlides[targetIndex] = temp;

    // re-assign orders
    const updated = newSlides.map((s, i) => ({ ...s, order: i + 1 }));
    setSlides(updated);

    // Save orders in background
    for (const s of updated) {
      await fetch(`/api/admin/slides/${s.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order: s.order }),
      });
    }
    router.refresh();
  };

  return (
    <div style={{ maxWidth: "850px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0f172a" }}>All Hero Slides ({slides.length})</h2>
          <p style={{ fontSize: "0.85rem", color: "#64748b" }}>
            Reorder, add, edit, or remove slides in the horizontal scrolling marquee section.
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
          {isCreating ? "Adding..." : "+ Add Slide"}
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

      {slides.length === 0 && (
        <div style={{ padding: "3rem", textAlign: "center", backgroundColor: "white", borderRadius: "8px", border: "1px dashed #cbd5e1" }}>
          <p style={{ color: "#64748b" }}>No slides exist yet. Click &quot;+ Add Slide&quot; to create one.</p>
        </div>
      )}

      {slides.map((slide, index) => (
        <div
          key={slide.id}
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
              <span style={{ fontWeight: 700, fontSize: "1rem", color: "#0f172a" }}>Slide #{index + 1}</span>
              <span style={{ fontSize: "0.75rem", color: "#64748b", backgroundColor: "#f1f5f9", padding: "2px 8px", borderRadius: "4px" }}>
                Order: {slide.order}
              </span>
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
                disabled={index === slides.length - 1}
                style={{
                  padding: "0.35rem 0.65rem",
                  backgroundColor: index === slides.length - 1 ? "#f1f5f9" : "#ffffff",
                  border: "1px solid #cbd5e1",
                  borderRadius: "4px",
                  cursor: index === slides.length - 1 ? "not-allowed" : "pointer",
                  color: index === slides.length - 1 ? "#94a3b8" : "#334155",
                }}
              >
                ↓ Move Down
              </button>
              <button
                onClick={() => handleDelete(slide.id)}
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

          <div style={{ display: "grid", gridTemplateColumns: "1fr 140px", gap: "1rem" }}>
            <div>
              <label style={labelStyle}>Headline (Upper marquee title)</label>
              <input
                value={slide.heading || ""}
                onChange={(e) => handleFieldChange(slide.id, "heading", e.target.value)}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Number Pill (e.g. 01)</label>
              <input
                value={slide.numberLabel || ""}
                onChange={(e) => handleFieldChange(slide.id, "numberLabel", e.target.value)}
                placeholder={`0${index + 1}`}
                style={inputStyle}
              />
            </div>
          </div>

          <div>
            <label style={labelStyle}>Description Paragraph</label>
            <textarea
              value={slide.description || ""}
              onChange={(e) => handleFieldChange(slide.id, "description", e.target.value)}
              rows={2}
              style={inputStyle}
            />
          </div>

          <MediaUploadPreview
            label="Slide Background Media (Cover Image/Video)"
            mediaValue={slide.media || ""}
            onMediaChange={(mediaStr) => handleFieldChange(slide.id, "media", mediaStr)}
            aspectRatio="16/9"
            recommendedSize="16:9 or 21:9 landscape banner"
          />

          <div style={{ alignSelf: "flex-end" }}>
            <button
              onClick={() => handleSave(slide)}
              disabled={savingId === slide.id}
              style={{
                padding: "0.55rem 1.5rem",
                backgroundColor: "#0f172a",
                color: "white",
                border: "none",
                borderRadius: "6px",
                fontWeight: 600,
                cursor: savingId === slide.id ? "wait" : "pointer",
              }}
            >
              {savingId === slide.id ? "Saving..." : "Save Slide"}
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
