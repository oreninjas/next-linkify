import connectToDB from "@/lib/db.connection";
import decoder from "@/lib/decryptJWT";
import linkifyModel from "@/models/linkify.model";
import { NextRequest, NextResponse } from "next/server";

connectToDB();

export async function POST(request: NextRequest) {
  try {
    const { title } = await request.json();
    if (!title) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const auth_token = request.cookies.get("auth_t")?.value;
    if (!auth_token) {
      return NextResponse.json({ message: "unauthorized" }, { status: 401 });
    }
    let userId = decoder(auth_token as string);

    await linkifyModel.create({
      createdBy: userId,
      title,
    });
    return NextResponse.json(
      { message: "Linkify created successfully!" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: "internal server error" },
      { status: 500 }
    );
  }
}
