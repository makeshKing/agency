"use client";

import { useState } from "react";

interface ImageUploadPreviewProps {
  label: string;
  imageValue: string;
  altValue: string;
  onImageChange: (url: string) => void;
  onAltChange: (alt: string) => void;
  aspectRatio?: "4/5" | "16/9" | "4/3" | "1/1" | "auto" | "contain";
  recommendedSize?: string;
  required?: boolean;
}

export default function ImageUploadPreview({
  label,
  imageValue,
  altValue,
  onImageChange,
  onAltChange,
  aspectRatio = "16/9",
  recommendedSize,
  required = false,
}: ImageUploadPreviewProps) {
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setUploadError("");

    try {
      const fd = new FormData();
      fd.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: fd,
      });

      if (!res.ok) throw new Error("Upload failed");
      const data = await res.json();
      if (data.url) {
        onImageChange(data.url);
        if (!altValue) {
          // prefill alt if empty
          const baseName = file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
          onAltChange(baseName);
        }
      }
    } catch (err) {
      setUploadError("Failed to upload image. Please try again or paste a URL.");
    } finally {
      setUploading(false);
    }
  };

  // Compute CSS aspect ratio styles
  const getAspectStyle = () => {
    switch (aspectRatio) {
      case "4/5":
        return { aspectRatio: "4 / 5", maxWidth: "220px" };
      case "16/9":
        return { aspectRatio: "16 / 9", maxWidth: "360px" };
      case "4/3":
        return { aspectRatio: "4 / 3", maxWidth: "280px" };
      case "1/1":
        return { aspectRatio: "1 / 1", maxWidth: "200px" };
      case "contain":
        return { height: "90px", maxWidth: "240px", backgroundColor: "#0f172a" };
      default:
        return { minHeight: "140px", maxWidth: "320px" };
    }
  };

  return (
    <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", padding: "1.25rem", backgroundColor: "#ffffff" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
        <label style={{ fontWeight: 600, fontSize: "0.925rem", color: "#1e293b" }}>
          {label} {required && <span style={{ color: "#ef4444" }}>*</span>}
        </label>
        {recommendedSize && (
          <span style={{ fontSize: "0.75rem", color: "#64748b", backgroundColor: "#f1f5f9", padding: "2px 6px", borderRadius: "4px" }}>
            Ratio: {aspectRatio} • {recommendedSize}
          </span>
        )}
      </div>

      {uploadError && (
        <div style={{ fontSize: "0.8rem", color: "#b91c1c", backgroundColor: "#fee2e2", padding: "0.5rem", borderRadius: "4px", marginBottom: "0.75rem" }}>
          {uploadError}
        </div>
      )}

      {/* Inputs grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "0.75rem", marginBottom: "0.75rem" }}>
        <input
          type="text"
          value={imageValue}
          onChange={(e) => onImageChange(e.target.value)}
          placeholder="/images/example.jpg or https://..."
          style={{
            width: "100%",
            padding: "0.5rem 0.75rem",
            fontSize: "0.875rem",
            border: "1px solid #cbd5e1",
            borderRadius: "6px",
            fontFamily: "monospace",
          }}
        />
        <label
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.5rem 1rem",
            backgroundColor: uploading ? "#94a3b8" : "#0f172a",
            color: "#ffffff",
            fontSize: "0.85rem",
            fontWeight: 500,
            borderRadius: "6px",
            cursor: uploading ? "wait" : "pointer",
            userSelect: "none",
            whiteSpace: "nowrap",
          }}
        >
          {uploading ? "Uploading..." : "Upload New"}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={uploading}
            style={{ display: "none" }}
          />
        </label>
      </div>

      {/* Live Aspect Ratio Preview Box */}
      <div style={{ marginTop: "0.75rem", marginBottom: "0.75rem" }}>
        <div style={{ fontSize: "0.75rem", color: "#64748b", marginBottom: "0.25rem", fontWeight: 500 }}>
          Live Aspect Ratio Preview ({aspectRatio}):
        </div>
        <div
          style={{
            ...getAspectStyle(),
            width: "100%",
            borderRadius: "6px",
            border: "2px dashed #cbd5e1",
            overflow: "hidden",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: aspectRatio === "contain" ? "#111827" : "#f8fafc",
          }}
        >
          {imageValue ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageValue}
              alt={altValue || label}
              style={{
                width: "100%",
                height: "100%",
                objectFit: aspectRatio === "contain" ? "contain" : "cover",
                padding: aspectRatio === "contain" ? "8px" : "0",
              }}
              onError={(e) => {
                (e.target as HTMLElement).style.display = "none";
              }}
            />
          ) : (
            <span style={{ fontSize: "0.8rem", color: "#94a3b8" }}>No image selected</span>
          )}
        </div>
      </div>

      {/* Alt Text (Required for Accessibility & SEO) */}
      <div>
        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#334155", marginBottom: "0.25rem" }}>
          Image Alt Text (for SEO & Accessibility) <span style={{ color: "#ef4444" }}>*</span>
        </label>
        <input
          type="text"
          value={altValue}
          onChange={(e) => onAltChange(e.target.value)}
          placeholder="Descriptive alt text for this image..."
          required
          style={{
            width: "100%",
            padding: "0.45rem 0.75rem",
            fontSize: "0.85rem",
            border: "1px solid #cbd5e1",
            borderRadius: "6px",
          }}
        />
      </div>
    </div>
  );
}
