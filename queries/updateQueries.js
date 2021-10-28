const mysql = require('mysql2');
const connection = require('../db/connection');


const updateRole = () => {
    const sql = "SELECT id, title FROM role"
    let roles = connection.query(sql (result) ) ;
    let rolesArray = roles.map(role => {
        return {
            name: role.title,
            value: role.id
        }
    })
    let employees = connection.query("SELECT id, first_name, last_name FROM employee");
    let employeesArray = employees.map(employee => {
        return {
            name: employee.first_name + " " + employee.last_name,
            value: empl.id
        }
    })
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
            choices: employeesArray
        },
        {
            type: 'list',
            name: 'rolepick',
            message: 'Please select a new role to assign the employee:',
            choices: rolesArray
        }
    ]).then((answer) => {
        return connection.promise().query(
            "UPDATE employee SET role_ID=? WHERE id=?",
            [answer.rolepick, answer.employeepick]
        ).then( (res) => {
            console.log(`${answer.employeepick}'s role has been updated to ${answer.rolepick}'`)
        })
    })
}

const updatedEmployManager = () => {
    console.log('This works!')
}

module.exports = {
    updateRole,
    updatedEmployManager
}