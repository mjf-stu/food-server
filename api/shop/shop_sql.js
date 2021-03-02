const connect = require("../../connection")

// 回调函数的方式把数据传给函数来执行下一步 
// exports.get_shop = function(cb){
//     connect.query("select * from shopmainmsg",function(err,results,fields){
//         cb(results)
//     })
// }

// promise的方式进行
// exports.get_shop = function(){
//     new Promise((resolve,reject)=>{
//         connect.query("select * from shopmainmsg",function(err,results,fields){
//             resolve(resolve)
//         })
//     })
// }

// async+await的方式进行
// 获取商店所有数据
async function get_shop_msg(){
    let shop_main_msg = null
    let shop_smarttag_msg = null
    let shop_prefer_msg = null
    try{
    shop_main_msg = await new Promise((resolve,reject)=>{
        connect.query("select * from shopmainmsg",function(err,results,fields){
            if(err) reject(err)
            resolve(results)
        })
    })
    shop_smarttag_msg = await new Promise((resolve,reject)=>{
        connect.query("select * from shopsmarttag",function(err,results,fields){
            if(err) reject(err)
            resolve(results)
        })
    })
    shop_prefer_msg = await new Promise((resolve,reject)=>{
        connect.query("select * from shopprefer",function(err,results,fields){
            if(err) reject(err)
            resolve(results)
        })
    })
    }catch(err){
        console.log("get_shop_msg---ERROR"+err)
    }
    return {shop_main_msg,shop_smarttag_msg,shop_prefer_msg}
}

exports.get_shop_msg = get_shop_msg