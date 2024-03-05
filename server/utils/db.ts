import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoUrl: string = process.env.MONGO_URI || "";

export const connectDB = async () => {
  try {
    return await mongoose.connect(mongoUrl);
  } catch (error) {
    console.log(error);
  }
};
