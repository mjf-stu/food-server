const connect = require("./detail_sql")

function getTagName(shop_id){
    return connect.getTagName(shop_id)
}

exports.getTagName = getTagName

function getFoodSpus(shop_id,tags){
    let promiseArr = []
    for(let item of tags){
        promiseArr.push(connect.getFoodSpus(shop_id,item.food_tag_name,item))
    }
    return Promise.all(promiseArr).then(value=>{
        return value
    })
}


exports.getFoodSpus = getFoodSpus