import { prisma } from "@/lib/db";
import JournalList from "./JournalList";

export default async function JournalPage() {
  const posts = await prisma.journalPost.findMany({
    orderBy: { order: "asc" },
  });

  return (
    <div>
      <h1 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0f172a" }}>Edit Journal Posts</h1>
      <p style={{ marginBottom: "2rem", color: "#64748b" }}>Manage editorial stories displayed in the homepage journal feed.</p>
      <JournalList initialData={posts} />
    </div>
  );
}
