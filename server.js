const inquirer = require("inquirer");
const mysql = require("mysql2");


// make a mySQL connection
const connection = mysql.createConnection({
host: "localhost",
port:3005,
user: "root:",
password: "",
database: "employeeTracker_db"
});

//start connecting to a database
connection.connect((err)  => {
if (err) throw err;
console.log("Now connected to a database! yay!");


});
//make a function to start the SQL Employee tracker

function start() {
    inquirer
      prompt: "type"
      list:







};