import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    if (!id) {
      return NextResponse.json({ error: "id not found" }, { status: 400 });
    }
    console.log(id);

    let categories = await prisma.category.findMany({
      where: { linkifyId: id },
      select: {
        id: true,
        title: true,
      },
    });

    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "internal server error." },
      { status: 500 }
    );
  }
}
