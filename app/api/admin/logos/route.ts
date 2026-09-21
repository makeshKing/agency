import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function GET(req: Request) {
  const session = await auth();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  const logos = await prisma.clientLogo.findMany({
    orderBy: [{ group: "asc" }, { order: "asc" }],
  });
  return NextResponse.json(logos);
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  const body = await req.json();
  const group = Number(body.group) || 1;
  const count = await prisma.clientLogo.count({ where: { group } });

  const logo = await prisma.clientLogo.create({
    data: {
      name: body.name || "Client Logo",
      image: body.image,
      imageAlt: body.imageAlt || `${body.name || "Client"} logo`,
      group,
      order: count + 1,
    },
  });

  revalidatePath("/", "layout");
  revalidatePath("/");

  return NextResponse.json(logo);
}

