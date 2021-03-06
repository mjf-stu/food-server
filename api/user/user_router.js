const express = require("express")
const router = express.Router()
const data = require("./user_data_process")

router.get("/user",function(req,res){
    data.getUser(req.query.name,req.query.pwd)
    .then(val=>{
        res.send(val)
    })
})

//插入
router.post("/user",function(){

})

//put拿

//delete删

module.exports = router