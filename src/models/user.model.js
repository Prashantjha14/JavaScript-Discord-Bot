import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        userName: { type: String, required: true },
        coins: { type: Number, default: 0 },
    },
    { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
