"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ImageUploadPreview from "@/components/admin/ImageUploadPreview";

export default function HeroForm({ initialData }: { initialData: any }) {
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
      const res = await fetch("/api/admin/hero", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to save");

      setMessage("Saved successfully!");
      router.refresh();
    } catch (err) {
      setMessage("Error saving changes.");
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

      {/* Headlines Card */}
      <div style={cardStyle}>
        <h2 style={sectionTitleStyle}>Headline & Copy</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <label style={labelStyle}>Headline Line 1 (Solid)</label>
            <input name="headlineLine1" value={formData.headlineLine1 || ""} onChange={handleChange} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Headline Line 2 (Outline effect)</label>
            <input name="headlineLine2" value={formData.headlineLine2 || ""} onChange={handleChange} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Headline Line 3</label>
            <input name="headlineLine3" value={formData.headlineLine3 || ""} onChange={handleChange} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Headline Line 4</label>
            <input name="headlineLine4" value={formData.headlineLine4 || ""} onChange={handleChange} style={inputStyle} />
          </div>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label style={labelStyle}>Subheading Paragraph</label>
          <textarea name="subheading" value={formData.subheading || ""} onChange={handleChange} rows={3} style={inputStyle} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "1rem" }}>
          <div>
            <label style={labelStyle}>CTA Button Text</label>
            <input name="ctaText" value={formData.ctaText || ""} onChange={handleChange} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>CTA Button Link URL</label>
            <input name="ctaLink" value={formData.ctaLink || ""} onChange={handleChange} style={inputStyle} />
          </div>
        </div>
      </div>

      {/* Left Polaroids Card */}
      <div style={cardStyle}>
        <h2 style={sectionTitleStyle}>Left Stack Polaroid Images (3 Layers)</h2>
        <p style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "1rem" }}>
          These 3 images form the left polaroid cascade animation in the hero.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <ImageUploadPreview
            label="Left Polaroid 1 (Back layer)"
            imageValue={formData.polaroidLeft1 || ""}
            altValue={formData.polaroidLeft1Alt || ""}
            onImageChange={(url) => handleImageChange("polaroidLeft1", url)}
            onAltChange={(alt) => handleAltChange("polaroidLeft1Alt", alt)}
            aspectRatio="4/5"
            recommendedSize="approx 400x500"
          />

          <ImageUploadPreview
            label="Left Polaroid 2 (Middle layer)"
            imageValue={formData.polaroidLeft2 || ""}
            altValue={formData.polaroidLeft2Alt || ""}
            onImageChange={(url) => handleImageChange("polaroidLeft2", url)}
            onAltChange={(alt) => handleAltChange("polaroidLeft2Alt", alt)}
            aspectRatio="4/5"
            recommendedSize="approx 400x500"
          />

          <ImageUploadPreview
            label="Left Polaroid 3 (Front layer - visible initially)"
            imageValue={formData.polaroidLeft3 || ""}
            altValue={formData.polaroidLeft3Alt || ""}
            onImageChange={(url) => handleImageChange("polaroidLeft3", url)}
            onAltChange={(alt) => handleAltChange("polaroidLeft3Alt", alt)}
            aspectRatio="4/5"
            recommendedSize="approx 400x500"
          />
        </div>
      </div>

      {/* Right Polaroids Card */}
      <div style={cardStyle}>
        <h2 style={sectionTitleStyle}>Right Stack Polaroid Images (3 Layers)</h2>
        <p style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "1rem" }}>
          These 3 images form the right polaroid cascade animation in the hero.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <ImageUploadPreview
            label="Right Polaroid 1 (Back layer)"
            imageValue={formData.polaroidRight1 || ""}
            altValue={formData.polaroidRight1Alt || ""}
            onImageChange={(url) => handleImageChange("polaroidRight1", url)}
            onAltChange={(alt) => handleAltChange("polaroidRight1Alt", alt)}
            aspectRatio="4/5"
            recommendedSize="approx 400x500"
          />

          <ImageUploadPreview
            label="Right Polaroid 2 (Middle layer)"
            imageValue={formData.polaroidRight2 || ""}
            altValue={formData.polaroidRight2Alt || ""}
            onImageChange={(url) => handleImageChange("polaroidRight2", url)}
            onAltChange={(alt) => handleAltChange("polaroidRight2Alt", alt)}
            aspectRatio="4/5"
            recommendedSize="approx 400x500"
          />

          <ImageUploadPreview
            label="Right Polaroid 3 (Front layer - visible initially)"
            imageValue={formData.polaroidRight3 || ""}
            altValue={formData.polaroidRight3Alt || ""}
            onImageChange={(url) => handleImageChange("polaroidRight3", url)}
            onAltChange={(alt) => handleAltChange("polaroidRight3Alt", alt)}
            aspectRatio="4/5"
            recommendedSize="approx 400x500"
          />
        </div>
      </div>

      <div style={{ position: "sticky", bottom: "1.5rem", zIndex: 10 }}>
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
          {saving ? "Saving Changes..." : "Save Hero Section"}
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
