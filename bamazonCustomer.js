var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table2')

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

// Creation of product list
connection.query("SELECT * FROM products"), function (err, res){
    if (err) throw err;
    console.log(res)
    
//     var table = new Table({
//         head: ['item_id', 'product_name', 'department_name', 'price', 'stock'], colWidths: [100, 200]
//     });

//     for(var i = 0;i < res.length; i++){

//         table.push(res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock)

//     }
//     console.log(table.toString());
}


// Pull for array of items
// var itemID;
// connection.query("SELECT item_id FROM products", function (err, res){
//     if(err) throw err;
//     itemID = res;
//     // question();
// })



// Function for initial question
function question(){
    inquirer
    .prompt(
        {
            name: 'itemId',
            type: 'input',
            message: 'What is the ID of the product they would like to buy?',
            validate: function validateID(input){
                if(input <= itemID.length && input >0){
                    return true;
                }
                else{
                    console.log("\nPlease enter and ID from the list.")
                    return false;
                }
            }
        },
        {
            name:'quantity',
            type: 'input',
            message: 'How many would you like to purchase?',
            validate: function validateQuantity(input){
                if(input >= itemQuantity && input > 0){
                    return true;
                }
                else{
                    return false;
                }
            }
        }
    );
}