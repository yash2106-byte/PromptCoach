// this will be the main controller from which each route will be called
const analyze=require("../Controllers/Analyse.Controllers")
const login = require("../Controllers/Login.Controllers")
const sign = require("../Controllers/Signup.Controllers")
const express = require("express");



const router = express.Router()
router.post("/analyze" ,analyze.postRespone )
router.post("/login",login.postLogin)
router.post("/signup",sign.getDetails)

module.exports = router;