import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function POST(request: Request) {
  try {
    const { title, categoryId } = await request.json();

    const link = await prisma.link.create({
      data: {
        url: title,
        categoryId,
      },
    });

    return NextResponse.json(link, { status: 201 });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "internal server error." },
      { status: 500 }
    );
  }
}
