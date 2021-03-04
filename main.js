const express = require("express")
const cors = require("cors")

// 商家相关的api
const shop_router = require("./api/shop/shop_router")
const shopdetail_router = require("./api/shopdetail/detail_router")

const app = express()

//允许跨域请求
app.use(cors())

//body请求体
app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 

//挂载router路由
app.use(shop_router)
app.use(shopdetail_router)


app.listen(8088,function(){
    console.log("8088端口服务开启")
})