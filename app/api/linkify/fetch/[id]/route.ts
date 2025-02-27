import connectToDB from "@/lib/db.connection";
import linkifyModel from "@/models/linkify.model";
import { link } from "fs";
import { NextRequest, NextResponse } from "next/server";

connectToDB();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;

    let response = await linkifyModel.findById(id);
    if (response.isPublished == false) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }

    return NextResponse.json({ response }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: "internal server error." }, { status: 500 });
  }
}
