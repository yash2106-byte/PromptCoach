// this will be the main controller from which each route will be called
import * as analyze from "../Controllers/Analyse.Controllers.js";
import * as login from "../Controllers/Login.Controllers.js";
import * as sign from "../Controllers/Signup.Controllers.js";
import express from "express";

const router = express.Router()
router.post("/analyze", analyze.postRespone)
router.post("/login", login.postLogin)
router.post("/signup", sign.getDetails)

export default router;