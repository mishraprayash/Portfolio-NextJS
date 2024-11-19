import { NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect.js"
import Blog from "@/model/blogmodel";

export async function POST(request, { params }) {
    await connectDB();
    try {
        const { id } = params;
        if (!id) return NextResponse.error({
            status: 400,
            body: "Bad Request"
        });
        // handle formdata from frontend 
        const formData = await request.formData();
        const title = formData.get("title");
        const category = formData.get("category");
        const content = formData.get("content");
        const images = formData.getAll("images");
        if (!title || !category || !content)
            return NextResponse.json({ message: "Please fill all fields" }, { status: 400 });
        const blog = await Blog.findById(id);
        if (!blog) return NextResponse.json({ message: "Blog not found" }, { status: 400 });
        blog.title = title;
        blog.category = category;
        blog.content = content;
        blog.images = images;
        await blog.save();
        return NextResponse.json({ message: "Blog updated successfully" });
    } catch (error) {
        console.log(error);
        return NextResponse.error({
            status: 500,
            body: "Internal Server Error"
        })
    }
}