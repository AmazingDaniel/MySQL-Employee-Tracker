const inquirer = require('inquirer');
 

function updateRole(){
    return inquirer.prompt([
        {
            name: "changeID",
            type: "input",
            message: "Change ID?"

        },
        {
            name: "changeRoleID",
            type: "input",
            message: "Change Role ID?"

        }
    ])
}
module.exports = {
    updateRole: function(connections, start){
        updateRole().then(function(userInput){
            connections.query(`UPDATE employee SET role_id =${userInput.changeRoleID} WHERE id =${userInput.changeID} `, function(error, data){
                console.table(data)
                start()
            })
        })
        
    },
};