import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";

export async function PUT(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  const { id } = await ctx.params;
  const body = await req.json();
  const { id: _, ...data } = body;

  if (data.group !== undefined) {
    data.group = Number(data.group);
  }
  if (data.order !== undefined) {
    data.order = Number(data.order);
  }

  const logo = await prisma.clientLogo.update({
    where: { id },
    data,
  });

  return NextResponse.json(logo);
}

export async function DELETE(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  const { id } = await ctx.params;
  await prisma.clientLogo.delete({ where: { id } });

  return NextResponse.json({ success: true });
}
