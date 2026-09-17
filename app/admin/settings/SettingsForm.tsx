"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ImageUploadPreview from "@/components/admin/ImageUploadPreview";

const TABS = [
  { id: "seo", label: "🔍 SEO & Social Share" },
  { id: "branding", label: "🏷️ Branding & Header" },
  { id: "work_client", label: "✨ Work & Client Text" },
  { id: "newsletter", label: "📬 Newsletter & Forms" },
  { id: "footer", label: "🦶 Footer & Legal" },
];

export default function SettingsForm({ initialData }: { initialData: any }) {
  const [formData, setFormData] = useState(initialData || {});
  const [activeTab, setActiveTab] = useState("seo");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (field: string, url: string) => {
    setFormData((prev: any) => ({ ...prev, [field]: url }));
  };

  const handleAltChange = (field: string, alt: string) => {
    setFormData((prev: any) => ({ ...prev, [field]: alt }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    try {
      const res = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to save");

      setMessage("Saved site settings successfully!");
      router.refresh();
    } catch (err) {
      setMessage("Error saving settings.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "900px", display: "flex", flexDirection: "column", gap: "1.75rem" }}>
      {message && (
        <div
          style={{
            padding: "1rem",
            backgroundColor: message.includes("Error") ? "#fee2e2" : "#d1fae5",
            color: message.includes("Error") ? "#991b1b" : "#065f46",
            borderRadius: "6px",
            fontWeight: 500,
          }}
        >
          {message}
        </div>
      )}

      {/* Tabs */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", borderBottom: "2px solid #e2e8f0", paddingBottom: "0.5rem" }}>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "6px",
              border: "none",
              backgroundColor: activeTab === tab.id ? "#0f172a" : "#f1f5f9",
              color: activeTab === tab.id ? "#ffffff" : "#475569",
              fontWeight: 600,
              fontSize: "0.85rem",
              cursor: "pointer",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB 1: SEO & SOCIAL SHARE */}
      {activeTab === "seo" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div style={cardStyle}>
            <h2 style={sectionTitleStyle}>Search Engine Optimization (SEO)</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label style={labelStyle}>Page Title Tag (&lt;title&gt;)</label>
                <input name="seoTitle" value={formData.seoTitle || ""} onChange={handleChange} style={inputStyle} />
                <span style={hintStyle}>Recommended: 50-60 characters for optimal Google ranking.</span>
              </div>
              <div>
                <label style={labelStyle}>Meta Description</label>
                <textarea name="seoDescription" value={formData.seoDescription || ""} onChange={handleChange} rows={3} style={inputStyle} />
                <span style={hintStyle}>Recommended: 150-160 characters snippet for search results.</span>
              </div>
            </div>
          </div>

          <div style={cardStyle}>
            <h2 style={sectionTitleStyle}>OpenGraph & Social Share Cards</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label style={labelStyle}>Social Share Title</label>
                <input name="ogTitle" value={formData.ogTitle || ""} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Social Share Description</label>
                <textarea name="ogDescription" value={formData.ogDescription || ""} onChange={handleChange} rows={2} style={inputStyle} />
              </div>

              <ImageUploadPreview
                label="Social Share Image (OG / Twitter Card Image)"
                imageValue={formData.ogImage || ""}
                altValue={formData.ogImageAlt || ""}
                onImageChange={(url) => handleImageChange("ogImage", url)}
                onAltChange={(alt) => handleAltChange("ogImageAlt", alt)}
                aspectRatio="16/9"
                recommendedSize="1200x630px recommended"
              />
            </div>
          </div>

          <div style={cardStyle}>
            <h2 style={sectionTitleStyle}>Favicon & App Icons</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              <ImageUploadPreview
                label="Favicon (32x32)"
                imageValue={formData.favicon || ""}
                altValue="Site Favicon"
                onImageChange={(url) => handleImageChange("favicon", url)}
                onAltChange={() => {}}
                aspectRatio="1/1"
                recommendedSize="32x32 png or ico"
              />
              <ImageUploadPreview
                label="Apple Touch Icon (Large Icon)"
                imageValue={formData.appleTouchIcon || ""}
                altValue="Apple Touch Icon"
                onImageChange={(url) => handleImageChange("appleTouchIcon", url)}
                onAltChange={() => {}}
                aspectRatio="1/1"
                recommendedSize="180x180 png"
              />
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: BRANDING & HEADER */}
      {activeTab === "branding" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div style={cardStyle}>
            <h2 style={sectionTitleStyle}>Logo & Interactive Cursor</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
              <div>
                <label style={labelStyle}>Logo Text (Fallback)</label>
                <input name="logoText" value={formData.logoText || ""} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Custom Cursor Hover Label</label>
                <input name="cursorText" value={formData.cursorText || ""} onChange={handleChange} placeholder="Learn more" style={inputStyle} />
              </div>
            </div>

            <ImageUploadPreview
              label="Custom Logo Image (Optional - overrides default letter SVGs)"
              imageValue={formData.logoCustomImage || ""}
              altValue={formData.logoCustomImageAlt || ""}
              onImageChange={(url) => handleImageChange("logoCustomImage", url)}
              onAltChange={(alt) => handleAltChange("logoCustomImageAlt", alt)}
              aspectRatio="contain"
              recommendedSize="Vector SVG or transparent PNG"
            />
          </div>

          <div style={cardStyle}>
            <h2 style={sectionTitleStyle}>Header Contact Buttons</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
              <div>
                <label style={labelStyle}>Desktop Top Right Button Text</label>
                <input name="navEmailLabelDesktop" value={formData.navEmailLabelDesktop || ""} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Desktop Top Right Button URL</label>
                <input name="navEmailUrlDesktop" value={formData.navEmailUrlDesktop || ""} onChange={handleChange} style={inputStyle} />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <label style={labelStyle}>Mobile Top Right Link Text</label>
                <input name="navEmailLabelMob" value={formData.navEmailLabelMob || ""} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Mobile Top Right Link URL</label>
                <input name="navEmailUrlMob" value={formData.navEmailUrlMob || ""} onChange={handleChange} style={inputStyle} />
              </div>
            </div>
          </div>

          <div style={cardStyle}>
            <h2 style={sectionTitleStyle}>Mega Menu Header & Button Labels</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
              <div>
                <label style={labelStyle}>Column 1 Heading</label>
                <input name="navWhoWeHelpHeading" value={formData.navWhoWeHelpHeading || ""} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Column 2 Heading</label>
                <input name="navWhatWeDoHeading" value={formData.navWhatWeDoHeading || ""} onChange={handleChange} style={inputStyle} />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
              <div>
                <label style={labelStyle}>Close Menu Label</label>
                <input name="navMenuCloseText" value={formData.navMenuCloseText || ""} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Footer Button Label</label>
                <input name="navMenuViewAllText" value={formData.navMenuViewAllText || ""} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Footer Button URL</label>
                <input name="navMenuViewAllUrl" value={formData.navMenuViewAllUrl || ""} onChange={handleChange} style={inputStyle} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: WORK & CLIENT SECTION */}
      {activeTab === "work_client" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div style={cardStyle}>
            <h2 style={sectionTitleStyle}>Work Section Eyebrows & Statement</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
              <div>
                <label style={labelStyle}>Section Eyebrow Title</label>
                <input name="workEyebrowTitle" value={formData.workEyebrowTitle || ""} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Section Eyebrow Subtitle</label>
                <input name="workEyebrowSubtitle" value={formData.workEyebrowSubtitle || ""} onChange={handleChange} style={inputStyle} />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1rem" }}>
              <label style={labelStyle}>Large Callout Headline (3-part highlight text)</label>
              <input name="workCalloutLine1" value={formData.workCalloutLine1 || ""} onChange={handleChange} placeholder="Line 1: The things that earn attention are always" style={inputStyle} />
              <input name="workCalloutHighlight" value={formData.workCalloutHighlight || ""} onChange={handleChange} placeholder="Line 2 (Hero Accent): more valuable" style={{ ...inputStyle, fontWeight: 700 }} />
              <input name="workCalloutLine2" value={formData.workCalloutLine2 || ""} onChange={handleChange} placeholder="Line 3: than the things that buy it" style={inputStyle} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <label style={labelStyle}>&quot;All Work&quot; Button Label</label>
                <input name="workAllWorkText" value={formData.workAllWorkText || ""} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>&quot;All Work&quot; Button URL</label>
                <input name="workAllWorkUrl" value={formData.workAllWorkUrl || ""} onChange={handleChange} style={inputStyle} />
              </div>
            </div>
          </div>

          <div style={cardStyle}>
            <h2 style={sectionTitleStyle}>Featured Work Stats Tile (4 Corner Badges)</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <label style={labelStyle}>Top Left Badge</label>
                <input name="workStatsTagTopLeft" value={formData.workStatsTagTopLeft || ""} onChange={handleChange} placeholder="AUS" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Top Right Badge</label>
                <input name="workStatsTagTopRight" value={formData.workStatsTagTopRight || ""} onChange={handleChange} placeholder="NZ" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Bottom Left Badge</label>
                <input name="workStatsTagBottomLeft" value={formData.workStatsTagBottomLeft || ""} onChange={handleChange} placeholder="UAE" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Bottom Right Badge</label>
                <input name="workStatsTagBottomRight" value={formData.workStatsTagBottomRight || ""} onChange={handleChange} placeholder="26" style={inputStyle} />
              </div>
            </div>
          </div>

          <div style={cardStyle}>
            <h2 style={sectionTitleStyle}>Client Logos Statement & Tagline</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
              <div>
                <label style={labelStyle}>Line 1 Prefix</label>
                <input name="clientFeatureHelp" value={formData.clientFeatureHelp || ""} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Line 1 Suffix</label>
                <input name="clientFeatureName" value={formData.clientFeatureName || ""} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Line 2</label>
                <input name="clientFeaturePlace" value={formData.clientFeaturePlace || ""} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Line 3 Suffix</label>
                <input name="clientFeatureMoment" value={formData.clientFeatureMoment || ""} onChange={handleChange} style={inputStyle} />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Bottom Statement Tagline</label>
              <input name="clientTagline" value={formData.clientTagline || ""} onChange={handleChange} style={inputStyle} />
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: NEWSLETTER & FORMS */}
      {activeTab === "newsletter" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div style={cardStyle}>
            <h2 style={sectionTitleStyle}>Homepage Newsletter Block</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
              <div>
                <label style={labelStyle}>Eyebrow Heading</label>
                <input name="newsletterHeading" value={formData.newsletterHeading || ""} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Reader Count Badge</label>
                <input name="newsletterBadge" value={formData.newsletterBadge || ""} onChange={handleChange} style={inputStyle} />
              </div>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label style={labelStyle}>Main Title</label>
              <input name="newsletterTitle" value={formData.newsletterTitle || ""} onChange={handleChange} style={inputStyle} />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label style={labelStyle}>Subtext / Description</label>
              <textarea name="newsletterSubtext" value={formData.newsletterSubtext || ""} onChange={handleChange} rows={3} style={inputStyle} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
              <div>
                <label style={labelStyle}>Disclaimer / Subtitle</label>
                <input name="newsletterDisclaimer" value={formData.newsletterDisclaimer || ""} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Input Placeholder</label>
                <input name="newsletterPlaceholder" value={formData.newsletterPlaceholder || ""} onChange={handleChange} style={inputStyle} />
              </div>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label style={labelStyle}>Submit Button Text</label>
              <input name="newsletterButtonText" value={formData.newsletterButtonText || ""} onChange={handleChange} style={inputStyle} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <label style={labelStyle}>Success Message</label>
                <input name="newsletterSuccessMessage" value={formData.newsletterSuccessMessage || ""} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Error Message</label>
                <input name="newsletterErrorMessage" value={formData.newsletterErrorMessage || ""} onChange={handleChange} style={inputStyle} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: FOOTER & LEGAL */}
      {activeTab === "footer" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div style={cardStyle}>
            <h2 style={sectionTitleStyle}>Footer Headings & Contacts</h2>
            <div style={{ marginBottom: "1rem" }}>
              <label style={labelStyle}>Footer Large Headline</label>
              <textarea name="footerHeadline" value={formData.footerHeadline || ""} onChange={handleChange} rows={2} style={inputStyle} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
              <div>
                <label style={labelStyle}>Locations Subheading</label>
                <input name="footerLocationsText" value={formData.footerLocationsText || ""} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Mobile Slogan</label>
                <input name="footerSloganMob" value={formData.footerSloganMob || ""} onChange={handleChange} style={inputStyle} />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
              <div>
                <label style={labelStyle}>Contact Email</label>
                <input name="contactEmail" value={formData.contactEmail || ""} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Phone (Sydney / Australia)</label>
                <input name="phoneSydney" value={formData.phoneSydney || ""} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Phone (Dubai / Middle East)</label>
                <input name="phoneDubai" value={formData.phoneDubai || ""} onChange={handleChange} style={inputStyle} />
              </div>
            </div>
          </div>

          <div style={cardStyle}>
            <h2 style={sectionTitleStyle}>Land Acknowledgement & Legal</h2>
            <div style={{ marginBottom: "1rem" }}>
              <label style={labelStyle}>Traditional Custodians / Land Acknowledgement</label>
              <textarea name="footerLandAcknowledgement" value={formData.footerLandAcknowledgement || ""} onChange={handleChange} rows={3} style={inputStyle} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
              <div>
                <label style={labelStyle}>Copyright Line</label>
                <input name="copyrightText" value={formData.copyrightText || ""} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Rights Reserved Label</label>
                <input name="footerRightsText" value={formData.footerRightsText || ""} onChange={handleChange} style={inputStyle} />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
              <div>
                <label style={labelStyle}>Privacy Policy Text</label>
                <input name="footerPrivacyText" value={formData.footerPrivacyText || ""} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Privacy Policy Link URL</label>
                <input name="footerPrivacyUrl" value={formData.footerPrivacyUrl || ""} onChange={handleChange} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Credits Label</label>
                <input name="footerCreditsPrefix" value={formData.footerCreditsPrefix || ""} onChange={handleChange} placeholder="Made by" style={inputStyle} />
              </div>
            </div>
          </div>

          <div style={cardStyle}>
            <h2 style={sectionTitleStyle}>Footer Decorative Team/Brand Image</h2>
            <ImageUploadPreview
              label="Footer Atmosphere Image"
              imageValue={formData.footerImage || ""}
              altValue={formData.footerImageAlt || ""}
              onImageChange={(url) => handleImageChange("footerImage", url)}
              onAltChange={(alt) => handleAltChange("footerImageAlt", alt)}
              aspectRatio="16/9"
              recommendedSize="Landscape wide atmospheric visual"
            />
          </div>
        </div>
      )}

      <div style={{ position: "sticky", bottom: "1.5rem", zIndex: 10 }}>
        <button
          type="submit"
          disabled={saving}
          style={{
            padding: "0.85rem 2rem",
            backgroundColor: "#0f172a",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontWeight: 600,
            fontSize: "1rem",
            cursor: saving ? "not-allowed" : "pointer",
            boxShadow: "0 4px 6px rgba(0,0,0,0.15)",
          }}
        >
          {saving ? "Saving Changes..." : "Save Site Settings"}
        </button>
      </div>
    </form>
  );
}

const cardStyle = {
  backgroundColor: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "10px",
  padding: "1.75rem",
  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
};

const sectionTitleStyle = {
  fontSize: "1.15rem",
  fontWeight: 600,
  color: "#0f172a",
  marginBottom: "1rem",
};

const labelStyle = {
  display: "block",
  marginBottom: "0.35rem",
  fontWeight: 600,
  fontSize: "0.85rem",
  color: "#334155",
};

const hintStyle = {
  display: "block",
  marginTop: "0.25rem",
  fontSize: "0.75rem",
  color: "#64748b",
};

const inputStyle = {
  width: "100%",
  padding: "0.55rem 0.75rem",
  border: "1px solid #cbd5e1",
  borderRadius: "6px",
  fontFamily: "inherit",
  fontSize: "0.9rem",
};
