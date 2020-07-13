const inquirer = require("inquirer");
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",

  password: "hello12!",
  database: "bamazon",
});

connection.connect(function (err) {
  if (err) throw err;
  showProduct();
});

const showProduct = () => {
  connection.query("SELECT * FROM products", (err, res) => {
    if (err) throw err;
    console.table(res);
    customerPurchase();
  });
};
const customerPurchase = () => {
  inquirer
    .prompt([
      {
        name: "productId",
        type: "input",
        message: "What would you like to purchase?",
      },
      {
        name: "product",
        type: "input",
        message: "What is the name of the product you would like to buy?",
      },
    ])
    .then((answers) => {
      console.log(answers);
      console.log(answers.productId);
    });
};
