import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";

export async function GET(req: Request) {
  const session = await auth();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  const settings = await prisma.siteSettings.findFirst();
  return NextResponse.json(settings);
}

export async function PUT(req: Request) {
  const session = await auth();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  const body = await req.json();
  const { id, updatedAt, ...data } = body;
  const settings = await prisma.siteSettings.update({
    where: { id: "singleton" },
    data,
  });

  return NextResponse.json(settings);
}
