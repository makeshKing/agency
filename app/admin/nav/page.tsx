import { prisma } from "@/lib/db";
import NavList from "./NavList";

export default async function NavPage() {
  const links = await prisma.navLink.findMany({
    orderBy: [{ group: "asc" }, { order: "asc" }],
  });

  return (
    <div>
      <h1 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0f172a" }}>Navigation & Menus</h1>
      <p style={{ marginBottom: "2rem", color: "#64748b" }}>Manage all links across dropdown menus, top navbar, mobile menu, and footer.</p>
      <NavList initialData={links} />
    </div>
  );
}
