import { prisma } from "@/lib/db";
import LogosList from "./LogosList";

export default async function LogosPage() {
  const logos = await prisma.clientLogo.findMany({
    orderBy: [{ group: "asc" }, { order: "asc" }],
  });

  return (
    <div>
      <h1 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0f172a" }}>Edit Client Logos</h1>
      <p style={{ marginBottom: "2rem", color: "#64748b" }}>Manage the client partner logos displayed in Group 1 and Group 2 tickers.</p>
      <LogosList initialData={logos} />
    </div>
  );
}
