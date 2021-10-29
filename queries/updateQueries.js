const mysql = require('mysql2');
const connection = require('../db/connection');
const inquirer = require('inquirer');

const updateRole = async() => {
    connection.query("SELECT * FROM role", (err, res) => {
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
                    name: employee.first_name + " " + employee.last_name,
                    value: employee.id
                }
            })
            updatePrompt(employees, roles)
        })
    })
    const updatePrompt = async(employees, roles) => {
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
                [answer.rolepick, answer.employeepick]
            )
        })

    }
}

const updatedEmployManager = async() => {
    connection.query("SELECT * FROM employee WHERE manager_id is NULL", (err, res) => {
        if (err) {
            throw (error);
        }
        let managers = res.map(manager => {
            return {
                name: manager.first_name + " " + manager.last_name,
                value: manager.id
            }
        })
        connection.query("SELECT * FROM employee WHERE id > 4", (err, res) => {
            if (err) {
                throw (error);
            }
            let employees = res.map(employee => {
                return {
                    name: employee.first_name + " " + employee.last_name,
                    value: employee.id
                }
            })
        return updatePrompt(employees, managers)
        })
    })
    const updatePrompt = async(employees, managers) => {
        console.log(`
    =============================
       Update Employee Manager
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
}

module.exports = {
    updateRole,
    updatedEmployManager
}