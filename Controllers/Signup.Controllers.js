const { username, email } = require("../Models/Fake")   // ✅ import shared data

exports.getDetails = function (req, res) {
    const { id } = req.body    // extract the actual id string

    console.log(id)

    if (!username[id]) {
        return res.status(400).json({
            error: "your id is not there in the database"
        })
    }

    const details = username[id]
    return res.json({ status: "success", details })
}

