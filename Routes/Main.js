// this will be the main controller from which each route will be called
const analyze=require("../Controllers/Analyse.Controllers")
const express = require("express");


const router = express.Router()
router.post("/analyze" ,analyze.postRespone )

module.exports = router;