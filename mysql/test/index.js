const mysql = require("mysql")

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Aikidoka-123",
    database: "gregs_list"
})

con.connect((err) => {
    if (err) throw err
    console.log("Connected to MySQL")
    con.query("SELECT * FROM toys", (err, result, fields) => {
        if (err) throw err
        console.log(result[0].toy)
    })
})