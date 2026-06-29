import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfullly");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

// commonjs => module.exports = connectDB
export default connectDB;