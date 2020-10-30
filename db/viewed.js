const inquirer = require('inquirer');
 

module.exports ={
    viewAllDepartments: function(connections, start){
        connections.query("SELECT * FROM department", function(error, data){
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
        connections.query("SELECT * FROM role", function(error, data){
            console.table(data)
            start()
        })
    }
}