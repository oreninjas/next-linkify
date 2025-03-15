import connectToDB from "@/lib/db.connection";
import userModel from "@/models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

connectToDB();

const JWT_AUTH_SECRET = process.env.JWT_SECRET!;

export async function POST(req: NextRequest) {
  if (!JWT_AUTH_SECRET) {
    console.log("There was no secret_KEY");
  }

  try {
    const { email, password } = await req.json();
    console.log(email, password);

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email & Password are required." },
        { status: 400 }
      );
    }

    const userExist = await userModel.findOne({ email });
    if (userExist) {
      return NextResponse.json(
        { error: "something went wrong" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    let user = await userModel.create({
      email,
      password: hashedPassword,
    });
    let token = jwt.sign({ user_id: user._id }, JWT_AUTH_SECRET);

    const response = NextResponse.json(
      { message: "User has been created successfully." },
      { status: 201 }
    );

    response.cookies.set("auth_t", token, {
      httpOnly: true,
    });

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "something went wrong" },
      { status: 500 }
    );
  }
}
