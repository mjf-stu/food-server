const express = require("express")
const cors = require("cors")
const router = require("./api/router")

const app = express()

//允许跨域请求
app.use(cors())

//挂载router路由
app.use(router)

//body请求体
app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 

app.get("/",function(){

})

app.listen(8088,function(){
    console.log("8088端口服务开启")
})