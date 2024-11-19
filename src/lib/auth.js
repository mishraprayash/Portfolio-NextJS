import { jwtVerify } from "jose"

export async function isAuthenticated(request){
    try {
        // here token is an object from where token.value gives the exact jwt
        const token = await request.cookies.get('token') || "";
        if (!token) {
            return null;
        }
        const {JWT_SECRET } = process.env;

        // grabbing the payload after verification of token
        const { payload } = await jwtVerify(token.value, new TextEncoder().encode(JWT_SECRET));
        return payload;

    } catch (error) {
        console.log("Error while decoding token", error);
    }
}