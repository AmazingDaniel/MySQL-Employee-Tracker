// External packages
const mysql = require('mysql');
const inquirer = require('inquirer');

// Internal modules
// View only queries
const view = require('./db/viewed.js');
// Adding new employees or roles
const add = require('./db/added.js');
// Updating and deleting existing data
const update = require('./db/updated.js');
const ctable= require("console.table")

const connections = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Lexy1729",
    database: "employee_DB"
});

connections.connect(function (error) {
    if (error) throw error;
    start();
});

function start() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "Add Employee", 
                "Update Employee Role",
                "View All Roles",
                "Add Role",
                "View All Departments",
                "Add Department",
                "QUIT"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "View All Employees":
                    view.viewAllEmployees(connections, start);
                    break;

        
                case "Add Employee":
                    add.addEmployee(connections, start);
                    break;

                c 
                case "Update Employee Role":
                    update.updateRole(connections, start);
                    break;

                
                case "View All Roles":
                    view.viewRoles(connections, start);
                    break;

                case "Add Role":
                    add.addRole(connections, start);
                    break;

              
                case "View All Departments":
                    view.viewDepartments(connections, start);
                    break;

                case "Add Department":
                    add.addDepartment(connections, start);
                    break;
 
            }
        })
}