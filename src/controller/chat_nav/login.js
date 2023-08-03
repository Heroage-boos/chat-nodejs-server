const app = require("express")()
const query=require("@/src/models/login/login")

app.get("/",async function (req,res){
    await query(req,res)
})

module.exports = app