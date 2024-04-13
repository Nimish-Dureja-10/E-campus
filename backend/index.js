import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoutes from "./routes/userRoutes.js";
import noticeBoardRoutes from "./routes/noticeBoardRoutes.js";
dotenv.config();

const app = express();
app.use(express.json());

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log(`MongoDB connection successfull`);
}


app.use("/api/v1",userRoutes);
app.use("/api/v1",noticeBoardRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port - ${process.env.PORT}`);
});