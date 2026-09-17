"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import MediaUploadPreview from "@/components/admin/MediaUploadPreview";

export default function JournalList({ initialData }: { initialData: any[] }) {
  const [posts, setPosts] = useState(initialData || []);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleEdit = (id: string, field: string, value: any) => {
    setPosts((prev) => prev.map((p) => (p.id === id ? { ...p, [field]: value } : p)));
  };

  const handleSave = async (post: any) => {
    setSavingId(post.id);
    setMessage("");
    try {
      const res = await fetch(`/api/admin/journal/${post.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      });
      if (!res.ok) throw new Error("Failed to save");
      setMessage(`Saved article "${post.title}" successfully!`);
      router.refresh();
    } catch (e) {
      setMessage("Error saving article");
    } finally {
      setSavingId(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this article?")) return;
    try {
      const res = await fetch(`/api/admin/journal/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      setPosts((prev) => prev.filter((p) => p.id !== id));
      setMessage("Article deleted.");
      router.refresh();
    } catch (e) {
      setMessage("Error deleting article");
    }
  };

  const handleAdd = async () => {
    setIsCreating(true);
    try {
      const newOrder = posts.length + 1;
      const res = await fetch("/api/admin/journal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "New Editorial Story",
          excerpt: "Short teaser or opening sentence about the story...",
          media: JSON.stringify({
            type: "image",
            url: "/images/6a6c122276e872baab1d79fc_Screenshot_2026-07-07_at_2.30.47_PM.png",
            altText: "New article thumbnail"
          }),
          link: "https://news.weareexample.com/p/new-story",
          buttonLabel: "Read",
          category: "CULTURE",
          order: newOrder,
        }),
      });
      if (!res.ok) throw new Error("Failed to create post");
      const created = await res.json();
      setPosts((prev) => [...prev, created]);
      setMessage("New article added.");
      router.refresh();
    } catch (e) {
      setMessage("Error creating article");
    } finally {
      setIsCreating(false);
    }
  };

  const handleMove = async (index: number, direction: "up" | "down") => {
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= posts.length) return;

    const newPosts = [...posts];
    const temp = newPosts[index];
    newPosts[index] = newPosts[targetIndex];
    newPosts[targetIndex] = temp;

    const updated = newPosts.map((p, i) => ({ ...p, order: i + 1 }));
    setPosts(updated);

    for (const p of updated) {
      await fetch(`/api/admin/journal/${p.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order: p.order }),
      });
    }
    router.refresh();
  };

  return (
    <div style={{ maxWidth: "850px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0f172a" }}>Journal & Articles ({posts.length})</h2>
          <p style={{ fontSize: "0.85rem", color: "#64748b" }}>
            Editorial cards in the newsletter / journal section.
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
          {isCreating ? "Adding..." : "+ Add Article"}
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

      {posts.length === 0 && (
        <div style={{ padding: "3rem", textAlign: "center", backgroundColor: "white", borderRadius: "8px", border: "1px dashed #cbd5e1" }}>
          <p style={{ color: "#64748b" }}>No articles found. Click &quot;+ Add Article&quot; to create one.</p>
        </div>
      )}

      {posts.map((post, index) => (
        <div
          key={post.id}
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
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #f1f5f9", paddingBottom: "0.75rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ fontWeight: 700, fontSize: "1.05rem", color: "#0f172a" }}>#{index + 1}: {post.title || "Untitled"}</span>
              <span style={{ fontSize: "0.75rem", color: "#64748b", backgroundColor: "#f1f5f9", padding: "2px 8px", borderRadius: "4px" }}>
                Order: {post.order}
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
                disabled={index === posts.length - 1}
                style={{
                  padding: "0.35rem 0.65rem",
                  backgroundColor: index === posts.length - 1 ? "#f1f5f9" : "#ffffff",
                  border: "1px solid #cbd5e1",
                  borderRadius: "4px",
                  cursor: index === posts.length - 1 ? "not-allowed" : "pointer",
                  color: index === posts.length - 1 ? "#94a3b8" : "#334155",
                }}
              >
                ↓ Move Down
              </button>
              <button
                onClick={() => handleDelete(post.id)}
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

          <div>
            <label style={labelStyle}>Article Title</label>
            <input value={post.title || ""} onChange={(e) => handleEdit(post.id, "title", e.target.value)} style={inputStyle} />
          </div>

          <div>
            <label style={labelStyle}>Article Excerpt / Subtitle</label>
            <textarea
              value={post.excerpt || ""}
              onChange={(e) => handleEdit(post.id, "excerpt", e.target.value)}
              rows={2}
              style={inputStyle}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "1rem" }}>
            <div>
              <label style={labelStyle}>Article URL Link</label>
              <input value={post.link || ""} onChange={(e) => handleEdit(post.id, "link", e.target.value)} placeholder="https://..." style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Button Label</label>
              <input value={post.buttonLabel || "Read"} onChange={(e) => handleEdit(post.id, "buttonLabel", e.target.value)} placeholder="Read" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Category Tag</label>
              <input value={post.category || ""} onChange={(e) => handleEdit(post.id, "category", e.target.value)} placeholder="CULTURE" style={inputStyle} />
            </div>
          </div>

          <MediaUploadPreview
            label="Journal Media (Thumbnail / Video)"
            mediaValue={post.media || ""}
            onMediaChange={(mediaStr) => handleEdit(post.id, "media", mediaStr)}
            aspectRatio="16/9"
            recommendedSize="Landscape or 16:9 thumbnail"
          />

          <div style={{ alignSelf: "flex-end" }}>
            <button
              onClick={() => handleSave(post)}
              disabled={savingId === post.id}
              style={{
                padding: "0.55rem 1.5rem",
                backgroundColor: "#0f172a",
                color: "white",
                border: "none",
                borderRadius: "6px",
                fontWeight: 600,
                cursor: savingId === post.id ? "wait" : "pointer",
              }}
            >
              {savingId === post.id ? "Saving..." : "Save Article"}
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
