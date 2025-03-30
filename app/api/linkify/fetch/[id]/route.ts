import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;

    const linkify = await prisma.linkify.findUnique({
      where: { id },
    });
    if (!linkify) {
      return NextResponse.json("linkify not found", { status: 404 });
    } else if (linkify?.isPublished === false) {
      throw new Error("unauthorized access");
    }

    return NextResponse.json(linkify, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "internal server error." },
      { status: 500 }
    );
  }
}
