const express = require("express")
const promptRouter = require("./Routes/Main")
const cors = require("cors");
const web = express();
const port = 8000; // if you are changing the port make saure to change in frontend also

//middleware

web.use(cors());
web.use(express.json());
// routes

web.use('/',promptRouter);


web.listen(port, () => console.log(`your post is working on ${port}`))