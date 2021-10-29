//Dependencies imported for mysql2, database connection and Inquirer
const mysql = require('mysql2');
const connection = require('../db/connection');
const inquirer = require('inquirer');
//Async function initiates inquirer to gather infomration and update an employee role
const updateRole = async () => {
    const updatePrompt = async (employees, roles) => {
        console.log(employees)
        console.log(`
    ==========================
       Update Employee Role
    ==========================
    `);
        return inquirer.prompt([
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
                [answer.rolepick, answer.employeepick],
                console.log(`The Employee's role has been changed!`)
            )
        })
    }
    return connection.promise().query("SELECT * FROM role").then(([res]) => {
        let roles = res.map(role => {
            return {
                name: role.title,
                value: role.id
            }
        })
        return connection.promise().query("SELECT * FROM employee").then(([res]) => {
            let employees = res.map(employee => {
                return {
                    name: employee.first_name + " " + employee.last_name,
                    value: employee.id
                }
            })
            return updatePrompt(employees, roles)
        })
    })
}

//Async function initiates inquirer to gather infomration and update an employee's manager
const updatedEmployManager = async () => {
    const updatePrompt = async (employees, managers) => {
        console.log(`
    =============================
       Update Employee Manager
    =============================
    `);
        return inquirer.prompt([
            {
                type: 'list',
                name: 'employeepick',
                message: 'Which employee would you like to update?',
                choices: employees
            },
            {
                type: 'list',
                name: 'managerpick',
                message: 'Please select which manager to reassign employee:',
                choices: managers
            }
        ]).then((answer) => {
            return connection.promise().query(
                "UPDATE employee SET employee.manager_id = ? WHERE employee.id = ?",
                [answer.managerpick, answer.employeepick]
            )
        })
    }
    return connection.promise().query("SELECT * FROM employee WHERE manager_id is NULL").then(([res]) => {
        let managers = res.map(manager => {
            return {
                name: manager.first_name + " " + manager.last_name,
                value: manager.id
            }
        })
        return connection.promise().query("SELECT * FROM employee WHERE id > 4").then(([res]) => {
            let employees = res.map(employee => {
                return {
                    name: employee.first_name + " " + employee.last_name,
                    value: employee.id
                }
            })
            return updatePrompt(employees, managers)
        })
    })
}
//Expots all update queries
module.exports = {
    updateRole,
    updatedEmployManager
}