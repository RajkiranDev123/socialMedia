import mongoose from "mongoose";

export const databaseConnection = async () => {
  try {
    console.log("Connecting to DB...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected!");
  } catch (error) {
    console.error("DB Connection Failed:", error);
    process.exit(1); // stop server if DB fails
  }
};
