import { NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect";
import Admin from "@/model/adminmodel";
import bcryptjs from "bcryptjs";

export async function POST(request) {
    await connectDB();
    try {
        const { email, password } = await request.json();
        if (!email || !password) {
            return NextResponse.json({ message: "Please fill all the fields" }, { status: 400 });
        }
        // Check if the user is an admin
        const adminCount = await Admin.findOne().countDocuments();
        if (adminCount > 0) {
            return NextResponse.json({ message: "Admin already exist" }, { status: 400 });
        }
        const hashedPassword = await bcryptjs.hash(password, 12);
        const admin = new Admin({ email, password: hashedPassword });
        await admin.save();
        return NextResponse.json({ message: "Admin registered successfully" }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}