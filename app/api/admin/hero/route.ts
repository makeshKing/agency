import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";

export async function GET(req: Request) {
  const session = await auth();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  const hero = await prisma.heroSection.findFirst();
  return NextResponse.json(hero);
}

export async function PUT(req: Request) {
  const session = await auth();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  const body = await req.json();
  const { id, updatedAt, ...data } = body;
  const hero = await prisma.heroSection.update({
    where: { id: "singleton" },
    data,
  });

  return NextResponse.json(hero);
}
