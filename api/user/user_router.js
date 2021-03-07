const express = require("express")
const router = express.Router()
const data = require("./user_data_process")

// 获取用户登录信息
router.get("/user",function(req,res){
    data.getUser(req.query.name,req.query.pwd)
    .then(val=>{
        res.send(val)
    })
})

// 获取用户订单信息
router.get("/order",function(req,res){
    data.getOrder(req.query.uId)
    .then(val=>{
        res.send(val)
    })
})

//插入订单
router.post("/order",function(req,res){
    data.insertOrder(req.body.orderInfo)
    .then(val=>{
        res.send(val)
    })
})

//put拿

//delete删

module.exports = router