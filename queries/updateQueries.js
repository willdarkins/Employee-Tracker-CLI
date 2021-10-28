const mysql = require('mysql2');
const connection = require('../db/connection');


const updateRole = () => {
    connection.query("SELECT * FROM role"), (err, res) => {
        if(err) {
            throw(error);
        }
        let roles = res.map(role => {
            return {
                name: role.title,
                value: role.id
            }
        })
    connection.query("SELECT * FROM employee", (err, res) => {
        if(err) {
            throw(error);
        }
        let employees = res.map(employee => {
            return {
                name: employee.first_name,
                value: employee.id
            }
        })
    })
}
    console.log(`
    =============================
       Update Employee by Role
    =============================
    `);
    inquirer.prompt([
        {
            type: 'list',
            name: 'employeepick',
            message: 'Which employee would you like to update?',
            choices: employees
        },
        {
            type: 'list',
            name: 'rolepick',
            message: 'Please select a new role to assign the employee:',
            choices: roles
        }
    ]).then((answer) => {})
}




const updatedEmployManager = () => {
    console.log('This works!')
}

module.exports = {
    updateRole,
    updatedEmployManager
}