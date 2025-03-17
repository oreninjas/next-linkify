import prisma from "@/lib/prismadb";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

const JWT_AUTH_SECRET = process.env.JWT_SECRET!;

export async function POST(req: NextRequest) {
  if (!JWT_AUTH_SECRET) {
    throw new Error("Something went wrong");
  }

  try {
    const { name, email, password } = await req.json();
    if (!email || !password) {
      throw new Error("All fields are required");
    }

    const isExists = await prisma.user.findUnique({
      where: { email },
    });
    if (isExists) {
      throw new Error("User already exists!");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.log(error);
    throw new Error("There was an issue server-size, please try again");
    return;
  }
}
