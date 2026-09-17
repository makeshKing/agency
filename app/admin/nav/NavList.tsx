"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const GROUPS = [
  { id: "who-we-help", label: "Mega Menu: Who We Help", desc: "Column 1 in the fullscreen dropdown mega menu." },
  { id: "what-we-do", label: "Mega Menu: What We Do", desc: "Column 2 in the fullscreen dropdown mega menu." },
  { id: "desktop-top", label: "Desktop Top Header", desc: "Main top navigation links in the desktop header." },
  { id: "mobile-menu", label: "Mobile Menu Overlay", desc: "Links in the mobile full-screen slide out menu." },
  { id: "floating-wwd", label: "Floating 'Who We Help'", desc: "The list of 6 sectors in the middle section of the page." },
  { id: "footer-quicklinks", label: "Footer Quicklinks", desc: "Links column in the footer." },
  { id: "footer-social", label: "Footer Social Links", desc: "Instagram, LinkedIn, etc. in the footer top." },
  { id: "footer-credits", label: "Footer Credits", desc: "Agency credits (e.g. SF.CO, Kujira) at bottom right." },
];

export default function NavList({ initialData }: { initialData: any[] }) {
  const [links, setLinks] = useState(initialData || []);
  const [activeGroup, setActiveGroup] = useState<string>("who-we-help");
  const [savingId, setSavingId] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const currentGroupMeta = GROUPS.find((g) => g.id === activeGroup) || GROUPS[0];
  const filteredLinks = links
    .filter((l) => l.group === activeGroup)
    .sort((a, b) => a.order - b.order);

  const handleEdit = (id: string, field: string, value: any) => {
    setLinks((prev) => prev.map((l) => (l.id === id ? { ...l, [field]: value } : l)));
  };

  const handleSave = async (link: any) => {
    setSavingId(link.id);
    setMessage("");
    try {
      const res = await fetch(`/api/admin/nav/${link.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(link),
      });
      if (!res.ok) throw new Error("Failed to save");
      setMessage(`Saved link "${link.label}" successfully!`);
      router.refresh();
    } catch (e) {
      setMessage("Error saving link");
    } finally {
      setSavingId(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this navigation link?")) return;
    try {
      const res = await fetch(`/api/admin/nav/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      setLinks((prev) => prev.filter((l) => l.id !== id));
      setMessage("Link deleted.");
      router.refresh();
    } catch (e) {
      setMessage("Error deleting link");
    }
  };

  const handleAdd = async () => {
    setIsCreating(true);
    try {
      const count = filteredLinks.length;
      const res = await fetch("/api/admin/nav", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          label: "New Link",
          url: "/new-page",
          group: activeGroup,
          order: count + 1,
        }),
      });
      if (!res.ok) throw new Error("Failed to add link");
      const created = await res.json();
      setLinks((prev) => [...prev, created]);
      setMessage("New link added.");
      router.refresh();
    } catch (e) {
      setMessage("Error creating link");
    } finally {
      setIsCreating(false);
    }
  };

  const handleMove = async (index: number, direction: "up" | "down") => {
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= filteredLinks.length) return;

    const list = [...filteredLinks];
    const temp = list[index];
    list[index] = list[targetIndex];
    list[targetIndex] = temp;

    const updated = list.map((l, i) => ({ ...l, order: i + 1 }));
    setLinks((prev) => prev.map((l) => (l.group === activeGroup ? updated.find((u) => u.id === l.id) || l : l)));

    for (const l of updated) {
      await fetch(`/api/admin/nav/${l.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order: l.order }),
      });
    }
    router.refresh();
  };

  return (
    <div style={{ maxWidth: "900px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {/* Category Tabs */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", borderBottom: "2px solid #e2e8f0", paddingBottom: "0.75rem" }}>
        {GROUPS.map((g) => {
          const count = links.filter((l) => l.group === g.id).length;
          const isActive = activeGroup === g.id;
          return (
            <button
              key={g.id}
              onClick={() => setActiveGroup(g.id)}
              style={{
                padding: "0.45rem 0.85rem",
                borderRadius: "6px",
                border: "none",
                backgroundColor: isActive ? "#0f172a" : "#f1f5f9",
                color: isActive ? "#ffffff" : "#475569",
                fontWeight: 600,
                fontSize: "0.825rem",
                cursor: "pointer",
              }}
            >
              {g.label} ({count})
            </button>
          );
        })}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0f172a" }}>{currentGroupMeta.label} ({filteredLinks.length})</h2>
          <p style={{ fontSize: "0.85rem", color: "#64748b" }}>{currentGroupMeta.desc}</p>
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
          {isCreating ? "Adding..." : "+ Add Link"}
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

      {filteredLinks.length === 0 && (
        <div style={{ padding: "3rem", textAlign: "center", backgroundColor: "white", borderRadius: "8px", border: "1px dashed #cbd5e1" }}>
          <p style={{ color: "#64748b" }}>No links in this menu. Click &quot;+ Add Link&quot; to create one.</p>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {filteredLinks.map((link, index) => (
          <div
            key={link.id}
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
              padding: "1rem 1.25rem",
              boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <div style={{ fontWeight: 600, fontSize: "0.85rem", color: "#94a3b8", width: "24px" }}>
              #{index + 1}
            </div>

            <div style={{ flex: "1 1 200px" }}>
              <input
                value={link.label || ""}
                onChange={(e) => handleEdit(link.id, "label", e.target.value)}
                placeholder="Link Label"
                style={inputStyle}
              />
            </div>

            <div style={{ flex: "2 1 280px" }}>
              <input
                value={link.url || ""}
                onChange={(e) => handleEdit(link.id, "url", e.target.value)}
                placeholder="/page-path or https://..."
                style={inputStyle}
              />
            </div>

            <div style={{ display: "flex", gap: "0.35rem", alignItems: "center" }}>
              <button
                onClick={() => handleMove(index, "up")}
                disabled={index === 0}
                style={{
                  padding: "0.35rem 0.6rem",
                  backgroundColor: index === 0 ? "#f8fafc" : "#ffffff",
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
                disabled={index === filteredLinks.length - 1}
                style={{
                  padding: "0.35rem 0.6rem",
                  backgroundColor: index === filteredLinks.length - 1 ? "#f8fafc" : "#ffffff",
                  border: "1px solid #cbd5e1",
                  borderRadius: "4px",
                  cursor: index === filteredLinks.length - 1 ? "not-allowed" : "pointer",
                  color: index === filteredLinks.length - 1 ? "#94a3b8" : "#334155",
                }}
              >
                ↓
              </button>
              <button
                onClick={() => handleSave(link)}
                disabled={savingId === link.id}
                style={{
                  padding: "0.4rem 0.85rem",
                  backgroundColor: "#0f172a",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  cursor: savingId === link.id ? "wait" : "pointer",
                }}
              >
                {savingId === link.id ? "Saving..." : "Save"}
              </button>
              <button
                onClick={() => handleDelete(link.id)}
                style={{
                  padding: "0.4rem 0.75rem",
                  backgroundColor: "#fee2e2",
                  color: "#991b1b",
                  border: "1px solid #fca5a5",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                }}
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "0.45rem 0.75rem",
  border: "1px solid #cbd5e1",
  borderRadius: "6px",
  fontFamily: "inherit",
  fontSize: "0.875rem",
};
