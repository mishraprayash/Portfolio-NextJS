
import { NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect.js"
import Blog from "@/model/blogmodel";
export async function POST(request) {
    await connectDB();
    try {
        const { id } = await request.json();
        if (!id) return NextResponse.error({
            status: 400,
            body: "Bad Request"
        });
        await Blog.findByIdAndDelete(id);
        return NextResponse.json({ message: "Blog deleted successfully" });
    } catch (error) {
        console.log(error);
        return NextResponse.error({
            status: 500,
            body: "Internal Server Error"
        })
    }
}