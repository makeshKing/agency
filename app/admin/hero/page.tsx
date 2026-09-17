import { prisma } from "@/lib/db";
import HeroForm from "./HeroForm";

export default async function HeroPage() {
  const hero = await prisma.heroSection.findFirst();

  if (!hero) return <div>No hero data found</div>;

  return (
    <div>
      <h1 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0f172a" }}>Edit Hero Section</h1>
      <p style={{ marginBottom: "2rem", color: "#64748b" }}>Manage headline text, subheading, CTA, and 6 animated polaroids.</p>
      <HeroForm initialData={hero} />
    </div>
  );
}
