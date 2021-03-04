const connect = require("../../connection")

function getTagName(shop_id){
    shop_id = parseInt(shop_id)
    if(typeof shop_id!=="number"){
        return "请传入整形字符串或者整数"
    }
    else{
        const query = "select * from foodtag where shop_id = "+shop_id
        return new Promise((resolve,reject)=>{
            connect.query(query,function(err,results,fields){
                if(err) reject(err)
                resolve(results)
            })
        })
    }
}
exports.getTagName = getTagName

function getFoodSpus(shop_id,tagName){
    shop_id = parseInt(shop_id)
    const query = "select * from foodspus where shop_id = "+shop_id+" and tagName = '"+tagName+"'"
    return new Promise((resolve,reject)=>{
        connect.query(query,function(err,results,fields){
            if(err) reject(err)
            resolve(results)
        })
    })
}

exports.getFoodSpus = getFoodSpus