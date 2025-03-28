import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ categoryid: string }> }
) {
  try {
    const categoryId = (await params).categoryid;
    const links = await prisma.link.findMany({
      where: {
        categoryId,
      },
      select: {
        id: true,
        url: true,
      },
    });

    return NextResponse.json(links, { status: 200 });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "internal server error." },
      { status: 500 }
    );
  }
}
