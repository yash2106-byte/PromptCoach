import express from "express";
import cors from "cors";
import promptRouter from "./Routes/Main.js";
const web = express();
const port = process.env.port ?? 8000; // if you are changing the port make saure to change in frontend also

//middleware

web.use(cors());
web.use(express.json());
// routes

web.use('/', promptRouter);


web.listen(port, () => console.log(`your post is working on ${port}`))