import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // 1. Admin user
  const hashedPassword = await bcrypt.hash("changeme123", 10);
  await prisma.admin.upsert({
    where: { email: "admin@weareexample.com" },
    update: {},
    create: { email: "admin@weareexample.com", password: hashedPassword },
  });
  console.log("✅ Admin user created (admin@weareexample.com / changeme123)");

  // 2. Site Settings
  await prisma.siteSettings.upsert({
    where: { id: "singleton" },
    update: {
      seoTitle: "We Are Example | Brand Strategy, PR & Placemaking Agency | Sydney & Dubai",
      seoDescription: "We Are Example makes brands and places famous. Independent brand strategy, PR and placemaking agency working with luxury hospitality, drinks brands and destinations across Australia, the Middle East and Asia Pacific.",
      ogTitle: "We Are Example | Brand Strategy, PR & Placemaking Agency | Sydney & Dubai",
      ogDescription: "The agency that makes brands and places famous. Brand strategy, PR and placemaking for luxury hospitality brands, drinks labels and destination properties across Australia and the Middle East.",
      ogImage: "/images/67e101f0767f857eb14c5252_hook-island-slide22.jpg",
      ogImageAlt: "We Are Example Agency",
      favicon: "/images/67d5543f178881123cbf2851_Favicon.png",
      appleTouchIcon: "/images/67d55445748485a56dd3640a_LargeIcon.png",
      cursorText: "Learn more",
      logoText: "EXAMPLE",
      logoCustomImage: "",
      logoCustomImageAlt: "Example Agency Logo",
      contactEmail: "hello@weareexample.com",
      contactEmailSubject: "Hi!",
      navEmailLabelDesktop: "mbist0066.com",
      navEmailUrlDesktop: "mailto:hello@weareexample.com?subject=Hi!",
      navEmailLabelMob: "info@example.com.au",
      navEmailUrlMob: "mailto:info@example.com.au?subject=Hi!",
      navWhoWeHelpHeading: "WHO WE HELP",
      navWhatWeDoHeading: "what we do",
      navMenuCloseText: "Close",
      navMenuViewAllText: "VIEW ALL WORK",
      navMenuViewAllUrl: "/what-we-do",
      arrowIcon: "/images/67c3bc53b872a81fe6f8968a_LinkArrow.svg",
      arrowIconAlt: "Link arrow icon",
      workEyebrowTitle: "We are Example",
      workEyebrowSubtitle: "We Make Brands and Places Famous",
      workCalloutLine1: "The things that earn attention are always",
      workCalloutHighlight: "more valuable",
      workCalloutLine2: "than the things that buy it",
      workAllWorkText: "All Work",
      workAllWorkUrl: "/what-we-do",
      workStatsTagTopLeft: "AUS",
      workStatsTagTopRight: "NZ",
      workStatsTagBottomLeft: "UAE",
      workStatsTagBottomRight: "26",
      floatingHelpHeading: "WHO WE HELP",
      floatingArrowIcon: "/images/67d6f507937bee50f39cb6a3_GreatWhiteArrow.svg",
      floatingArrowIconAlt: "Arrow icon",
      clientCornerIcon: "/images/67d7189a82f3dab39365b588_ClientCorner.svg",
      clientCornerIconAlt: "Corner decoration",
      clientFeatureHelp: "We help",
      clientFeatureName: "earn their name,",
      clientFeaturePlace: "Earn their place,",
      clientFeatureAnd: "and",
      clientFeatureMoment: "earn their moment",
      clientTagline: "And we stay until the work is done",
      newsletterHeading: "FOR EXAMPLE",
      newsletterBadge: "Join 15,000+ Readers",
      newsletterTitle: "FOR EXAMPLE",
      newsletterSubtext: "Every week the design, culture, and brand stories worth knowing about, before everyone else does.",
      newsletterDisclaimer: "Always Free. Unsubscribe Anytime.",
      newsletterPlaceholder: "Your email address...",
      newsletterButtonText: "SIGN ME UP",
      newsletterSuccessMessage: "Thank you! Your submission has been received!",
      newsletterErrorMessage: "Oops! Something went wrong while submitting the form.",
      footerSloganMob: "Independent agency for brands and destinations",
      footerHeadline: "The best client relationships start with a good conversation.",
      footerLocationsText: "Australia / New Zealand / Middle East",
      phoneSydney: "+61 2 8322 4600",
      phoneDubai: "+971 800 0311 0209",
      footerQuicklinksTitle: "Quicklinks",
      footerLandAcknowledgement: "We acknowledge the Traditional Custodians of the land on which we work and live, and pay our respects to Elders past and present. We recognise their continuing connection to land, waters and culture.",
      footerNewsletterTitle: "Subscribe to our Newsletter",
      footerNewsletterSubtext: "Always Free. Unsubscribe Anytime.",
      footerNewsletterPlaceholder: "Your email address...",
      footerNewsletterButtonText: "SIGN ME UP",
      footerNewsletterSuccess: "Thank you! Your submission has been received!",
      footerNewsletterError: "Oops! Something went wrong while submitting the form.",
      copyrightText: "©2026 Example",
      footerRightsText: "All Rights Reserved.",
      footerPrivacyText: "Privacy Policy",
      footerPrivacyUrl: "#",
      footerCreditsPrefix: "Made by",
      footerImage: "/images/67d76cd49b9cdd619b9f3ffa_Footer_image.avif",
      footerImageAlt: "Example Agency brand and team imagery",
      instagramUrl: "https://www.instagram.com/weareexample",
      linkedinUrl: "https://au.linkedin.com/company/we-are-example",
    },
    create: {
      id: "singleton",
      seoTitle: "We Are Example | Brand Strategy, PR & Placemaking Agency | Sydney & Dubai",
      seoDescription: "We Are Example makes brands and places famous. Independent brand strategy, PR and placemaking agency working with luxury hospitality, drinks brands and destinations across Australia, the Middle East and Asia Pacific.",
      ogTitle: "We Are Example | Brand Strategy, PR & Placemaking Agency | Sydney & Dubai",
      ogDescription: "The agency that makes brands and places famous. Brand strategy, PR and placemaking for luxury hospitality brands, drinks labels and destination properties across Australia and the Middle East.",
      ogImage: "/images/67e101f0767f857eb14c5252_hook-island-slide22.jpg",
      ogImageAlt: "We Are Example Agency",
      favicon: "/images/67d5543f178881123cbf2851_Favicon.png",
      appleTouchIcon: "/images/67d55445748485a56dd3640a_LargeIcon.png",
      cursorText: "Learn more",
      logoText: "EXAMPLE",
      logoCustomImage: "",
      logoCustomImageAlt: "Example Agency Logo",
      contactEmail: "hello@weareexample.com",
      contactEmailSubject: "Hi!",
      navEmailLabelDesktop: "mbist0066.com",
      navEmailUrlDesktop: "mailto:hello@weareexample.com?subject=Hi!",
      navEmailLabelMob: "info@example.com.au",
      navEmailUrlMob: "mailto:info@example.com.au?subject=Hi!",
      navWhoWeHelpHeading: "WHO WE HELP",
      navWhatWeDoHeading: "what we do",
      navMenuCloseText: "Close",
      navMenuViewAllText: "VIEW ALL WORK",
      navMenuViewAllUrl: "/what-we-do",
      arrowIcon: "/images/67c3bc53b872a81fe6f8968a_LinkArrow.svg",
      arrowIconAlt: "Link arrow icon",
      workEyebrowTitle: "We are Example",
      workEyebrowSubtitle: "We Make Brands and Places Famous",
      workCalloutLine1: "The things that earn attention are always",
      workCalloutHighlight: "more valuable",
      workCalloutLine2: "than the things that buy it",
      workAllWorkText: "All Work",
      workAllWorkUrl: "/what-we-do",
      workStatsTagTopLeft: "AUS",
      workStatsTagTopRight: "NZ",
      workStatsTagBottomLeft: "UAE",
      workStatsTagBottomRight: "26",
      floatingHelpHeading: "WHO WE HELP",
      floatingArrowIcon: "/images/67d6f507937bee50f39cb6a3_GreatWhiteArrow.svg",
      floatingArrowIconAlt: "Arrow icon",
      clientCornerIcon: "/images/67d7189a82f3dab39365b588_ClientCorner.svg",
      clientCornerIconAlt: "Corner decoration",
      clientFeatureHelp: "We help",
      clientFeatureName: "earn their name,",
      clientFeaturePlace: "Earn their place,",
      clientFeatureAnd: "and",
      clientFeatureMoment: "earn their moment",
      clientTagline: "And we stay until the work is done",
      newsletterHeading: "FOR EXAMPLE",
      newsletterBadge: "Join 15,000+ Readers",
      newsletterTitle: "FOR EXAMPLE",
      newsletterSubtext: "Every week the design, culture, and brand stories worth knowing about, before everyone else does.",
      newsletterDisclaimer: "Always Free. Unsubscribe Anytime.",
      newsletterPlaceholder: "Your email address...",
      newsletterButtonText: "SIGN ME UP",
      newsletterSuccessMessage: "Thank you! Your submission has been received!",
      newsletterErrorMessage: "Oops! Something went wrong while submitting the form.",
      footerSloganMob: "Independent agency for brands and destinations",
      footerHeadline: "The best client relationships start with a good conversation.",
      footerLocationsText: "Australia / New Zealand / Middle East",
      phoneSydney: "+61 2 8322 4600",
      phoneDubai: "+971 800 0311 0209",
      footerQuicklinksTitle: "Quicklinks",
      footerLandAcknowledgement: "We acknowledge the Traditional Custodians of the land on which we work and live, and pay our respects to Elders past and present. We recognise their continuing connection to land, waters and culture.",
      footerNewsletterTitle: "Subscribe to our Newsletter",
      footerNewsletterSubtext: "Always Free. Unsubscribe Anytime.",
      footerNewsletterPlaceholder: "Your email address...",
      footerNewsletterButtonText: "SIGN ME UP",
      footerNewsletterSuccess: "Thank you! Your submission has been received!",
      footerNewsletterError: "Oops! Something went wrong while submitting the form.",
      copyrightText: "©2026 Example",
      footerRightsText: "All Rights Reserved.",
      footerPrivacyText: "Privacy Policy",
      footerPrivacyUrl: "#",
      footerCreditsPrefix: "Made by",
      footerImage: "/images/67d76cd49b9cdd619b9f3ffa_Footer_image.avif",
      footerImageAlt: "Example Agency brand and team imagery",
      instagramUrl: "https://www.instagram.com/weareexample",
      linkedinUrl: "https://au.linkedin.com/company/we-are-example",
    },
  });
  console.log("✅ Site settings seeded");

  // 3. Hero Section
  await prisma.heroSection.upsert({
    where: { id: "singleton" },
    update: {
      polaroidLeft1Alt: "Example agency hospitality showcase",
      polaroidLeft2Alt: "Example agency cocktail and dining showcase",
      polaroidLeft3Alt: "Example Agency Sydney & Dubai",
      polaroidRight1Alt: "Example agency event activation",
      polaroidRight2Alt: "Example agency lifestyle branding",
      polaroidRight3Alt: "Example Agency Sydney & Dubai",
    },
    create: {
      id: "singleton",
      headlineLine1: "We",
      headlineLine2: "make BRANDS",
      headlineLine3: "AND\u00a0PLACES",
      headlineLine4: "FAMOUS",
      subheading: "Brand Strategy, Design and PR for Hospitality, F&B and consumer brands across Australia, The Middle East & Asia Pacific",
      ctaText: "What we do",
      ctaLink: "/what-we-do",
      polaroidLeft1: "/images/69c665efc772d742875d88e4_67e100cf88cd84eacfe17596_polaroid-image-opt4.avif",
      polaroidLeft1Alt: "Example agency hospitality showcase",
      polaroidLeft2: "/images/69c66610a0f830c3a1f52f64_67e100d80a74e90f9a9c0103_polaroid-image-opt3.avif",
      polaroidLeft2Alt: "Example agency cocktail and dining showcase",
      polaroidLeft3: "/images/69c6662f79641a0bf1404eb1_67e100de71d37c15ef4f7c84_polaroid-image-opt2.avif",
      polaroidLeft3Alt: "Example Agency Sydney & Dubai",
      polaroidRight1: "/images/67e0fe4b4f15832fc4651b28_unnamed (5).avif",
      polaroidRight1Alt: "Example agency event activation",
      polaroidRight2: "/images/69c66649e541e29ba22d23dc_67f3abf7bfe7a69e94a2eeba_67e1c681df188e044a67e311_Screenshot 2025-03-25 at 7.54.17 am.avif",
      polaroidRight2Alt: "Example agency lifestyle branding",
      polaroidRight3: "/images/67e0fe5e8e81037e9e91b71a_unnamed (6).avif",
      polaroidRight3Alt: "Example Agency Sydney & Dubai",
    },
  });
  console.log("✅ Hero section seeded");

  // 4. Hero Slides
  await prisma.heroSlide.deleteMany();
  const slides = [
    {
      order: 1,
      heading: "DESTINATIONS & PLACEMAKING",
      description: "We give destinations a single story carried through every wall, every menu, and every detail.",
      image: "/images/69c6645d9d1a1f68a23d3389_67e101f0767f857eb14c5252_hook-island-slide22.avif",
      imageAlt: "Hook Island destination placemaking",
      numberLabel: "01",
    },
    {
      order: 2,
      heading: "HOSPITALITY",
      description: "We make hospitality brands famous through strategy, communications, and the story guests can’t stop telling.",
      image: "/images/69c6647ed177971d4a7ad8ef_67e0ff2d43cf170bd0545d5c_67e0ef988179-slide (1).avif",
      imageAlt: "Luxury hospitality venue atmosphere",
      numberLabel: "02",
    },
    {
      order: 3,
      heading: "CONSUMER BRANDS",
      description: "We build the strategy, story, and moments that make consumer brands famous.",
      image: "/images/69c6647135e36d82b06fc1d4_67de0a3d91ba6760900cf419_Birdcage_DonJulio_Lana Wilkinson_5.avif",
      imageAlt: "Consumer brand activation Birdcage Don Julio",
      numberLabel: "03",
    },
  ];
  for (const slide of slides) {
    await prisma.heroSlide.create({ data: slide });
  }
  console.log("✅ Hero slides seeded");

  // 5. Work Items
  await prisma.workItem.deleteMany();
  const workItems = [
    { order: 1, title: "Don Julio 1942", description: "129% sales uplift. 500M+ earned reach. 850+ pieces of coverage. Diageo’s most talked-about Australian launch. From unknown in APAC to the one every venue wanted.", image: "/images/69cbd8b004769387bc1f446d_69cbd1d5750c3ab50cd60a53_don-julio-1942_listing-image_67dcfb62fc75610ea069ba4b.webp", imageAlt: "Don Julio 1942 by EXAMPLE Agency", link: "/work/don-julio-1942", slot: "slot1", regionTags: "AUS", cursorText: "View Work", isFeatured: true },
    { order: 2, title: "PATRÓN TEQUILA x SOLE DXB", description: "#1 revenue bar at SOLE DXB. 1.9M organic views. 222 pieces of coverage at the ARIAs. 63M reach. Zero paid media. Cultural platform across AMEA and Australia.", image: "/images/69cbd924bf20ab3e58a2d850_69cbd25fe5742986335fea6a_patron-tequila_listing-image_691f176ca5bc9b55d306fdc0.webp", imageAlt: "PATRÓN TEQUILA x SOLE DXB by EXAMPLE Agency", link: "/work/patron-tequila", slot: "slot1", regionTags: "UAE", cursorText: "View Work", isFeatured: true },
    { order: 3, title: "Addmind Dubai Harbour", description: "Brand architecture, positioning and launch strategy for two new venue concepts at Dubai Harbour.", image: "/images/69cbd89601e4567fdade7e68_69cbd1a0cffaf80b7858f893_addmind-dubai-harbour_listing-image_691f16c8b57321a380233137.webp", imageAlt: "Addmind Dubai Harbour by EXAMPLE Agency", link: "/work/addmind-dubai-harbour", slot: "slot2", regionTags: "UAE", cursorText: "View Work", isFeatured: true },
    { order: 4, title: "QT Hotels", description: "Multi-year creative partnership. 68% repeat visitation. 203M reach for Newcastle. Mumbrella nominations. Every brief: what would QT dare that others won’t?", image: "/images/69cbd942141a5e7d231207e4_69cbd28274cb99d4c0331269_qt_listing-image_67dcf66a7f1809ce986282a7.webp", imageAlt: "QT Hotels by EXAMPLE Agency", link: "/work/qt", slot: "slot3-n", regionTags: "AUS", cursorText: "View Work", isFeatured: true },
    { order: 5, title: "JW Marriott", description: "31% ADR increase. 47% direct booking rate, the highest in the Marriott APAC portfolio. All earned.", image: "/images/69cbd8f60863a79ee4811c5d_69cbd228e5742986335fbefe_jw-marriott-gold-coast_listing-image_67e3998e923cb68cfccd1e55.webp", imageAlt: "JW Marriott by EXAMPLE Agency", link: "/work/jw-marriott-gold-coast", slot: "slot4", regionTags: "AUS", cursorText: "View Work", isFeatured: true },
    { order: 6, title: "InterContinental Hayman Great Barrier Reef", description: "97 press pieces. 109.5M OTS. Time Out called it the next White Lotus resort. Repositioned as the frontier to the Great Barrier Reef.", image: "/images/69cbd8eb0863a79ee48118c8_69cbd221dffdcea16b997af4_intercontinental-hayman-great-barrier-reef_listing-image_67e3a4b05e5b2611d61816af.webp", imageAlt: "InterContinental Hayman Great Barrier Reef by EXAMPLE Agency", link: "/work/intercontinental-hayman-great-barrier-reef", slot: "slot3", regionTags: "AUS", cursorText: "View Work", isFeatured: true },
    { order: 7, title: "Prom Peru", description: "8.6M reach. 1.9M video views. 16.7% engagement rate. Four creators, four travel motivations, four reasons to book Peru.", image: "/images/69cbd93971f3ef81ba74e90a_69cbd27a0cd8b7ab56928963_prom-peru_listing-image_67e214efb3b904ad5eca67d0.webp", imageAlt: "Prom Peru by EXAMPLE Agency", link: "/work/prom-peru", slot: "slot1", regionTags: "", cursorText: "View Work", isFeatured: false },
    { order: 8, title: "ACCOR 'TABLE FOR', PACIFIC", description: "Founding creative partner to Accor’s in-house F&B group. Brand, positioning and launch programme across multiple properties. A hotel world first.", image: "/images/69cbd8924dbeef8886ba5abb_69cbd19f7a24170e1b03b60d_accor-table-for-pacific_listing-image_69253c909e9853d93e84723f.webp", imageAlt: "Accor Table For Pacific by EXAMPLE Agency", link: "/work/accor-table-for-pacific", slot: "slot1", regionTags: "", cursorText: "View Work", isFeatured: false },
  ];
  for (const w of workItems) {
    await prisma.workItem.create({ data: w });
  }
  console.log("✅ Work items seeded");

  // 6. Client Logos
  await prisma.clientLogo.deleteMany();
  const logosGroup3 = [
    { name: "Etymon", image: "/images/67e0fc76719e4f764e3fdabf_etymon-logo.svg", alt: "Etymon logo" },
    { name: "Diageo", image: "/images/67e0fc492397d08370fd367b_diageo-logo.svg", alt: "Diageo logo" },
    { name: "Standard", image: "/images/67dd24ea9701d4abc3450f13_standard-logo.svg", alt: "Standard logo" },
  ];
  const logosGroup2 = [
    { name: "Fink", image: "/images/69244d9093a8f3d6761a8e9d_fink-logo.svg", alt: "Fink logo" },
    { name: "New Asahi", image: "/images/67ea34f5cb5c87586b6421c8_new-asahi-logo.svg", alt: "Asahi logo" },
    { name: "Epochal", image: "/images/67e0fc970a74e90f9a988d6f_epochal-logo.svg", alt: "Epochal logo" },
  ];
  const logosGroup1 = [
    { name: "Patrón", image: "/images/69244dc8f376b742521756b1_patron-logo.svg", alt: "Patron logo" },
    { name: "Grey Goose", image: "/images/69244d9de83e0c9be0d15eed_greygoose-logo.svg", alt: "Grey Goose logo" },
    { name: "QT Hotels", image: "/images/67e0fc6265253484b20e528a_qt-logo.svg", alt: "QT Hotels logo" },
  ];
  for (let i = 0; i < logosGroup3.length; i++) {
    await prisma.clientLogo.create({ data: { name: logosGroup3[i].name, image: logosGroup3[i].image, imageAlt: logosGroup3[i].alt, group: 3, order: i + 1 } });
  }
  for (let i = 0; i < logosGroup2.length; i++) {
    await prisma.clientLogo.create({ data: { name: logosGroup2[i].name, image: logosGroup2[i].image, imageAlt: logosGroup2[i].alt, group: 2, order: i + 1 } });
  }
  for (let i = 0; i < logosGroup1.length; i++) {
    await prisma.clientLogo.create({ data: { name: logosGroup1[i].name, image: logosGroup1[i].image, imageAlt: logosGroup1[i].alt, group: 1, order: i + 1 } });
  }
  console.log("✅ Client logos seeded");

  // 7. Nav Links
  await prisma.navLink.deleteMany();
  // Dropdown: Who We Help
  const whoWeHelp = [
    "Hospitality", "Hotels & Travel", "Drinks Brands", "Lifestyle Brands",
    "Property", "Entertainment", "Middle East", "Dubai", "Melbourne",
    "Sydney", "Brisbane", "Abu Dhabi", "Saudi Arabia", "Singapore",
    "Perth", "Gold Coast", "New Zealand", "Qatar", "Asia Pacific", "Australia",
  ];
  for (let i = 0; i < whoWeHelp.length; i++) {
    const slug = whoWeHelp[i].toLowerCase().replace(/\s+&\s+/g, "-").replace(/\s+/g, "-");
    await prisma.navLink.create({ data: { label: whoWeHelp[i], url: `/who-we-help/${slug}`, group: "who-we-help", order: i + 1 } });
  }

  // Dropdown: What We Do
  const whatWeDo = [
    { label: "Strategy & Positioning", slug: "strategy-positioning" },
    { label: "Beverage PR Agency", slug: "beverage-pr-agency" },
    { label: "Brand & Identity", slug: "brand-identity" },
    { label: "Hospitality PR Dubai", slug: "hospitality-pr-dubai" },
    { label: "PR & Communications", slug: "pr-communications" },
    { label: "Luxury PR Agency", slug: "luxury-pr-agency" },
    { label: "Social & Content", slug: "social-content" },
    { label: "Dubai PR Agency", slug: "dubai-pr-agency" },
    { label: "Placemaking", slug: "placemaking" },
    { label: "Middle East PR Agency", slug: "middle-east-pr" },
    { label: "Earned Creative", slug: "earned-creative" },
    { label: "Influencer & Talent", slug: "influencer-talent" },
    { label: "Experiential", slug: "experiential" },
    { label: "Place Culture", slug: "place-culture" },
    { label: "Hospitality PR Australia", slug: "hospitality-pr" },
    { label: "Drinks Brands", slug: "drinks-brands" },
  ];
  for (let i = 0; i < whatWeDo.length; i++) {
    await prisma.navLink.create({ data: { label: whatWeDo[i].label, url: `/what-we-do/${whatWeDo[i].slug}`, group: "what-we-do", order: i + 1 } });
  }

  // Desktop Top Nav Links
  const desktopTopLinks = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "What We Do", url: "#" },
  ];
  for (let i = 0; i < desktopTopLinks.length; i++) {
    await prisma.navLink.create({ data: { label: desktopTopLinks[i].label, url: desktopTopLinks[i].url, group: "desktop-top", order: i + 1 } });
  }

  // Mobile Menu Links
  const mobileMenuLinks = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "What we do", url: "/what-we-do" },
  ];
  for (let i = 0; i < mobileMenuLinks.length; i++) {
    await prisma.navLink.create({ data: { label: mobileMenuLinks[i].label, url: mobileMenuLinks[i].url, group: "mobile-menu", order: i + 1 } });
  }

  // Floating Who We Help Links
  const floatingHelpLinks = [
    { label: "Hospitality", url: "/who-we-help/hospitality" },
    { label: "Hotels & Travel", url: "/who-we-help/hotels-travel" },
    { label: "Drinks Brands", url: "/who-we-help/drinks-brands" },
    { label: "Lifestyle Brands", url: "/who-we-help/lifestyle-brands" },
    { label: "Property", url: "/who-we-help/property" },
    { label: "Entertainment", url: "/who-we-help/entertainment" },
  ];
  for (let i = 0; i < floatingHelpLinks.length; i++) {
    await prisma.navLink.create({ data: { label: floatingHelpLinks[i].label, url: floatingHelpLinks[i].url, group: "floating-wwd", order: i + 1 } });
  }

  // Footer Quicklinks
  const footerLinks = [
    { label: "What We Do", url: "/what-we-do" },
    { label: "About", url: "/about" },
    { label: "Journal", url: "/journal" },
    { label: "Contact", url: "/contact" },
  ];
  for (let i = 0; i < footerLinks.length; i++) {
    await prisma.navLink.create({ data: { label: footerLinks[i].label, url: footerLinks[i].url, group: "footer-quicklinks", order: i + 1 } });
  }

  // Footer Social Links
  const footerSocial = [
    { label: "Instagram", url: "https://www.instagram.com/weareexample" },
    { label: "Linkedin", url: "https://au.linkedin.com/company/we-are-example" },
  ];
  for (let i = 0; i < footerSocial.length; i++) {
    await prisma.navLink.create({ data: { label: footerSocial[i].label, url: footerSocial[i].url, group: "footer-social", order: i + 1 } });
  }

  // Footer Credits Links
  const footerCredits = [
    { label: "SF.CO,", url: "https://somefolk.co/" },
    { label: "Kujira", url: "https://www.kujira.co/" },
  ];
  for (let i = 0; i < footerCredits.length; i++) {
    await prisma.navLink.create({ data: { label: footerCredits[i].label, url: footerCredits[i].url, group: "footer-credits", order: i + 1 } });
  }
  console.log("✅ Nav links seeded");

  // 8. Journal Posts
  await prisma.journalPost.deleteMany();
  const journalPosts = [
    { order: 1, title: "Your next recommendation isn't human", excerpt: "AI only trusts what you've actually earned", image: "/images/6a6c122276e872baab1d79fc_Screenshot_2026-07-07_at_2.30.47_PM.png", imageAlt: "AI recommendation in hospitality and marketing", link: "https://news.weareexample.com/p/your-next-recommendation-isnt-human", buttonLabel: "Read" },
    { order: 2, title: "Football owns what luxury can't buy", excerpt: "48 national teams just became luxury's most underpriced asset ⚽️", image: "/images/6a3b49742a988817f5b0c7a8_fba04c595b6729a0420ee07877f20e00.jpeg", imageAlt: "Football culture meets luxury branding", link: "https://news.weareexample.com/p/football-owns-what-luxury-cant-buy", buttonLabel: "Read" },
    { order: 3, title: "Volume just stopped paying", excerpt: "Why the brands gaining ground are charging more for less.", image: "/images/6a0d55e999311f4638db22c2_CN00043392.jpeg", imageAlt: "Premium brand value strategy and pricing", link: "https://news.weareexample.com/p/volume-just-stopped-paying", buttonLabel: "Read" },
  ];
  for (const post of journalPosts) {
    await prisma.journalPost.create({ data: post });
  }
  console.log("✅ Journal posts seeded");

  // 9. Podcast Section
  await prisma.podcastSection.upsert({
    where: { id: "singleton" },
    update: {
      title: "Fine Form Podcast",
      description1: "Example is proud to present Fine Form, a podcast reimagining the rules of success, created and hosted by our Co-Founder and COO, Rebecca Jarvie-Gibbs.",
      description2: "Each week, Rebecca sits down with women shaping food, design, business and culture to uncover the big changes, small shifts and defining habits that have changed the way they work and live.",
      ctaText: "View on Apple",
      ctaLink: "https://podcasts.apple.com/us/podcast/fine-form-with-rebecca-jarvie-gibbs/id1836073545",
      imageDesktop: "/images/68dd4df38fa090fd4ec78632_fineform1.avif",
      imageDesktopAlt: "Fine Form podcast campaign by Example Agency",
      imageMobile: "/images/68dd56a4c34c85d6fe69b1ed_fineform-mobile.avif",
      imageMobileAlt: "Fine Form podcast brand content on mobile",
    },
    create: {
      id: "singleton",
      title: "Fine Form Podcast",
      description1: "Example is proud to present Fine Form, a podcast reimagining the rules of success, created and hosted by our Co-Founder and COO, Rebecca Jarvie-Gibbs.",
      description2: "Each week, Rebecca sits down with women shaping food, design, business and culture to uncover the big changes, small shifts and defining habits that have changed the way they work and live.",
      ctaText: "View on Apple",
      ctaLink: "https://podcasts.apple.com/us/podcast/fine-form-with-rebecca-jarvie-gibbs/id1836073545",
      imageDesktop: "/images/68dd4df38fa090fd4ec78632_fineform1.avif",
      imageDesktopAlt: "Fine Form podcast campaign by Example Agency",
      imageMobile: "/images/68dd56a4c34c85d6fe69b1ed_fineform-mobile.avif",
      imageMobileAlt: "Fine Form podcast brand content on mobile",
    },
  });
  console.log("✅ Podcast section seeded");

  console.log("\n🎉 Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

