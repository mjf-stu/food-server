const connect = require("./user_sql")

function getUser(name,pwd){
    return connect.getUser(name,pwd)
}

exports.getUser = getUser 