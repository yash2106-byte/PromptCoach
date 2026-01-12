const { username, email } = require("../Models/Fake")

exports.postLogin = function(req,res){
     const {Name,Gmail,Password} = req.body
     //if (Name == ""||Gmail==""||Password=="")
      if (!Name || !Gmail || !Password)
      {
           return res.status(400).json({error:`wrong input`})
      }
     if (email.has(Gmail)) {
        return res.status(400).json({ error: "Email has already been taken" })
    }
    email.add(Gmail)
     const uniqueId=`${Date.now()}`
     username[uniqueId]={Name ,Gmail,Password}
     return res.status(200).json({status:'succes' ,uniqueId})
}