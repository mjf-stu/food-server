const connect = require("./shop_sql")

function get_shop_msg(){
    const data = connect.get_shop_msg()
    let shop_data = []
    return data.then(val=>{
        // 1把主要信息放入
        for(let i=0 ;i<=val.shop_main_msg.length-1; i++){
            
            // 2把smarttag信息放入对应的shop_id中
            let smartTags = val.shop_smarttag_msg.filter(item => item.shop_id===val.shop_main_msg[i].shop_id)
            val.shop_main_msg[i].smartTags = smartTags
            
            //3把prefer信息放入对应的shop_id中
            let preferMsgs = val.shop_prefer_msg.filter(item => item.shop_id===val.shop_main_msg[i].shop_id)
            val.shop_main_msg[i].preferMsg = preferMsgs
            
            shop_data.push(val.shop_main_msg[i])
        }
        

        return shop_data
    })
}

exports.get_shop_msg = get_shop_msg