import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prismadb";

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession();
    if (!session?.user.id) {
      NextResponse.json("unauthorized", { status: 401 });
    }

    let linkify = await prisma.linkify.findMany({
      where: { createdBy: session?.user.id },
    });

    // console.log("fetching all user linkifies available: !!", linkify);

    return NextResponse.json(linkify, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: "internal server error." }, { status: 500 });
  }
}
