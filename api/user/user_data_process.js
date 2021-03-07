const connect = require("./user_sql")

function getUser(name,pwd){
    return connect.getUser(name,pwd)
}

exports.getUser = getUser 

function getOrder(uId){
    return connect.getOrder(uId)
}

exports.getOrder = getOrder

function insertOrder(orderInfo){
    return connect.insertOrder(orderInfo)
}

exports.insertOrder = insertOrder