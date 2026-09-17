import React from "react";
import Image from "next/image";
import { MediaType, convertDriveLink } from "@/lib/media";

export type { MediaType };

interface AdaptiveMediaProps {
  media: MediaType;
  className?: string;
  style?: React.CSSProperties;
  fill?: boolean;
  priority?: boolean;
  objectFit?: "cover" | "contain";
  controls?: boolean;
  sizes?: string;
  id?: string;
  loading?: "lazy" | "eager";
}

export default function AdaptiveMedia({
  media,
  className = "",
  style = {},
  fill = true,
  priority = false,
  objectFit = "cover",
  controls = false,
  sizes,
  id,
  loading,
}: AdaptiveMediaProps) {
  // Graceful fallback if media is empty
  if (!media || !media.url) {
    return (
      <div 
        className={className} 
        style={{ 
          ...style, 
          backgroundColor: "#f1f5f9", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          height: fill ? "100%" : style.height || "100%",
          width: fill ? "100%" : style.width || "100%",
        }}
      >
        <span style={{ color: "#94a3b8", fontSize: "0.85rem" }}>No Media</span>
      </div>
    );
  }

  const directUrl = convertDriveLink(media.url);
  const posterUrl = media.posterUrl ? convertDriveLink(media.posterUrl) : undefined;
  
  if (media.type === "video") {
    // Note: Google Drive is not a reliable video CDN at scale (no adaptive streaming, 
    // potential bandwidth throttling). This should eventually be swapped for Mux, Vimeo, 
    // or AWS S3 Cloudfront for production scale.
    
    return (
      <video
        key={directUrl}
        src={directUrl}
        poster={posterUrl}
        className={className}
        style={{
          ...style,
          objectFit,
          width: "100%",
          height: "100%",
        }}
        id={id}
        autoPlay={!controls}
        muted={!controls}
        loop={!controls}
        playsInline={!controls}
        controls={controls}
        preload="none"
      >
        <source src={directUrl} type="video/mp4" />
      </video>
    );
  }

  // type === "image"
  if (fill) {
    return (
      <div className={className} id={id} style={{ position: "relative", width: "100%", height: "100%", ...style }}>
        <Image
          src={directUrl}
          alt={media.altText || "Image"}
          fill={true}
          priority={priority || loading === "eager"}
          loading={priority ? undefined : loading}
          sizes={sizes || "(max-width: 768px) 100vw, 50vw"}
          style={{ objectFit }}
          unoptimized={directUrl.includes("drive.google.com") || directUrl.includes("googleusercontent.com")}
        />
      </div>
    );
  }

  return (
    <Image
      id={id}
      src={directUrl}
      alt={media.altText || "Image"}
      fill={false}
      width={800}
      height={600}
      priority={priority || loading === "eager"}
      loading={priority ? undefined : loading}
      className={className}
      sizes={sizes || "(max-width: 768px) 100vw, 50vw"}
      style={{
        ...style,
        objectFit,
      }}
      unoptimized={directUrl.includes("drive.google.com") || directUrl.includes("googleusercontent.com")}
    />
  );
}
