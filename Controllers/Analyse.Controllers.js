export const postResponse = function (req, res) {
    const { promptText } = req.body;
    console.log("Received from the frontend ", promptText)

    res.json({
        score: 85,
        feedback: [
            "Good clarity on the main objective.",
            "Could be more specific about the tone.",
            "Adding constraints would improve precision."
        ],
        improvedPrompt: "High Traffic Detected Our AI service is currently at capacity.   This project uses a limited API key, so requests are temporarily paused.          Please try again in a few seconds."
    })
}