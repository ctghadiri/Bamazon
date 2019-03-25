var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon_DB"
});
connection.connect(function(err){
    if (err) throw err;
});