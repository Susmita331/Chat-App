import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import userRoute from "./route/user.route.js"
import cors from "cors"
import cookieParser from "cookie-parser"
import {app, server} from "./Socket.io/sever.js"

dotenv.config();
app.use(cors()); //Enable cors for all requests
app.use(cookieParser());
app.use(express.json());
const PORT = process.env.PORT || 5001;
const URI = process.env.MONGODB_URI;

try {
    mongoose.connect(URI);
    console.log("MongoDB connected!")
} catch (error){
    console.log(error)

}
app.use("/api/user", userRoute);


server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
