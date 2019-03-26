DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB

CREATE TABLE products(
    item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(50) NOT NULL
    department_name VARCHAR(50) NOT NULL
    price DECIMAL (50,2) NOT NULL,
    stock INTEGER NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO (product_name, department_name, price, stock)
VALUE("Black Rhino", "Perissodactyla", 1500.00, 1);
 
INSERT INTO (product_name, department_name, price, stock)
VALUE("Sea Turtle", "Reptile", 1500.00, 1);

INSERT INTO (product_name, department_name, price, stock)
VALUE("Amur Leopard", "Cat", 1000.00, 2);

INSERT INTO (product_name, department_name, price, stock)
VALUE("Ganges River Dolphin", "Cetacea", 1000.00, 1);

INSERT INTO (product_name, department_name, price, stock)
VALUE("African Wild Dog", "Canine", 5.99, 2);

INSERT INTO (product_name, department_name, price, stock)
VALUE("Bengal Tiger", "Cat", 5000, 3);

INSERT INTO (product_name, department_name, price, stock)
VALUE("Giant Panda", "Bear", 10000, 2);

INSERT INTO (product_name, department_name, price, stock)
VALUE("Eastern Lowland Gorilla", "Ape", 4500, 1);

INSERT INTO (product_name, department_name, price, stock)
VALUE("Galapagos Penguin", "Bird", 1500, 5);

INSERT INTO (product_name, department_name, price, stock)
VALUE("Sumatran Elephant", "Pacaderm", 4000, 1);
  