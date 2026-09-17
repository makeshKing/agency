"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const NAV_ITEMS = [
  { name: "Dashboard", href: "/admin", icon: "📊" },
  { name: "Hero Section", href: "/admin/hero", icon: "🌟" },
  { name: "Hero Slides", href: "/admin/slides", icon: "🎞️" },
  { name: "Work Items", href: "/admin/work", icon: "💼" },
  { name: "Journal Posts", href: "/admin/journal", icon: "📰" },
  { name: "Podcast Section", href: "/admin/podcast", icon: "🎙️" },
  { name: "Client Logos", href: "/admin/logos", icon: "🏢" },
  { name: "Navigation Menus", href: "/admin/nav", icon: "🧭" },
  { name: "Site Settings & SEO", href: "/admin/settings", icon: "⚙️" },
];

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f8fafc" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "260px",
          backgroundColor: "#0f172a",
          color: "#f8fafc",
          display: "flex",
          flexDirection: "column",
          flexShrink: 0,
          borderRight: "1px solid #1e293b",
        }}
      >
        <div style={{ padding: "1.5rem 1.25rem", borderBottom: "1px solid #1e293b" }}>
          <div style={{ fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.5px" }}>EXAMPLE</div>
          <div style={{ fontSize: "0.75rem", color: "#94a3b8", marginTop: "2px" }}>Admin Content Management</div>
        </div>

        <nav style={{ padding: "1rem 0.75rem", display: "flex", flexDirection: "column", gap: "0.25rem", flex: 1 }}>
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.65rem 0.85rem",
                  borderRadius: "6px",
                  fontSize: "0.875rem",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "#ffffff" : "#94a3b8",
                  backgroundColor: isActive ? "#1e293b" : "transparent",
                  textDecoration: "none",
                  transition: "all 0.15s ease",
                }}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div style={{ padding: "1rem", borderTop: "1px solid #1e293b", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 0.75rem",
              borderRadius: "6px",
              fontSize: "0.825rem",
              color: "#38bdf8",
              textDecoration: "none",
              backgroundColor: "rgba(56, 189, 248, 0.08)",
            }}
          >
            <span>↗</span>
            <span>View Public Site</span>
          </a>
          <button
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 0.75rem",
              borderRadius: "6px",
              fontSize: "0.825rem",
              color: "#f87171",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <span>🚪</span>
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, minWidth: 0, padding: "2.5rem 3rem", overflowY: "auto" }}>
        {children}
      </main>
    </div>
  );
}
