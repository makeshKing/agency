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

  const post = await prisma.journalPost.update({
    where: { id },
    data,
  });

  revalidatePath("/", "layout");
  revalidatePath("/");
  revalidatePath("/journal");
  if (post.link && post.link.startsWith("/") && post.link !== "/") {
    revalidatePath(post.link);
  }

  return NextResponse.json(post);
}

export async function DELETE(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  const { id } = await ctx.params;
  const post = await prisma.journalPost.delete({ where: { id } });

  revalidatePath("/", "layout");
  revalidatePath("/");
  revalidatePath("/journal");
  if (post?.link && post.link.startsWith("/") && post.link !== "/") {
    revalidatePath(post.link);
  }

  return NextResponse.json({ success: true });
}



