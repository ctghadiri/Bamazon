var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon_DB"
});
connection.connect(function(err){
    if (err) throw err;

});
var itemID;
connection.query("SELECT item_id FROM products", function (err, data){
    if(err) throw err;
    itemID = data;
    question();
})

function question(){
    inquirer
    .prompt(
        {
            name: 'itemId',
            type: 'input',
            message: 'What is the ID of the product they would like to buy?',
            validate: function validateID(input){
                if(input <= itemID.length){
                    return true;
                }
                else{
                    console.log("\nPlease enter and ID from the list.")
                    return false;
                }
            }
        }
        // {
        //     name:'quantity',
        //     type: ''
        // }
    )
}