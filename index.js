import express from "express";
import cors from "cors";
import promptRouter from "./Routes/Main.js";
import dotenv from 'dotenv';
dotenv.config();
const web = express();
const port = process.env.PORT ?? 8000; // if you are changing the port make sure to change in frontend also

//middleware

web.use(cors({
  origin: "https://prompt-coach-five.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
web.use(express.json());
// routes

web.use('/api', promptRouter);


web.listen(port, () => console.log(`your post is working on ${port}`))