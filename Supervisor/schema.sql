
DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;


USE bamazon;


CREATE TABLE products
(
    item_id INT,
    product_type VARCHAR
    (45) NOT NULL,
    department_name VARCHAR
    (45) NOT NULL,
    price DECIMAL
    (10,2) NOT NULL,
    stock_quantity INT
    (10) NOT NULL,
    primary key
    (item_id)
);

SELECT *
FROM products;


INSERT INTO products
    ( department_name,product_type, price, stock_quantity)
VALUES
    ("Electronics", "TV", 250.00, 150),
    ("Clothing", "Shirts", 25.00, 200),
    ("Kitchen", "Appliance", 1200, 300),
    ("Food", "All", 5.00, 500);
