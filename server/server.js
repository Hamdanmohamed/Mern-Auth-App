import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js"
import userRoutes from "./routes/user.route.js"
dotenv.config();

const app = express();
const port = process.env.PORT
app.use(cors())


app.use(express.json());





app.use("/api/users",userRoutes )
app.use("/api/auth", authRoutes)

app.listen(port, () => {
    console.log("Server is running on port 5000");
    connectDB();
});

