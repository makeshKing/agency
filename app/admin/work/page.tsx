import { prisma } from "@/lib/db";
import WorkList from "./WorkList";

export default async function WorkPage() {
  const works = await prisma.workItem.findMany({
    orderBy: { order: "asc" },
  });

  return (
    <div>
      <h1 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0f172a" }}>Edit Work Items</h1>
      <p style={{ marginBottom: "2rem", color: "#64748b" }}>Manage your portfolio case studies. They appear in the featured grid and mobile list.</p>
      <WorkList initialData={works} />
    </div>
  );
}
