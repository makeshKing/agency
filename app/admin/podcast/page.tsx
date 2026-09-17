import { prisma } from "@/lib/db";
import PodcastForm from "./PodcastForm";

export default async function PodcastPage() {
  const podcast = await prisma.podcastSection.findFirst();

  return (
    <div>
      <h1 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0f172a" }}>Edit Fine Form Podcast</h1>
      <p style={{ marginBottom: "2rem", color: "#64748b" }}>Manage headline, descriptions, CTA button, and desktop & mobile graphics.</p>
      <PodcastForm initialData={podcast} />
    </div>
  );
}
