"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ImageUploadPreview from "@/components/admin/ImageUploadPreview";

export default function LogosList({ initialData }: { initialData: any[] }) {
  const [logos, setLogos] = useState(initialData || []);
  const [activeGroup, setActiveGroup] = useState<number>(2); // Group 2 is primary 7 logos
  const [savingId, setSavingId] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const filteredLogos = logos
    .filter((l) => l.group === activeGroup)
    .sort((a, b) => a.order - b.order);

  const handleEdit = (id: string, field: string, value: any) => {
    setLogos((prev) => prev.map((l) => (l.id === id ? { ...l, [field]: value } : l)));
  };

  const handleSave = async (logo: any) => {
    setSavingId(logo.id);
    setMessage("");
    try {
      const res = await fetch(`/api/admin/logos/${logo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(logo),
      });
      if (!res.ok) throw new Error("Failed to save");
      setMessage(`Saved logo "${logo.name}" successfully!`);
      router.refresh();
    } catch (e) {
      setMessage("Error saving logo");
    } finally {
      setSavingId(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this logo?")) return;
    try {
      const res = await fetch(`/api/admin/logos/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      setLogos((prev) => prev.filter((l) => l.id !== id));
      setMessage("Logo deleted.");
      router.refresh();
    } catch (e) {
      setMessage("Error deleting logo");
    }
  };

  const handleAdd = async () => {
    setIsCreating(true);
    try {
      const count = filteredLogos.length;
      const res = await fetch("/api/admin/logos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "New Partner",
          image: "/images/67dd24ea9701d4abc3450f13_standard-logo.svg",
          imageAlt: "Partner client logo",
          group: activeGroup,
          order: count + 1,
        }),
      });
      if (!res.ok) throw new Error("Failed to add logo");
      const created = await res.json();
      setLogos((prev) => [...prev, created]);
      setMessage(`Added new logo to Group ${activeGroup}.`);
      router.refresh();
    } catch (e) {
      setMessage("Error creating logo");
    } finally {
      setIsCreating(false);
    }
  };

  const handleMove = async (index: number, direction: "up" | "down") => {
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= filteredLogos.length) return;

    const list = [...filteredLogos];
    const temp = list[index];
    list[index] = list[targetIndex];
    list[targetIndex] = temp;

    const updated = list.map((l, i) => ({ ...l, order: i + 1 }));
    setLogos((prev) => prev.map((l) => (l.group === activeGroup ? updated.find((u) => u.id === l.id) || l : l)));

    for (const l of updated) {
      await fetch(`/api/admin/logos/${l.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order: l.order }),
      });
    }
    router.refresh();
  };

  return (
    <div style={{ maxWidth: "850px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {/* Group Selector Tabs */}
      <div style={{ display: "flex", gap: "0.5rem", borderBottom: "2px solid #e2e8f0", paddingBottom: "0.5rem" }}>
        <button
          onClick={() => setActiveGroup(2)}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            border: "none",
            backgroundColor: activeGroup === 2 ? "#0f172a" : "#f1f5f9",
            color: activeGroup === 2 ? "#ffffff" : "#475569",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Group 2 Carousel ({logos.filter((l) => l.group === 2).length} logos)
        </button>
        <button
          onClick={() => setActiveGroup(1)}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            border: "none",
            backgroundColor: activeGroup === 1 ? "#0f172a" : "#f1f5f9",
            color: activeGroup === 1 ? "#ffffff" : "#475569",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Group 1 Carousel ({logos.filter((l) => l.group === 1).length} logos)
        </button>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0f172a" }}>
            Group {activeGroup} Logos ({filteredLogos.length})
          </h2>
          <p style={{ fontSize: "0.85rem", color: "#64748b" }}>
            Logos are displayed in the animated client flippers ticker on dark background.
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
          {isCreating ? "Adding..." : `+ Add Logo (Group ${activeGroup})`}
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

      {filteredLogos.length === 0 && (
        <div style={{ padding: "3rem", textAlign: "center", backgroundColor: "white", borderRadius: "8px", border: "1px dashed #cbd5e1" }}>
          <p style={{ color: "#64748b" }}>No logos in Group {activeGroup}. Click &quot;+ Add Logo&quot; to add one.</p>
        </div>
      )}

      {filteredLogos.map((logo, index) => (
        <div
          key={logo.id}
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            border: "1px solid #e2e8f0",
            padding: "1.5rem",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #f1f5f9", paddingBottom: "0.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ fontWeight: 700, fontSize: "1rem", color: "#0f172a" }}>Logo #{index + 1}: {logo.name}</span>
              <span style={{ fontSize: "0.75rem", color: "#64748b", backgroundColor: "#f1f5f9", padding: "2px 8px", borderRadius: "4px" }}>
                Order: {logo.order}
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
                ↑
              </button>
              <button
                onClick={() => handleMove(index, "down")}
                disabled={index === filteredLogos.length - 1}
                style={{
                  padding: "0.35rem 0.65rem",
                  backgroundColor: index === filteredLogos.length - 1 ? "#f1f5f9" : "#ffffff",
                  border: "1px solid #cbd5e1",
                  borderRadius: "4px",
                  cursor: index === filteredLogos.length - 1 ? "not-allowed" : "pointer",
                  color: index === filteredLogos.length - 1 ? "#94a3b8" : "#334155",
                }}
              >
                ↓
              </button>
              <button
                onClick={() => handleDelete(logo.id)}
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

          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1rem" }}>
            <div>
              <label style={labelStyle}>Brand / Client Name</label>
              <input value={logo.name || ""} onChange={(e) => handleEdit(logo.id, "name", e.target.value)} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Group</label>
              <select
                value={logo.group}
                onChange={(e) => handleEdit(logo.id, "group", Number(e.target.value))}
                style={inputStyle}
              >
                <option value={1}>Group 1</option>
                <option value={2}>Group 2</option>
              </select>
            </div>
          </div>

          <ImageUploadPreview
            label="Logo Graphic (SVG / Transparent PNG)"
            imageValue={logo.image || ""}
            altValue={logo.imageAlt || ""}
            onImageChange={(url) => handleEdit(logo.id, "image", url)}
            onAltChange={(alt) => handleEdit(logo.id, "imageAlt", alt)}
            aspectRatio="contain"
            recommendedSize="Vector SVG or transparent PNG"
          />

          <div style={{ alignSelf: "flex-end" }}>
            <button
              onClick={() => handleSave(logo)}
              disabled={savingId === logo.id}
              style={{
                padding: "0.55rem 1.5rem",
                backgroundColor: "#0f172a",
                color: "white",
                border: "none",
                borderRadius: "6px",
                fontWeight: 600,
                cursor: savingId === logo.id ? "wait" : "pointer",
              }}
            >
              {savingId === logo.id ? "Saving..." : "Save Logo"}
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
