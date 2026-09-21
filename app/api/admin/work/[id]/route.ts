import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function PUT(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  const { id } = await ctx.params;
  const body = await req.json();
  const { id: _, updatedAt: __, ...data } = body;

  const work = await prisma.workItem.update({
    where: { id },
    data,
  });

  revalidatePath("/", "layout");
  revalidatePath("/");
  revalidatePath("/work");
  if (work.link && work.link.startsWith("/") && work.link !== "/") {
    revalidatePath(work.link);
  }

  return NextResponse.json(work);
}

export async function DELETE(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  const { id } = await ctx.params;
  const work = await prisma.workItem.delete({ where: { id } });

  revalidatePath("/", "layout");
  revalidatePath("/");
  revalidatePath("/work");
  if (work?.link && work.link.startsWith("/") && work.link !== "/") {
    revalidatePath(work.link);
  }

  return NextResponse.json({ success: true });
}



