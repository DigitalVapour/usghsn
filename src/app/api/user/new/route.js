import connectDb from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

connectDb();

export async function POST(request) {
    try {
        const requestBody = await request.json();
        const { name, email, password } = requestBody;
        const newUser = new User({ name, email, password });
        const savedUser = await newUser.save();
        return NextResponse.json({message: "User created successfully",
            success: true,
            user: savedUser,
        });
    } catch (error) {
        NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function GET() {
    try {
        const users = await User.find({});
        return NextResponse.json(users);
    } catch (error) {
        NextResponse.json({ error: error.message }, { status: 500 });
    }
}


