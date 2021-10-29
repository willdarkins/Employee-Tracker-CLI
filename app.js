//Dependencies for Inquirer and console.table imported
const inquirer = require('inquirer');
require("console.table");
//Destructured functions imported from corresponding query files located in the queries directory
const { viewAllDepartments, viewAllRoles, viewAllEmployees, viewEmployeesByManager, viewEmployeesByDepartment } = require('./queries/viewQueries');
const { addDepartment, addRole, addEmployee } = require('./queries/addQueries');
const { updateRole, updatedEmployManager } = require('./queries/updateQueries');
//Initiates application menu
const introPrompt = () => {
    console.log(`
     ====================================
       Welcome to CLI Employee Tracker!
     ====================================
     `
    );
    //Inquirer prompt renders main menu with all selections listed in CMS
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
    ])//Selection is filterd through switch statement which fulfills promoise from query files
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
//Exported IntroPrompt
module.exports = { introPrompt }