import type { Metadata } from "next";
import Script from "next/script";
import { prisma } from "@/lib/db";
import WorkModalProvider from "@/components/WorkModalProvider";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await prisma.siteSettings.findFirst();

  const title = settings?.seoTitle || "We Are Example | Brand Strategy, PR & Placemaking Agency | Sydney & Dubai";
  const description =
    settings?.seoDescription ||
    "We Are Example makes brands and places famous. Independent brand strategy, PR and placemaking agency working with luxury hospitality, drinks brands and destinations across Australia, the Middle East and Asia Pacific.";
  const ogTitle = settings?.ogTitle || title;
  const ogDescription = settings?.ogDescription || description;
  const ogImage = settings?.ogImage || "/images/67e101f0767f857eb14c5252_hook-island-slide22.jpg";
  const favicon = settings?.favicon || "/images/67d5543f178881123cbf2851_Favicon.png";
  const appleTouchIcon = settings?.appleTouchIcon || "/images/67d55445748485a56dd3640a_LargeIcon.png";

  return {
    title,
    description,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      images: [ogImage],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [ogImage],
    },
    icons: {
      icon: favicon,
      apple: appleTouchIcon,
    },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const settings = await prisma.siteSettings.findFirst();

  return (
    <html
      lang="en"
      className="w-mod-js"
      suppressHydrationWarning
      data-wf-domain="www.weareexample.com"
      data-wf-page="67c39171b02bf8b860a103ad"
      data-wf-site="67c31392fdfd613a8b633eb4"
      data-wf-intellimize-customer-id="117956190"
    >
      <head>
        <link href="https://cdn.prod.website-files.com" rel="preconnect" crossOrigin="anonymous" />
        <link href="/css/example-dev2.webflow.shared.fcec5c8e8.css" rel="stylesheet" type="text/css" />
        <link rel="canonical" href="https://www.weareexample.com" />
        <link rel="me" href="https://news.weareexample.com" />
        <link href="/js/117956190.js" rel="preload" as="script" />
        <link href="https://api.intellimize.co" rel="preconnect" crossOrigin="anonymous" />
        <link href="https://log.intellimize.co" rel="preconnect" crossOrigin="anonymous" />
        <link href="https://117956190.intellimizeio.com" rel="preconnect" />

        {/* Webflow JS touch detection — only adds w-mod-touch on touch devices; w-mod-js is already set on the html element above */}
        <Script
          id="webflow-touch"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(o,c){var n=c.documentElement,t=" w-mod-";("ontouchstart" in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")})(window,document);`,
          }}
        />

        {/* Intellimize anti-flicker */}
        <style>{`.anti-flicker,.anti-flicker *{visibility:hidden!important;opacity:0!important;}`}</style>
        <style>{`[data-wf-hidden-variation],[data-wf-hidden-variation]*{display:none!important;}`}</style>
        <Script
          id="intellimize-optout"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `if(localStorage.getItem('intellimize_data_tracking_type')!=='disabled'){localStorage.setItem('intellimize_opt_out_117956190','true');}if(localStorage.getItem('intellimize_data_tracking_type')!=='disabled'){localStorage.setItem('intellimize_data_tracking_type','disabled');}`,
          }}
        />
        <Script
          id="webflow-ready-queue"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(e){var s={r:[]};e.wf={r:s.r,ready:t=>{s.r.push(t)}}})(window)`,
          }}
        />
        <Script
          id="intellimize-anti-flicker"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(e,t,p){var n=document.documentElement,s={p:[],r:[]},u={p:s.p,r:s.r,push:function(e){s.p.push(e)},ready:function(e){s.r.push(e)}};e.intellimize=u,n.className+=" "+p,setTimeout(function(){n.className=n.className.replace(RegExp(" ?"+p),"")},t)})(window,4000,'anti-flicker')`,
          }}
        />

        {/* Animation / text-split styles */}
        <style>{`
[text-split]{opacity:0;}
html.w-editor [text-split]{opacity:1;}
.word{overflow:hidden;padding-bottom:0.1em;margin-bottom:-0.1em;transform-origin:bottom;}
img{opacity:0;}
.fade{opacity:0;}
.fade_extra{opacity:0;}
body{overscroll-behavior:none;}
input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,input:-webkit-autofill:active{transition:background-color 5000s;-webkit-text-fill-color:#ffffff!important;}
#FIRST:-webkit-autofill,#FIRST:-webkit-autofill:hover,#FIRST:-webkit-autofill:focus,#FIRST:-webkit-autofill:active{transition:background-color 5000s;-webkit-text-fill-color:#ffffff!important;}
#EMAIL:-webkit-autofill,#EMAIL:-webkit-autofill:hover,#EMAIL:-webkit-autofill:focus,#EMAIL:-webkit-autofill:active{transition:background-color 5000s;-webkit-text-fill-color:none!important;}
::selection{color:#F3F3F0;background:#0E1623;}
`}</style>

        {/* Underline link animation styles */}
        <style>{`
.underline-link::before,.underline-link.is--alt::before,.underline-link.is--alt::after{content:"";position:absolute;bottom:0em;left:0;width:100%;height:0.0625em;background-color:#0e1623;transition:transform 0.735s cubic-bezier(0.625,0.05,0,1);transform-origin:right;transform:scaleX(0) rotate(0.001deg);}
.underline-link:hover::before{transform-origin:left;transform:scaleX(1) rotate(0.001deg);}
.underline-link.is--alt::before{transform-origin:left;transform:scaleX(1) rotate(0.001deg);transition-delay:0.3s;}
.underline-link.is--alt:hover::before{transform-origin:right;transform:scaleX(0) rotate(0.001deg);transition-delay:0s;}
.underline-link.is--alt::after{transform-origin:right;transform:scaleX(0) rotate(0.001deg);transition-delay:0s;}
.underline-link.is--alt:hover::after{transform-origin:left;transform:scaleX(1) rotate(0.001deg);transition-delay:0.3s;}
.underline-link:focus::before,.underline-link.is--alt:focus::before,.underline-link.is--alt:focus::after{transform:scaleX(0) rotate(0.001deg);transform-origin:right;transition-delay:0s;}
.listing_link_group_holder .underline{display:block;position:relative;width:100%;height:0.4vw;background-color:#0e1623;transform-origin:right;transform:scaleX(1) rotate(0.001deg);transition:transform 0.735s cubic-bezier(0.625,0.05,0,1);}
.listing_link_group_holder:hover .underline{transform-origin:right;transform:scaleX(0) rotate(0.001deg);}
.listing_link_group_holder:not(:hover) .underline{transform-origin:left;transform:scaleX(1) rotate(0.001deg);}
`}</style>

        {/* Post-load styles */}
        <style>{`
.lil-gui{display:none!important;}
#webgl_holder{opacity:0;visibility:hidden;}
body:has([data-cursor]:hover) .cursor{opacity:1;}
.journal_body h2,.journal_body h3,.journal_body h4{font-size:inherit;font-family:inherit;line-height:1.05;font-weight:700;text-transform:none;margin-top:20px;margin-bottom:8px;}
.journal_body p{line-height:1.05;margin-bottom:12px;}
.journal_body ul,.journal_body ol{line-height:1.05;margin-top:0;margin-bottom:12px;padding-left:24px;}
.journal_body li{margin-bottom:6px;line-height:1.05;}
.journal_body blockquote{margin:24px 0;padding-left:24px;border-left:3px solid currentColor;}
.journal_body strong{font-weight:700;font-size:inherit;font-family:inherit;text-decoration:none;}
.journal_listing{display:flex;flex-direction:column;}
.journal_listing>.w-dyn-list:last-child{order:1;}
.journal_listing>.line{order:2;}
.journal_listing>.w-dyn-list:first-child{order:3;}
/* Suppress Intellimize visual-editor preview badges & overlays (non-production) */
[class*="intellimize-"],[id*="intellimize-"],[data-intellimize]{display:none!important;}
intellimize-editor,intellimize-badge,intellimize-label{display:none!important;}
`}</style>

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: settings?.logoText || "Example",
              url: "/",
              description: settings?.seoDescription || "Independent brand strategy and earned media agency...",
              slogan: settings?.workEyebrowSubtitle || "We make brands and places famous",
              email: settings?.contactEmail || "hello@weareexample.com",
              telephone: [settings?.phoneSydney || "+61 2 8322 4600", settings?.phoneDubai || "+971 800 0311 0209"],
              address: [
                { "@type": "PostalAddress", addressCountry: "AU", addressRegion: "NSW" },
                { "@type": "PostalAddress", addressCountry: "AE" },
              ],
              areaServed: ["AU", "NZ", "AE"],
              sameAs: [
                settings?.instagramUrl || "https://www.instagram.com/weareexample",
                settings?.linkedinUrl || "https://au.linkedin.com/company/we-are-example",
              ],
              knowsAbout: [
                "Brand Strategy","Brand Identity","Earned Media","Public Relations",
                "Communications","Hospitality Marketing","Placemaking","Social Media",
                "Content Strategy","Experiential Marketing","Influencer Marketing",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Example",
              alternateName: "Example Agency",
              url: "https://www.weareexample.com",
              description:
                "Independent brand strategy and earned media agency based in Sydney and Dubai, working with hospitality brands, premium drinks, F&B and consumer brands and destination businesses across Australia, the Middle East and Asia Pacific.",
              sameAs: ["https://www.instagram.com/weareexample","https://www.linkedin.com/company/weareexample"],
              areaServed: ["Australia","New Zealand","United Arab Emirates","Middle East","Asia Pacific"],
              location: [
                { "@type": "Place", name: "Example Sydney", address: { "@type": "PostalAddress", streetAddress: "69 Roslyn St", addressLocality: "Rushcutters Bay", addressRegion: "NSW", postalCode: "2011", addressCountry: "AU" }, telephone: "+61283224600" },
                { "@type": "Place", name: "Example Dubai", address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" }, telephone: "+97180003110209" },
              ],
              knowsAbout: ["Brand Strategy","PR & Communications","Earned Media","Hospitality Marketing","Experiential Marketing","luxury","Placemaking","Influencer Marketing","Drinks Brand Marketing","Hotel Marketing","Middle East Brand Agency","GCC Brand Agency"],
            }),
          }}
        />
      </head>
      <body data-barba="wrapper">
        <WorkModalProvider>
          {children}
        </WorkModalProvider>

        {/* jQuery first */}
        <Script src="/js/jquery-3.5.1.min.dc5e7f18c8.js" strategy="beforeInteractive" />
        {/* Webflow runtime */}
        <Script src="/js/webflow.schunk.36b8fb49256177c8.js" strategy="beforeInteractive" />
        <Script src="/js/webflow.schunk.d1b82651150dd7ed.js" strategy="beforeInteractive" />
        <Script src="/js/webflow.0de7d699.e42a5e094514a9c3.js" strategy="beforeInteractive" />
        {/* Custom GSAP/animation JS */}
        <Script src="/js/main.js" strategy="afterInteractive" />
        {/* Intellimize */}
        <Script src="/js/117956190.js" strategy="afterInteractive" />
        {/* SEO nav hide */}
        <Script
          src="/js/67c31392fdfd613a8b633eb4%2F689e5ba67671442434f3ca35%2F6a27c5b34eadc21cb124209f%2Fhideseonavv6-1.0.0.js"
          strategy="afterInteractive"
        />
        {/* FAQ schema */}
        <Script
          src="/js/67c31392fdfd613a8b633eb4%2F689e5ba67671442434f3ca35%2F6a26b25d43c1a71838729e38%2Fservice_faq_schema-1.0.0.js"
          strategy="afterInteractive"
        />

        {/* Footer fade on navigation */}
        <Script
          id="footer-fade-nav"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `document.addEventListener("click",(e)=>{const link=e.target.closest("a[href]");if(!link)return;const href=link.getAttribute("href");if(!href)return;if(link.target==="_blank"||href.startsWith("#")||href.startsWith("javascript:")||href.startsWith("mailto:")||href.startsWith("tel:"))return;const footer=document.querySelector(".footer");if(!footer)return;footer.style.transition="opacity 0.6s ease";footer.style.opacity="0";});`,
          }}
        />
      </body>
    </html>
  );
}
