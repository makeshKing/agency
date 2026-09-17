"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { MediaType } from "./AdaptiveMedia";
import WorkModal from "./WorkModal";

interface WorkModalContextValue {
  openModal: (media: MediaType, title: string) => void;
  closeModal: () => void;
}

const WorkModalContext = createContext<WorkModalContextValue | null>(null);

export function useWorkModal(): WorkModalContextValue {
  const ctx = useContext(WorkModalContext);
  if (!ctx) {
    throw new Error("useWorkModal must be used within a <WorkModalProvider>");
  }
  return ctx;
}

interface ActiveItem {
  media: MediaType;
  title: string;
}

export default function WorkModalProvider({ children }: { children: React.ReactNode }) {
  const [activeItem, setActiveItem] = useState<ActiveItem | null>(null);

  const openModal = useCallback((media: MediaType, title: string) => {
    setActiveItem({ media, title });
  }, []);

  const closeModal = useCallback(() => {
    setActiveItem(null);
  }, []);

  return (
    <WorkModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {activeItem && (
        <WorkModal
          media={activeItem.media}
          title={activeItem.title}
          onClose={closeModal}
        />
      )}
    </WorkModalContext.Provider>
  );
}
