import { NextRequest, NextResponse } from "next/server";
import connectToDB from "@/lib/db.connection";
import userModel from "@/models/user.model";
import bcrypt from "bcrypt";

connectToDB();

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const userExist = await userModel.findOne({ email });
    if (userExist) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    await userModel.create({
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "User has been created successfully." },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.log(error);
    return NextResponse.json(
      { error: "something went wrong" },
      { status: 500 }
    );
  }
}
