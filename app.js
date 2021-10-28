//List of Node.js modules needed to run application
const inquirer = require('inquirer');
require("console.table");
const { viewAllDepartments, viewAllRoles, viewAllEmployees, viewEmployeesByManager, viewEmployeesByDepartment } = require('./queries/viewQueries');
const { addDepartment, addRole, addEmployee } = require('./queries/addQueries');
const { updateRole, updatedEmployManager } = require('./queries/updateQueries');
const { deleteDepartments, deleteRoles, deleteEmployees } = require('./queries/deleteQueries');

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
                'View employees by manager', 'View employees by department', 'Add a Department',
                'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Update employee manager',
                'Delete departments', 'Delete roles', 'Delete Employees', 'Exit']
        }
    ])
        .then(({ mainselect }) => {
            switch (mainselect) {
                case 'View All Departments':
                    viewAllDepartments()
                    break;
                case 'View All Roles':
                    viewAllRoles()
                    break;
                case 'View All Employees':
                    viewAllEmployees()
                    break;
                case 'Add a Department':
                    addDepartment()
                    break;
                case 'Add a Role':
                    addRole()
                    break;
                case 'Add an Employee':
                    addEmployee()
                    break;
                case 'Update an Employee Role':
                    updateRole()
                    break;
                case 'Update employee manager':
                    updatedEmployManager()
                    break;
                case 'View employees by manager':
                    viewEmployeesByManager()
                    break;
                case 'View employees by department':
                    viewEmployeesByDepartment()
                    break;
                case 'Delete departments':
                    deleteDepartments()
                    break;
                case 'Delete roles':
                    deleteRoles()
                    break;
                case 'Delete Employees':
                    deleteEmployees()
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

