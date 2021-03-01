const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "vuefood"
})

connection.connect()

module.exports = connection
// connection.query("select * from users",function(error,results,fields){
//     console.log(results)
// })  

// connection.end()