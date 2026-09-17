"use client";

import React from "react";
import { useWorkModal } from "./WorkModalProvider";
import { MediaType } from "./AdaptiveMedia";

interface WorkCardWrapperProps {
  /** The parsed media object for this work item */
  media: MediaType;
  /** Work item title – passed through to the modal */
  title: string;
  /** All rendered children (the card content: image, title, description) */
  children: React.ReactNode;
}

export default function WorkCardWrapper({ media, title, children }: WorkCardWrapperProps) {
  const { openModal } = useWorkModal();

  const handleOpen = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    openModal(media, title);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      handleOpen(e);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleOpen}
      onKeyDown={handleKeyDown}
      style={{ cursor: "pointer" }}
      aria-label={`View ${title}`}
    >
      {children}
    </div>
  );
}
