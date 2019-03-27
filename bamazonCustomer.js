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
var itemID;
connection.query("SELECT item_id FROM products", function (err, data){
    if(err) throw err;
    itemID = data;
    question();
})

connection.query("SELECT * FROM products"), function (err, res){
    if (err) throw err;
    var res = res
    console.log(res);
    var table = new Table({
        head: ['item_id', 'product_name', 'department_name', 'price', 'stock'], colWidths: [100, 200]
    });

    for(var i = 0, i < res.length; i++){

        table.push(res[i]);

    }
    console.log(table.toString());
}

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
        }
        // {
        //     name:'quantity',
        //     type: ''
        // }
    )
}