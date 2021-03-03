const express = require("express")
const data = require("./shop_data_process")

const Router = express.Router()

// Home页面获取商品列表数据
Router.get("/shop",function(req,res){
    // console.log("ok")
    // 回调函数的方式获取并响应数据库查询结果
    // connect.get_shop(function(results){
    //      res.send(results)
    // })
    
    data.get_shop_msg(req.query.page,req.query.cateName).then(val=>{
        res.send(val)
    })
})

module.exports = Router