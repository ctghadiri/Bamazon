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
var itemID
connection.query("SELECT item_id FROM products", function (err, data){
    if(err) throw err;
    itemID = res.item_id;
    console.log(itemID);
    return itemID
})
inquirer
.prompt(
    {
        name: 'itemId',
        type: 'input',
        message: 'What is the ID of the product they would like to buy?',
        validate: function validateID(input){
            if(input === ){
                return true;
            }
            else{
                return false;
            }
        }
    },
    {
        name:'quantity',
        type: ''
    }
)