import { prisma } from "@/lib/db";
import SlidesList from "./SlidesList";

export default async function SlidesPage() {
  const slides = await prisma.heroSlide.findMany({
    orderBy: { order: "asc" },
  });

  return (
    <div>
      <h1 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0f172a" }}>Edit Hero Slides</h1>
      <p style={{ marginBottom: "2rem", color: "#64748b" }}>Manage the full-bleed marquee hero slides shown on the homepage.</p>
      <SlidesList initialData={slides} />
    </div>
  );
}
