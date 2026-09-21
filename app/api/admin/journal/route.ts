import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function GET(req: Request) {
  const session = await auth();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  const posts = await prisma.journalPost.findMany({
    orderBy: { order: "asc" },
  });
  return NextResponse.json(posts);
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  const body = await req.json();
  const count = await prisma.journalPost.count();

  const post = await prisma.journalPost.create({
    data: {
      ...body,
      order: count + 1,
    },
  });

  revalidatePath("/", "layout");
  revalidatePath("/");
  revalidatePath("/journal");
  if (post.link && post.link.startsWith("/") && post.link !== "/") {
    revalidatePath(post.link);
  }

  return NextResponse.json(post);
}


