
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect"
import Blog from "@/model/blogmodel";

export async function GET(request, { params }) {
    await connectDB();
    try {
        const { id } = params;
        if (!id) {
            return NextResponse.error({
                status: 400,
                body: "Bad Request"
            })
        }
        // fetch blog content based on the id
        const blog = await Blog.findById(id).select('-updatedAt -__v');
        // if blog not found
        if (!blog) return NextResponse.json({ message: "Blog not found" }, { status: 400 });
        // return the blog
        console.log("From api",blog);
        return NextResponse.json(blog);
    } catch (error) {
        return NextResponse.error({
            status: 500,
            body: "Internal Server Error"
        })
    }
}