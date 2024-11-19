import mongoose from "mongoose";
import { SignJWT } from "jose"

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true }
);
// jwt sign method
adminSchema.methods.generateAuthToken = function () {
    const { JWT_SECRET } = process.env;
    const tokenData = {
        id: this._id,
        username: this.username,
        email: this.email

    };
    return new SignJWT({ ...tokenData })
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setExpirationTime('1h')
        .setIssuedAt()
        .sign(new TextEncoder().encode(JWT_SECRET));
}


const Admin = mongoose.models.Admin || mongoose.model("Admin", adminSchema) ;
export default Admin;