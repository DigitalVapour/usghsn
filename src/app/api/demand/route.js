import connectDb from "@/lib/mongodb";
import Demand from "@/models/demand";
import { NextResponse } from "next/server";

connectDb();

export async function POST(request) {
    try {
        const requestBody = await request.json();
        const { name, date, demand } = requestBody;
        const newDemand = new Demand({ name, date, demand });
        const savedDemand = await newDemand.save();
        return NextResponse.json({ message: "Demand created successfully",
            success: true,
            demand: savedDemand,
        });
    } catch (error) {
        NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function GET() {
    try {
        const demands = await Demand.find({});
        return NextResponse.json(demands);
    } catch (error) {
        NextResponse.json({ error: error.message }, { status: 500 });
    }
}

