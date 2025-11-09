import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const data = await req.json();
    const { email, password } = data;

    // Check for duplicate email
    const exists = await User.findOne({ email: email.toLowerCase() });
    if (exists) {
      return NextResponse.json({ success: false, message: "Email already registered" }, { status: 409 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      ...data,
      email: email.toLowerCase(),
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json({ success: true, message: "Registered successfully" });
  } catch (err: any) {
    console.error("Register error:", err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
