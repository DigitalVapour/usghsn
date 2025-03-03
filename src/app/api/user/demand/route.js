import connectDb from "@/lib/mongodb";
import Demand from "@/models/demand";
import { NextResponse } from "next/server";

connectDb();

export async function GET(request){
    try {
        const urldata = new URL(request.url);
        const params = new URLSearchParams(urldata.search);
        const name = params.get("name");
        const demands = await Demand.find({ name });
        return NextResponse.json(demands);
    } catch (error) {
        NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(request){
    try {
        const requestBody = await request.json();
        const { demandId } = requestBody
        const result = await Demand.findByIdAndUpdate(demandId, {approved:true}, {new: true})
        return NextResponse.json({message: "Demand approved", success: true, newData: result})
    } catch (error) {
        NextResponse.json({ error: error.message }, { status: 500 });
    }   
}

export async function DELETE(request){
    try {
        const urldata = new URL(request.url);
        const params = new URLSearchParams(urldata.search);        
        const demandId = params.get("id")
        console.log(demandId)
        const result = await Demand.findByIdAndDelete(demandId)
        return NextResponse.json({message: "Demand deleted successfully", success: true, deletedData: result})
    } catch (error) {
        NextResponse.json({ error: error.message }, { status: 500 });
    }
}