import { NextRequest, NextResponse } from "next/server";
import connectToDB from "@/lib/db.connection";
import userModel from "@/models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

connectToDB();

const JWT_AUTH_SECRET = process.env.JWT_SECRET!;

export async function POST(req: NextRequest) {
  if (!JWT_AUTH_SECRET) {
    console.log("There was no secret_KEY");
  }

  try {
    const { email, password } = await req.json();

    let db_user = await userModel.findOne({ email });

    let result = await bcrypt.compare(password, db_user.password);
    if (!result) {
      return NextResponse.json(
        { error: "Something went wrong" },
        { status: 400 }
      );
    }

    let token = jwt.sign({ db_user_id: db_user._id }, JWT_AUTH_SECRET);

    const response = NextResponse.json(
      { message: "Success." },
      { status: 200 }
    );

    response.cookies.set("auth_t", token, {
      httpOnly: true,
    });

    return response;
  } catch (error: unknown) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
