import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";

export async function GET(req: Request) {
  const session = await auth();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  const links = await prisma.navLink.findMany({
    orderBy: [{ group: "asc" }, { order: "asc" }],
  });
  return NextResponse.json(links);
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  const body = await req.json();
  const group = body.group || "who-we-help";
  const count = await prisma.navLink.count({ where: { group } });

  const link = await prisma.navLink.create({
    data: {
      label: body.label || "New Link",
      url: body.url || "#",
      group,
      order: count + 1,
      extra: body.extra || "",
    },
  });

  return NextResponse.json(link);
}
