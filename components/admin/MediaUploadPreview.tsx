"use client";

import { useState, useEffect, useRef } from "react";
import { MediaType } from "../AdaptiveMedia";
import { convertDriveLink, isSupportedVideoUrl } from "@/lib/convertDriveLink";

interface MediaUploadPreviewProps {
  label: string;
  mediaValue: string; // Stringified JSON of MediaType
  onMediaChange: (val: string) => void;
  aspectRatio?: "4/5" | "16/9" | "4/3" | "1/1" | "auto" | "contain";
  recommendedSize?: string;
  required?: boolean;
}

const DEFAULT_MEDIA: MediaType = {
  type: "image",
  url: "",
  altText: "",
};

export default function MediaUploadPreview({
  label,
  mediaValue,
  onMediaChange,
  aspectRatio = "16/9",
  recommendedSize,
  required = false,
}: MediaUploadPreviewProps) {
  const [uploading, setUploading] = useState(false);
  const [uploadingPoster, setUploadingPoster] = useState(false);
  const [uploadError, setUploadError] = useState("");

  const parsedMedia: MediaType = (() => {
    try {
      if (mediaValue) {
        // Handle legacy case if mediaValue is just an image URL
        if (!mediaValue.startsWith("{")) {
          return { ...DEFAULT_MEDIA, url: mediaValue };
        }
        return JSON.parse(mediaValue) as MediaType;
      }
    } catch (e) {
      // fallback
    }
    return DEFAULT_MEDIA;
  })();

  const videoRef = useRef<HTMLVideoElement>(null);
  const directVideoUrl = convertDriveLink(parsedMedia.url);
  const directPosterUrl = parsedMedia.posterUrl ? convertDriveLink(parsedMedia.posterUrl) : undefined;
  const videoValidation = parsedMedia.type === "video" ? isSupportedVideoUrl(parsedMedia.url) : null;

  // Explicitly call .load() whenever the direct video URL changes
  useEffect(() => {
    if (parsedMedia.type === "video" && videoRef.current && directVideoUrl) {
      videoRef.current.load();
    }
  }, [directVideoUrl, parsedMedia.type]);

  const updateMedia = (updates: Partial<MediaType>) => {
    const updated = { ...parsedMedia, ...updates };
    onMediaChange(JSON.stringify(updated));
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>, isPoster = false) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (isPoster) setUploadingPoster(true);
    else setUploading(true);
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
        if (isPoster) {
          updateMedia({ posterUrl: data.url });
        } else {
          const baseName = file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
          updateMedia({
            url: data.url,
            altText: parsedMedia.altText || baseName,
          });
        }
      }
    } catch (err) {
      setUploadError("Failed to upload image. Please try again or paste a URL.");
    } finally {
      if (isPoster) setUploadingPoster(false);
      else setUploading(false);
    }
  };

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

      {/* Media Type Toggle */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        <button
          type="button"
          onClick={() => updateMedia({ type: "image" })}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: parsedMedia.type === "image" ? "#0f172a" : "#f1f5f9",
            color: parsedMedia.type === "image" ? "#ffffff" : "#475569",
            border: "1px solid",
            borderColor: parsedMedia.type === "image" ? "#0f172a" : "#cbd5e1",
            borderRadius: "6px",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Image
        </button>
        <button
          type="button"
          onClick={() => updateMedia({ type: "video" })}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: parsedMedia.type === "video" ? "#0f172a" : "#f1f5f9",
            color: parsedMedia.type === "video" ? "#ffffff" : "#475569",
            border: "1px solid",
            borderColor: parsedMedia.type === "video" ? "#0f172a" : "#cbd5e1",
            borderRadius: "6px",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Video
        </button>
      </div>

      {/* Inputs grid for Media URL */}
      <div style={{ marginBottom: "0.75rem" }}>
        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#334155", marginBottom: "0.25rem" }}>
          {parsedMedia.type === "video" ? "Video URL (mp4 or Drive link)" : "Image URL"}
        </label>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "0.75rem" }}>
          <input
            type="text"
            value={parsedMedia.url}
            onChange={(e) => {
              const url = e.target.value;
              if (parsedMedia.type === "video" && url.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
                setUploadError("Warning: You pasted an image URL into a video field.");
              } else {
                setUploadError("");
              }
              updateMedia({ url });
            }}
            placeholder={parsedMedia.type === "video" ? "https://..." : "/images/example.jpg or https://..."}
            style={{
              width: "100%",
              padding: "0.5rem 0.75rem",
              fontSize: "0.875rem",
              border: "1px solid #cbd5e1",
              borderRadius: "6px",
              fontFamily: "monospace",
            }}
          />
          {parsedMedia.type === "image" && (
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
                onChange={(e) => handleFileChange(e, false)}
                disabled={uploading}
                style={{ display: "none" }}
              />
            </label>
          )}
        </div>
        {videoValidation?.warning && (
          <div style={{ fontSize: "0.75rem", color: "#b45309", backgroundColor: "#fef3c7", border: "1px solid #fde68a", padding: "0.4rem 0.6rem", borderRadius: "5px", marginTop: "0.4rem" }}>
            ⚠️ {videoValidation.warning}
          </div>
        )}
        {parsedMedia.type === "video" && parsedMedia.url.includes("drive.google.com") && directVideoUrl && (
          <div style={{ fontSize: "0.75rem", color: "#047857", backgroundColor: "#ecfdf5", border: "1px solid #a7f3d0", padding: "0.4rem 0.6rem", borderRadius: "5px", marginTop: "0.4rem" }}>
            ✓ Converted Drive stream: <code style={{ fontSize: "0.72rem", wordBreak: "break-all" }}>{directVideoUrl}</code>
          </div>
        )}
      </div>

      {/* Inputs grid for Poster URL (Video only) */}
      {parsedMedia.type === "video" && (
        <div style={{ marginBottom: "0.75rem" }}>
          <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#334155", marginBottom: "0.25rem" }}>
            Poster Image (Fallback before video loads)
          </label>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "0.75rem" }}>
            <input
              type="text"
              value={parsedMedia.posterUrl || ""}
              onChange={(e) => updateMedia({ posterUrl: e.target.value })}
              placeholder="/images/poster.jpg or https://..."
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
                backgroundColor: uploadingPoster ? "#94a3b8" : "#0f172a",
                color: "#ffffff",
                fontSize: "0.85rem",
                fontWeight: 500,
                borderRadius: "6px",
                cursor: uploadingPoster ? "wait" : "pointer",
                userSelect: "none",
                whiteSpace: "nowrap",
              }}
            >
              {uploadingPoster ? "Uploading..." : "Upload Poster"}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, true)}
                disabled={uploadingPoster}
                style={{ display: "none" }}
              />
            </label>
          </div>
        </div>
      )}

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
          {parsedMedia.url ? (
            parsedMedia.type === "video" ? (
              <video
                ref={videoRef}
                key={directVideoUrl}
                src={directVideoUrl}
                poster={directPosterUrl}
                controls
                muted
                preload="metadata"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: aspectRatio === "contain" ? "contain" : "cover",
                  padding: aspectRatio === "contain" ? "8px" : "0",
                }}
                onError={(e) => {
                  const err = e.currentTarget.error;
                  console.error("Admin Preview Video Error:", {
                    code: err?.code,
                    message: err?.message,
                    currentSrc: e.currentTarget.currentSrc,
                  });
                }}
              >
                <source src={directVideoUrl} type="video/mp4" />
              </video>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={convertDriveLink(parsedMedia.url)}
                alt={parsedMedia.altText || label}
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
            )
          ) : (
            <span style={{ fontSize: "0.8rem", color: "#94a3b8" }}>No media selected</span>
          )}
        </div>
      </div>

      {/* Alt Text (Required for Accessibility & SEO) */}
      <div>
        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#334155", marginBottom: "0.25rem" }}>
          {parsedMedia.type === "video" ? "Video Description (for Accessibility)" : "Image Alt Text (for SEO & Accessibility)"} <span style={{ color: "#ef4444" }}>*</span>
        </label>
        <input
          type="text"
          value={parsedMedia.altText || ""}
          onChange={(e) => updateMedia({ altText: e.target.value })}
          placeholder="Descriptive text..."
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
