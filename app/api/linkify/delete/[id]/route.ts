import prisma from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user.id) {
      throw new Error("unauthorized");
    }

    const isUser = await prisma.user.findUnique({
      where: { id: session.user.id },
    });
    if (!isUser) {
      throw new Error("user not found");
    }

    const { id } = await request.json();
    if (!id) {
      throw new Error("oops, id is missing");
    }

    await prisma.linkify.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "linkify deleted successfully" },
      { status: 204 }
    );
  } catch (error) {
    throw new Error("Something went wrong");
  }
}
