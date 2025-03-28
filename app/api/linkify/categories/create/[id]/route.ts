import prisma from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;

    const { title } = await request.json();
    if (!title) {
      return NextResponse.json("Title is missing!", { status: 400 });
    }
    const category = await prisma.category.create({
      data: {
        title: title,
        linkifyId: id,
      },
    });
    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    console.error("Error creating category:", error);
    return NextResponse.json("Something went wrong", { status: 500 });
  }
}
