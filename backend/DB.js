import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  console.error("Mongo URI is missing");
  process.exit(1);
}

const dbConnect = async () => {
  try {
    const db = await mongoose.connect(mongoUri);
    console.log("DB connected successfully!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default dbConnect;
