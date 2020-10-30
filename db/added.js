// const inquirer = require("inquirer");

// // function addDepartment() {
// //     .prompt([
// //         {

// //             name: "deptName",
// //             type: "input",
// //             message: "What is the department you would like to add?",
        
// //         }
// //     ])
// // }

// // function addRole() {
// //     .prompt{[
// //         {

// //             name: "roleTitle",
// //             type: "input",
// //             message: "What is the role you would like to add?",
            
// //         },
// //         {

// //             name: "salary",
// //             type: "input",
// //             message: "What is the salary of the role?",
            
// //         },
// //         {
// //             name: "deptName",
// //             type: "list",
// //             message: "What is the role's department?"
// //         }
// //     ]}
// // }

// // function addEmployee() {
// //     .prompt([

// //         {

// //             name: "firstName",
// //             type: "input",
// //             message: "What is the employee's first name?",
            
            
// //         },
// //         {

// //             name: "lastName",
// //             type: "input",
// //             message: "What is the employee's last name?",

            
// //         },
// //         {
        
// //             name: "role",
// //             type: "list",
// //             message: "What is the employee's role?"

// //         }
// //     ])
// // }

// module.exports ={
//     addEmployee: function(connections, start){
//         connections.query("SELECT * FROM employee", function(error, data){
//             console.table(data)
//             start()
//         })
//     },
//     addRole: function(connections, start){
//         connections.query("SELECT * FROM employee", function(error, data){
//             console.table(data)
//             start()
//         })
//     },
//     addDepartment: function(connections, start){
//         connections.query("SELECT * FROM employee", function(error, data){
//             console.table(data)
//             start()
//         })
//     },
// }