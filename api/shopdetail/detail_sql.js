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

function getFoodSpus(shop_id,tagName,tag){
    shop_id = parseInt(shop_id)
    let query = "select * from foodspus where shop_id = "+shop_id+" and tagName = '"+tagName+"'"
    if(tagName === "热销"){
      query = "select * from foodspus where shop_id = "+shop_id+" order by saleCount desc limit 10";
    }
    else if(tagName === "折扣"){
      query = "select * from foodspus where shop_id = "+shop_id+" and originPrice <> ''"
    }
    return new Promise((resolve,reject)=>{
        connect.query(query,function(err,results,fields){
            if(err) reject(err)
            resolve({tag:tag,spus:results})
        })
    })
}

exports.getFoodSpus = getFoodSpus