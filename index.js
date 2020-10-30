const mysql = require('mysql');
const inquirer = require('inquirer');

const view = require('./db/viewed.js');

const add = require('./db/added.js');

const update = require('./db/updated.js');
const cTable= require("console.table")

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
};

module.exports ={
    addEmployee: function(connections, start){
        connections.query("SELECT * FROM employee", function(error, data){
            console.table(data)
            start()
        })
    },
    addRole: function(connections, start){
        connections.query("SELECT * FROM employee", function(error, data){
            console.table(data)
            start()
        })
    },
    addDepartment: function(connections, start){
        connections.query("SELECT * FROM employee", function(error, data){
            console.table(data)
            start()
        })
    },
    updateRole: function(connections, start){
        connections.query("SELECT * FROM employee", function(error, data){
            console.table(data)
            start()
        })
    },
    viewAllDepartments: function(connections, start){
        connections.query("SELECT * FROM employee", function(error, data){
            console.table(data)
            start()
        })
    },
    viewAllEmployees: function(connections, start){
        connections.query("SELECT * FROM employee", function(error, data){
            console.table(data)
            start()
        }) 
    },
    viewAllRoles: function(connections, start){
        connections.query("SELECT * FROM employee", function(error, data){
            console.table(data)
            start()
        })
    }
}