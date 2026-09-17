import { prisma } from "@/lib/db";
import SettingsForm from "./SettingsForm";

export default async function SettingsPage() {
  const settings = await prisma.siteSettings.findFirst();

  if (!settings) return <div>No settings found</div>;

  return (
    <div>
      <h1 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0f172a" }}>Edit Site Settings & SEO</h1>
      <p style={{ marginBottom: "2rem", color: "#64748b" }}>Manage SEO metadata, branding, headers, work callouts, newsletter, and footer details.</p>
      <SettingsForm initialData={settings} />
    </div>
  );
}
