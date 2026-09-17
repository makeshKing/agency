import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";

export async function PUT(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  const { id } = await ctx.params;
  const body = await req.json();
  const { id: _, updatedAt: __, ...data } = body;

  const slide = await prisma.heroSlide.update({
    where: { id },
    data,
  });

  return NextResponse.json(slide);
}

export async function DELETE(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  const { id } = await ctx.params;
  await prisma.heroSlide.delete({ where: { id } });

  return NextResponse.json({ success: true });
}

