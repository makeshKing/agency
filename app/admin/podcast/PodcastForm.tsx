"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ImageUploadPreview from "@/components/admin/ImageUploadPreview";

export default function PodcastForm({ initialData }: { initialData: any }) {
  const [formData, setFormData] = useState(initialData || {});
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (field: string, url: string) => {
    setFormData((prev: any) => ({ ...prev, [field]: url }));
  };

  const handleAltChange = (field: string, alt: string) => {
    setFormData((prev: any) => ({ ...prev, [field]: alt }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    try {
      const res = await fetch("/api/admin/podcast", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to save");

      setMessage("Saved podcast section successfully!");
      router.refresh();
    } catch (err) {
      setMessage("Error saving podcast section.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "800px", display: "flex", flexDirection: "column", gap: "2rem" }}>
      {message && (
        <div
          style={{
            padding: "1rem",
            backgroundColor: message.includes("Error") ? "#fee2e2" : "#d1fae5",
            color: message.includes("Error") ? "#991b1b" : "#065f46",
            borderRadius: "6px",
            fontWeight: 500,
          }}
        >
          {message}
        </div>
      )}

      {/* Copy Card */}
      <div style={cardStyle}>
        <h2 style={sectionTitleStyle}>Headline & Description</h2>
        <div style={{ marginBottom: "1rem" }}>
          <label style={labelStyle}>Section Headline</label>
          <input
            name="title"
            value={formData.title || ""}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label style={labelStyle}>Description Paragraph 1 (Lead)</label>
          <textarea
            name="description1"
            value={formData.description1 || ""}
            onChange={handleChange}
            rows={3}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label style={labelStyle}>Description Paragraph 2</label>
          <textarea
            name="description2"
            value={formData.description2 || ""}
            onChange={handleChange}
            rows={3}
            style={inputStyle}
          />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "1rem" }}>
          <div>
            <label style={labelStyle}>CTA Button Label</label>
            <input
              name="ctaText"
              value={formData.ctaText || ""}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>CTA Button Link URL</label>
            <input
              name="ctaLink"
              value={formData.ctaLink || ""}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
        </div>
      </div>

      {/* Images Card */}
      <div style={cardStyle}>
        <h2 style={sectionTitleStyle}>Podcast Artwork & Background Images</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <ImageUploadPreview
            label="Desktop Banner Image"
            imageValue={formData.imageDesktop || ""}
            altValue={formData.imageDesktopAlt || ""}
            onImageChange={(url) => handleImageChange("imageDesktop", url)}
            onAltChange={(alt) => handleAltChange("imageDesktopAlt", alt)}
            aspectRatio="16/9"
            recommendedSize="Landscape wide aspect banner"
          />

          <ImageUploadPreview
            label="Mobile Banner Image"
            imageValue={formData.imageMobile || ""}
            altValue={formData.imageMobileAlt || ""}
            onImageChange={(url) => handleImageChange("imageMobile", url)}
            onAltChange={(alt) => handleAltChange("imageMobileAlt", alt)}
            aspectRatio="4/5"
            recommendedSize="Portrait / tall mobile graphic"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={saving}
          style={{
            padding: "0.85rem 2rem",
            backgroundColor: "#0f172a",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontWeight: 600,
            fontSize: "1rem",
            cursor: saving ? "not-allowed" : "pointer",
            boxShadow: "0 4px 6px rgba(0,0,0,0.15)",
          }}
        >
          {saving ? "Saving Changes..." : "Save Podcast Section"}
        </button>
      </div>
    </form>
  );
}

const cardStyle = {
  backgroundColor: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "10px",
  padding: "1.75rem",
  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
};

const sectionTitleStyle = {
  fontSize: "1.15rem",
  fontWeight: 600,
  color: "#0f172a",
  marginBottom: "1rem",
};

const labelStyle = {
  display: "block",
  marginBottom: "0.4rem",
  fontWeight: 600,
  fontSize: "0.85rem",
  color: "#334155",
};

const inputStyle = {
  width: "100%",
  padding: "0.55rem 0.75rem",
  border: "1px solid #cbd5e1",
  borderRadius: "6px",
  fontFamily: "inherit",
  fontSize: "0.9rem",
};
