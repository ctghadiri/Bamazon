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
    showTable();
});

// Make global variable for item chosen
// var itemChosen;
// // Function for question choosing item
// function chooseItem(){
//     inquirer
//     .prompt(
//         {
//             name: 'itemId',
//             type: 'input',
//             message: 'What is the ID of the product they would like to buy?',
//             validate: function validateID(input){
//                 if(input <= itemID.length && input >0){
//                     itemChosen = input;
//                     return true;
//                 }
//                 else{
//                     console.log("\nPlease enter and ID from the list.")
//                     return false;
//                 }
//             }
//         }
//     ).then(function (answer){
//         chooseAmount();
//     });
// };

// Make global variable for quantityChosen
// var quantityChosen;

// // Function for choosing amount of item chosen
// function chooseAmount(){
//     inquirer
//     .prompt(
//         {
//             name:'quantity',
//             type: 'input',
//             message: 'How many would you like to purchase?',
//             validate: function validateQuantity(input){
//                 if(input >= productQuantity && input > 0){
//                     quantityChosen = input;
//                     return true;
//                 }
//                 else{
//                     return false;
//                 }
//             }
//         }
//     );
// };

// Creation of product list
function showTable(){

    connection.query("SELECT * FROM products", function (err, res){
        if (err) throw err; 
        
        var table = new Table({
            head: ['item_id', 'product_name', 'department_name', 'price', 'stock'], colWidths: [100, 200],
            colWidths: [50, 120, 120, 50, 50]
        });

        for(var i = 0;i < res.length; i++){

            table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock])

        }
        console.log(table.toString());
    });
}


// Pull for array of items
// var itemID;
// connection.query("SELECT item_id FROM products", function (err, res){
//     if(err) throw err;
//     itemID = res;
//     // chooseItem();
// })

// Pull for quantity amount
// var productQuantity;
// connection.query("SELECT stock FROM products WHERE ?",{
//     item_id: name.itemID
// }, function (err, res){
//     if(err) throw err;
//     productQuantity = res;
// })

// Update table with new quantity
// connection.query("UPDATE products SET ? WHERE ?",
//     [
//         {
//             stock: answer.quantity
//         },
//         {
//             item_id: itemID
//         }
//     ], function(err, res){
//         if(err) throw err;
//     })


