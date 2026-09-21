import AdminShell from "@/components/admin/AdminShell";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin - Example Agency",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: "sans-serif", backgroundColor: "#f9fafb", minHeight: "100vh", color: "#111827" }}>
      <AdminShell>{children}</AdminShell>
    </div>
  );
}

