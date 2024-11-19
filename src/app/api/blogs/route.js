import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect.js"
import Blog from "@/model/blogmodel";


const general = [
    {
        id: 1,
        title: "What is a VPN?",
        content:
            "A VPN (Virtual Private Network) is a service that allows you to connect to the internet via an encrypted tunnel to ensure your online privacy and protect your sensitive data. By using a VPN, you can hide your IP address, bypass geo-restrictions, and prevent third parties from tracking your online activities. In this blog post, we'll explore what a VPN is, how it works, and why you should use one.",
    },
];
const networking = [
    {
        id: 1,
        title: "What is a networking? What is VPN? What is router? what is switch? what is hub?What is a networking? What is VPN? What is router? what is switch? what is hub?",
        content:
            "A VPN (Virtual Private Network) is a service that allows you to connect to the internet via an encrypted tunnel to ensure your online privacy and protect your sensitive data. By using a VPN, you can hide your IP address, bypass geo-restrictions, and prevent third parties from tracking your online activities. In this blog post, we'll explore what a VPN is, how it works, and why you should use one.",
    }
]

export async function GET(request) {
    await connectDB();
    try {
        // grab the category from the query string
        const params = request.nextUrl.searchParams;
        const category = params.get("category");
        if (!category) {
            return NextResponse.error("Category not found", 400);
        }
        const blog = await Blog.find({category}).select('-content -updatedAt -__v')
        console.log(blog);
        return NextResponse.json(blog);

    } catch (error) {
        console.log(error);
        return NextResponse.error("Something went wrong", 500);
    }
}