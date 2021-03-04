const connect = require("./detail_sql")

function getTagName(shop_id){
    return connect.getTagName(shop_id)
}

exports.getTagName = getTagName

function getFoodSpus(shop_id,tags){
    let promiseArr = []
    for(let item of tags){
        promiseArr.push(connect.getFoodSpus(shop_id,item.food_tag_name))
    }
    return Promise.all(promiseArr).then(value=>{
        let arrs = []
        for(item of value){
            if(item.length!==0){
                var obj = tags.filter(tag=> item[0].tagName===tag.food_tag_name) 
                obj = obj[0]
                obj.spus = item
                arrs.push(obj)
            }
        }
        return arrs
    })
}


exports.getFoodSpus = getFoodSpus