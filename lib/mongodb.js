import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("####################");
        console.log("connected to MONGODB");
        console.log("####################");
    } catch (error) {
        console.log("Error connection to database: ", error);
    }
}