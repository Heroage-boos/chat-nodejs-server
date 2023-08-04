//1.引入模块
const express = require('express')()
//1.2 引入model
const zhihuModel = require("@/src/models/zhihu/zhihu-content-orm.js")

//2.request请求
express.get("/", async (req, res) => {
    //1.3 创建操作对象
    const data = await zhihuModel.findAll()
    console.log("data", data)
    res.API(data)
})

//3.返回
module.exports = express