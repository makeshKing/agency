import { auth } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AdminDashboard() {
  const session = await auth();
  if (!session) redirect("/admin/login");

  const sections = [
    { name: "Hero Section", path: "/admin/hero", icon: "🌟", desc: "Main headline, subheading, CTA, and 6 polaroid images with alt text." },
    { name: "Hero Slides", path: "/admin/slides", icon: "🎞️", desc: "Manage scrolling hero banner slides: add, delete, and reorder." },
    { name: "Work Items", path: "/admin/work", icon: "💼", desc: "Portfolio case studies: title, description, link, slot layout, and cover images." },
    { name: "Journal Posts", path: "/admin/journal", icon: "📰", desc: "Blog and editorial articles: title, excerpt, thumbnail, and link." },
    { name: "Podcast Section", path: "/admin/podcast", icon: "🎙️", desc: "Fine Form Podcast: title, descriptions, CTA button, desktop and mobile images." },
    { name: "Client Logos", path: "/admin/logos", icon: "🏢", desc: "Client partner logos for Group 1 and Group 2: add, delete, and reorder." },
    { name: "Navigation Menus", path: "/admin/nav", icon: "🧭", desc: "Manage links across mega menus, header nav, mobile menu, and footer quicklinks." },
    { name: "Site Settings & SEO", path: "/admin/settings", icon: "⚙️", desc: "Global branding, SEO title/description, OG image, callouts, newsletter, and footer details." },
  ];

  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "1.875rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.5rem" }}>
          Welcome back, {session.user?.email || "Admin"}
        </h1>
        <p style={{ color: "#64748b", fontSize: "0.95rem" }}>
          Zero hardcoded text or images: every visible element on the public site can be edited from this panel.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
        {sections.map((card) => (
          <Link
            key={card.path}
            href={card.path}
            style={{
              display: "block",
              padding: "1.5rem",
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
              border: "1px solid #e2e8f0",
              textDecoration: "none",
              color: "inherit",
              transition: "transform 0.15s ease, box-shadow 0.15s ease",
            }}
          >
            <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{card.icon}</div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#0f172a", marginBottom: "0.35rem" }}>{card.name}</h3>
            <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.4 }}>{card.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

