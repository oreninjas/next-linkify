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

    const { title } = await request.json();
    if (!title) {
      throw new Error("oops, title is missing");
    }

    const linkify = await prisma.linkify.create({
      data: {
        title: title,
        createdBy: session.user.id,
      },
    });
    return NextResponse.json(
      { message: "Linkify created successfully!" },
      { status: 201 }
    );
  } catch (error) {
    throw new Error("Something went wrong");
  }
}
