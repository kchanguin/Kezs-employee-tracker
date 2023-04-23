const inquirer = require("inquirer");
const mysql = require("mysql2");


// make a mySQL connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3005,
    user: "root:",
    password: "",
    database: "employeeTracker_db"
});

//start connecting to a database
connection.connect((err) => {
    if (err) throw err;
    console.log("Now connected to a database! yay!");


});
//make a function to start the SQL Employee tracker

function start() { }
inquirer
    .prompt({
        type: "list",
        name: "action",
        message: "What do you prefer to do?",
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Add a Manager",
            "Update an employee role",
            "Exit",
        ],
    })
    .then((answer) => {
        switch (answer.action) {
            case "View all departments":
                viewAllDepartments();
                break;
            case "View  all roles":
                viewAllRoles();
                break;
            case "View all employees":
                viewAllEmployees();
                break;
            case "Add a department":
                addADepartment();
                break;
            case "Add a Role":
                addARole();


        }

    });


//make a function to view all the departments
function viewAllDepartments() {
    const query = "SELECT * FROM departments";
    connection.query(query, (err, res) => {
        if (err) {
            console.log(err);
        }
        console.table(res);

        //reset the app
        start();


    });
}

//make a function to view all roles
function viewAllRoles() {
    const query = "SELECT * FROM departments";
    connection.query(query, (err, res) => {
        if (err) {
            console.log(err);
        }
        console.table(res);

        //restart app
        start();


    });
}

//make a function to view all the employees
function viewAllEmployees() {
    const query = `
    SELECT emp.id, emp.first_name, role.title, dept.department_name, role.salary, emp. manager_name,
    FROM employee emp
    LEFT JOIN roles r ON emp.role_id = r.id
    LEFT JOIN departments dept ON roles.department_id = dept.id
    LEFT JOIN employee mang ON emp.manager_id = mang.id;
    `;
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);

        //restart app
        start();



    });
}

//make a function to add a department
function addADepartment() {
    inquirer
        .prompt({
            type: "input",
            name: "name",
            message: "Enter the new department name"
        })
        .then((answer)


        )







}










