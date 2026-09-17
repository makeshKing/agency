import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";

export async function GET(req: Request) {
  const session = await auth();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  const works = await prisma.workItem.findMany({
    orderBy: { order: "asc" },
  });
  return NextResponse.json(works);
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  const body = await req.json();
  const count = await prisma.workItem.count();
  
  const work = await prisma.workItem.create({
    data: {
      ...body,
      order: count + 1,
    },
  });

  return NextResponse.json(work);
}
