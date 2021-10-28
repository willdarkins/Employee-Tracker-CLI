const mysql = require('mysql2');
const connection = require('../db/connection');
const inquirer = require('inquirer');

const updateRole = () => {
    connection.query("SELECT * FROM role"), (err, res) => {
        if (err) {
            throw (error);
        }
        let roles = res.map(role => {
            return {
                name: role.title,
                value: role.id
            }
        })
        connection.query("SELECT * FROM employee", (err, res) => {
            if (err) {
                throw (error);
            }
            let employees = res.map(employee => {
                return {
                    name: employee.first_name,
                    value: employee.id
                }
            })
            updatePrompt(employees, roles)
        })
    }
    const updatePrompt = () => {
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
        ]).then((answer) => {
            return connection.promise().query(
                "UPDATE employee SET role_ID=? WHERE id=?",
                [answer.rolepick, answer.employeepick]
            ).then((res) => {
                console.log(`${answer.employeepick}'s role has been updated to ${answer.rolepick}'`)
            })
        })

    }
}

const updatedEmployManager = () => {
    console.log('This works!')
}

module.exports = {
    updateRole,
    updatedEmployManager
}