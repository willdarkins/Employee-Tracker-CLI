//List of Node.js modules needed to run application
const fs = require('fs');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const { viewAllDepartments, viewAllRoles, viewAllEmployees, viewEmployeesByManager, viewEmployeesByDepartment } = require('./routes/apiRoutes/viewRoutes');
const{ addDepartment, addRole, addEmployee } = require('./routes/apiRoutes/addRoutes');
const{ updateRole, updatedEmployManager } = require('./routes/apiRoutes/updateRoutes');
const{ deleteDepartments, deleteRoles, deleteEmployees } = require('./routes/apiRoutes/deleteRoutes');

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
            'Add a Role', 'Add an Employee', 'Update an Employee Role','Update employee manager',
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
                    Connection.end();
                default:
                    ''
                    break;
            }
        })
}

module.exports = introPrompt

introPrompt();
