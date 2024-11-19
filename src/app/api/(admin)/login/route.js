// admin login api 
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
        const adminExist = await Admin.findOne({ email });
        if (!adminExist) {
            console.log('Admin Does not exist');
            return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });
        }
        // Check if the password is correct
        const isPasswordMatch = await bcryptjs.compare(password, adminExist.password);
        if (!isPasswordMatch) {
            return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });
        }
        const token = await adminExist.generateAuthToken();
        console.log(token);
        const response = NextResponse.json({ message: "Logged in successfully" }, { status: 200 });
        response.cookies.set("token", token, {
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production",
        });
        return response;
    } catch (error) {
        console.log(error);;
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}