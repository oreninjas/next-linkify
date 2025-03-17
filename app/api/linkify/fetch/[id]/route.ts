import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;

    const linkify = await prisma.linkify.findUnique({
      where: { id },
    });

    if (linkify?.isPublished === false) {
      throw new Error("unauthorized access");
    }

    return NextResponse.json(linkify, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: "internal server error." }, { status: 500 });
  }
}
