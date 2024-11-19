import { NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect.js"
import Blog from "@/model/blogmodel";

export async function GET(request) {
    await connectDB();
    try {
        const blogs = await Blog.find().select(' -updatedAt -__v').sort({ createdAt: -1 });
        if (!blogs) {
            return NextResponse.error("No blogs found", 404);
        }
        
        return NextResponse.json({ blogs }, { status: 200 });
    } catch (error) {

    }
}