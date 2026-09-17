import { prisma } from "./db";

export async function getHomeContent() {
  const [settings, hero, slides, works, logos, journal, podcast, navLinks] =
    await Promise.all([
      prisma.siteSettings.findFirst(),
      prisma.heroSection.findFirst(),
      prisma.heroSlide.findMany({ orderBy: { order: "asc" } }),
      prisma.workItem.findMany({ orderBy: { order: "asc" } }),
      prisma.clientLogo.findMany({ orderBy: { order: "asc" } }),
      prisma.journalPost.findMany({ orderBy: { order: "asc" } }),
      prisma.podcastSection.findFirst(),
      prisma.navLink.findMany({ orderBy: { order: "asc" } }),
    ]);

  return { settings, hero, slides, works, logos, journal, podcast, navLinks };
}

// Type helper for the return value
export type HomeContent = Awaited<ReturnType<typeof getHomeContent>>;
