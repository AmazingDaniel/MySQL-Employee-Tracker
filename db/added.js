const inquirer = require("inquirer");

function addDepartment() {
  return  inquirer.prompt([
        {

            name: "deptName",
            type: "input",
            message: "What is the department you would like to add?",
        
        }
    ])
}

function addRole() {
    return inquirer.prompt([
        {

            name: "roleTitle",
            type: "input",
            message: "What is the role you would like to add?",
            
        },
        {

            name: "salary",
            type: "input",
            message: "What is the salary of the role?",
            
        },
        {
            name: "deptName",
            type: "input",
            message: "What is the role's department ID?"
        }
    ])
}

function addEmployee() {
    return inquirer.prompt([

        {

            name: "firstName",
            type: "input",
            message: "Employee's first name?",
            
            
        },
        {

            name: "lastName",
            type: "input",
            message: "Employee's last name?",

            
        },
        {
        
            name: "roleID",
            type: "input",
            message: "What is the employee's ID?"

        },
        {
        
            name: "managerID",
            type: "input",
            message: "What is the manager ID?"

        }
    ])
}

module.exports ={
    addEmployee: function(connections, start){
        addEmployee().then(function(userInput){
            connections.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)VALUES("${userInput.firstName}","${userInput.lastName}",${userInput.roleID},${userInput.managerID})`, function(error, data){
                console.table(data)
                start()
            })
        })
        
    },
    addRole: function(connections, start){
        addRole().then(function(userInput){
            connections.query(`INSERT INTO role(title, salary, department_id)VALUES("${userInput.roleTitle}",${userInput.salary},${userInput.deptName})`, function(error, data){
                console.table(data)
                start()
            })
        })
        
    },
    addDepartment: function(connections, start){

      addDepartment().then(function(userInput){
        connections.query(`insert INTO department (name)VALUES("${userInput.deptName}")` ,function(error, data){
            console.table(data)
            start()
        })
      })


        
    },
}