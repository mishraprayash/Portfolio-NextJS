// logout 
import { Coming_Soon } from "next/font/google";
import { NextResponse } from "next/server";
export async function GET(request) {
   
    const response = NextResponse.json({ message: "Logged out successfully" }, { status: 200 });
    response.cookies.set("token", "", {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
        maxAge: 0
    });
    return response;
}
