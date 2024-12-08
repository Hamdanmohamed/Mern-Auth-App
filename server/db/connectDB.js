import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connect database successfully");
    } catch (error) {
        console.log("Error connecting database");
        process.exit(1);
    }
}

export default connectDB;