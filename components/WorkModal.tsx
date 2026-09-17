"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { MediaType } from "@/lib/media";
import { convertDriveLink } from "@/lib/convertDriveLink";

interface WorkModalProps {
  media: MediaType;
  title: string;
  onClose: () => void;
}

function WorkModalContent({ media, title, onClose }: WorkModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const directUrl = convertDriveLink(media.url);
  const posterUrl = media.posterUrl ? convertDriveLink(media.posterUrl) : undefined;
  const isVideo = media.type === "video";
  const hasMedia = !!media.url;

  // Store the element that had focus before opening, restore on close
  useEffect(() => {
    previousFocusRef.current = document.activeElement as HTMLElement;
    // Focus the modal container for keyboard trapping
    setTimeout(() => modalRef.current?.focus(), 50);
    // Prevent body scroll
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
      // Restore focus to trigger element
      previousFocusRef.current?.focus();
    };
  }, []);

  // Explicitly initialize video and attempt play after mount
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.load();

    const playVideo = async () => {
      try {
        await video.play();
      } catch {
        // Browser blocked autoplay — user can use controls to play manually
        console.warn("Autoplay blocked by browser. User can click play.");
      }
    };

    const timer = setTimeout(playVideo, 150);
    return () => {
      clearTimeout(timer);
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    };
  }, [directUrl]);

  // Escape key handler
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
      }
      // Trap focus within modal
      if (e.key === "Tab") {
        const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable && focusable.length > 0) {
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    },
    [onClose]
  );

  return (
    <div
      className="work-modal-overlay"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      ref={modalRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} – ${isVideo ? "Video" : "Image"}`}
    >
      {/* Close button */}
      <button
        className="work-modal-close"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close modal"
        type="button"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Content container – stop click propagation so clicking the video/image doesn't close */}
      <div className="work-modal-content" onClick={(e) => e.stopPropagation()}>
        {!hasMedia ? (
          <div className="work-modal-no-media">
            <span>No media available</span>
          </div>
        ) : isVideo ? (
          <video
            ref={videoRef}
            key={directUrl}
            src={directUrl}
            poster={posterUrl}
            className="work-modal-video"
            controls
            playsInline
            preload="auto"
            onError={(e) => {
              const error = e.currentTarget.error;
              console.error("Video Error:", {
                code: error?.code,
                message: error?.message,
                currentSrc: e.currentTarget.currentSrc,
              });
            }}
          >
            <source src={directUrl} type="video/mp4" />
          </video>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={directUrl}
            alt={media.altText || title}
            className="work-modal-image"
          />
        )}
        <div className="work-modal-title">{title}</div>
      </div>
    </div>
  );
}

/**
 * WorkModal renders via a React Portal to document.body,
 * ensuring it escapes any parent overflow:hidden or stacking context.
 */
export default function WorkModal(props: WorkModalProps) {
  return createPortal(<WorkModalContent {...props} />, document.body);
}
