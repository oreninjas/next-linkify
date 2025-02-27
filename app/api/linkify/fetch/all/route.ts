import { NextRequest, NextResponse } from "next/server";
import decoder from "@/lib/decryptJWT";
import connectToDB from "@/lib/db.connection";
import linkifyModel from "@/models/linkify.model";

connectToDB();

export async function GET(request: NextRequest) {
  try {
    let token = request.cookies.get("auth_t")?.value;
    if (!token) {
      return NextResponse.json({ message: "unauthorized" }, { status: 401 });
    }
    let userId = decoder(token as string);

    let response = await linkifyModel.find({ createdBy: userId });

    return NextResponse.json({ response }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: "internal server error." }, { status: 500 });
  }
}
