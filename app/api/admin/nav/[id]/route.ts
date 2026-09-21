import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function PUT(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  const { id } = await ctx.params;
  const body = await req.json();
  const { id: _, ...data } = body;

  if (data.order !== undefined) {
    data.order = Number(data.order);
  }

  const link = await prisma.navLink.update({
    where: { id },
    data,
  });

  revalidatePath("/", "layout");
  revalidatePath("/");
  revalidatePath("/about");

  return NextResponse.json(link);
}

export async function DELETE(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  const { id } = await ctx.params;
  await prisma.navLink.delete({ where: { id } });

  revalidatePath("/", "layout");
  revalidatePath("/");
  revalidatePath("/about");

  return NextResponse.json({ success: true });
}

