const connect = require("../../connection")

function getUser(name,pwd){
    let query = "select * from users where name = '"+ name +"' and password = '"+ pwd +"' " 
    // let query = "select * from users " 
    
    return new Promise((resolve,reject)=>{
        connect.query(query,function(err,results,fields){
            if(err) reject(err)
            console.log(results)
            if(results===undefined||results.length===0){
                insertUser(name,pwd)
                .then(val=>{
                    console.log({uId:val.insertId,uName:name})
                    resolve({uId:val.insertId,uName:name})    
                }).catch(err=>{
                    reject(err)
                })
            }
            else{
                resolve({uId:results[0].id,uName:results[0].name})
            }
        })
    })
}

exports.getUser = getUser

function insertUser(name,pwd){
    let query = "insert into users values (null,'"+name+"','"+pwd+"')"
    return new Promise((resolve,reject)=>{connect.query(query,function(err,results,fields){
            if(err) reject(err)
            resolve(results)
        })
    })
}

exports.insertUser = insertUser
// insertUser(12345678999,12354678)