"use client";

import { useState, useEffect } from "react";

export interface PolaroidImage {
  src: string;
  alt: string;
}

interface HeroPolaroidProps {
  images: PolaroidImage[];
  position: "left" | "right";
  className?: string;
  initialIndex?: number;
}

export default function HeroPolaroid({
  images,
  position,
  className = "",
  initialIndex = 0,
}: HeroPolaroidProps) {
  const [index, setIndex] = useState(initialIndex);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => {
        setPrevIndex(prev);
        return (prev + 1) % images.length;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  if (!images || images.length === 0) return null;

  return (
    <div className={`polaroid-mask ${position} fade_extra ${className}`.trim()}>
      <div className="pol_holder">
        <div
          className="clip-up-pol"
          style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}
        >
          {images.map((img, i) => {
            const isActive = i === index;
            const isPrev = i === prevIndex;
            const zIndex = isActive ? 2 : isPrev ? 1 : 0;
            const isVisible = isActive || isPrev;

            return (
              <div
                key={i}
                className={`pol-mask ${isActive ? "start-visible" : ""}`}
                style={{
                  position: "absolute",
                  inset: "auto 0% 0%",
                  width: "100%",
                  height: isVisible ? "100%" : "0%",
                  zIndex,
                  overflow: "hidden",
                  transition:
                    mounted && isActive ? "height 0.8s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="polaroid-image"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: isActive ? "scale(1.0)" : "scale(1.06)",
                    transition:
                      mounted && isActive ? "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
                  }}
                  loading={i === initialIndex ? "eager" : "lazy"}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
