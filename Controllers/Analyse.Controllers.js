exports.postRespone = function(req,res) {
    const {promptText} = req.body;
    console.log("Recieverd from the frontend ",promptText)

    res.json({
        score:85 ,
        feedback:[
            "Good clarity on the main objective.",
            "Could be more specific about the tone.",
            "Adding constraints would improve precision."
        ],
        improvedPrompt: "this respones would be better"
    })
}