
import { NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect.js"
import Blog from "@/model/blogmodel";

import { v2 as cloudinary } from 'cloudinary';


// upload images to cloudinary
async function uploadImages(imagePaths) {
    cloudinary.config({
        cloud_name: 'docmuzxah',
        api_key: CLOUDINRY_API_KEY,
        api_secret: CLOUDINRY_API_SECRET
    });
    try {
        const uploadPromises = imagePaths.map((path) =>
            cloudinary.uploader.upload(path, { public_id: path.split('/').pop().split('.')[0] })
        );

        const uploadResults = await Promise.all(uploadPromises);

        // Generate URLs for each image
        uploadResults.forEach((result) => {
            const optimizedUrl = cloudinary.url(result.public_id, {
                fetch_format: 'auto',
                quality: 'auto'
            });
            console.log(`${result.public_id}: ${optimizedUrl}`);
        });
    } catch (error) {
        console.error("Failed to upload images", error);
    }
}

export async function POST(request) {
    await connectDB();
    try {
        const formdata = await request.formData();
        const title = formdata.get("title");
        const category = formdata.get("category");
        const content = formdata.get("content");
        const images = formdata.getAll("images");
        if(!title || !category ) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }
        const blog = new Blog({ title, content, category });
        await blog.save();
        return NextResponse.json({ message: "Success" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}