//List of Node.js modules needed to run application
const inquirer = require('inquirer');
require("console.table");
const { viewAllDepartments, viewAllRoles, viewAllEmployees, viewEmployeesByManager, viewEmployeesByDepartment } = require('./queries/viewQueries');
const { addDepartment, addRole, addEmployee } = require('./queries/addQueries');
const { updateRole, updatedEmployManager } = require('./queries/updateQueries');

const introPrompt = () => {
    console.log(`
     ====================================
       Welcome to CLI Employee Tracker!
     ====================================
     `
    );
    inquirer.prompt([
        {
            type: 'list',
            name: 'mainselect',
            message: 'Please choose from one of the following options:',
            choices: ['View All Departments', 'View All Roles', 'View All Employees',
                'View Employees by Manager', 'View Employees by Department', 'Add a Department',
                'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Update Employee Manager',
                'Exit']
        }
    ])
        .then(({ mainselect }) => {
            switch (mainselect) {
                case 'View All Departments':
                    viewAllDepartments().then(() => {
                        introPrompt();
                    })
                    break;
                case 'View All Roles':
                    viewAllRoles().then(() => {
                        introPrompt();
                    })
                    break;
                case 'View All Employees':
                    viewAllEmployees().then(() => {
                        introPrompt();
                    })
                    break;
                case 'Add a Department':
                    addDepartment().then(() => {
                        introPrompt();
                    })
                    break;
                case 'Add a Role':
                    addRole().then(() => {
                        introPrompt();
                    })
                    break;
                case 'Add an Employee':
                    addEmployee().then(() => {
                        introPrompt();
                    })
                    break;
                case 'Update an Employee Role':
                    updateRole().then(() => {
                        introPrompt();
                    })
                    break;
                case 'Update Employee Manager':
                    updatedEmployManager().then(() => {
                        introPrompt();
                    })
                    break;
                case 'View Employees by Manager':
                    viewEmployeesByManager().then(() => {
                        introPrompt();
                    })
                    break;
                case 'View Employees by Department':
                    viewEmployeesByDepartment().then(() => {
                        introPrompt();
                    })
                    break;
                case 'Exit':
                    console.log('Bye');
                    process.exit();
                default:
                    ''
                    break;
            }
        })
}

introPrompt();

module.exports = { introPrompt }