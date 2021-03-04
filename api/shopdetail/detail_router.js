const express = require("express")
const router = express.Router()

const data =  require("./detail_data_process")

router.get("/shopdetail",function(req,res){
    data.getTagName(req.query.shop_id)
    .then(val=>{
        return data.getFoodSpus(req.query.shop_id,val)
    })
    .then(val=>{
        res.send(val)
    })
})

module.exports = router