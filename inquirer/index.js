//List of Node.js modules needed to run application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const { choices } = require('yargs');

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
                'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role',
                'Update employee manager', 'View employees by manager', 'View employees by department',
                'Delete departments', 'Delete roles', 'Delete Employees']
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
                    employeesByManager()
                    break;
                case 'View employees by department':
                    employeesByDepartment()
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
                default:
                    ''
                    break;
            }
        })
}

const viewAllDepartments = () => {
    console.log('This works!')
}

const viewAllRoles = () => {
    console.log('This works!')
}

const viewAllEmployees = () => {
    console.log('This works!')
}

const addDepartment = () => {
    console.log('This works!')
}

const addRole = () => {
    console.log('This works!')
}

const addEmployee = () => {
    console.log(`
        ==================
           Add Employee
        ==================
        `);
    inquirer.prompt([
        {
            type: 'input',
            name: 'employeefirstname',
            message: 'What\'s your employee\'s first name?',
            validate: nameanswer => {
                if (nameanswer) {
                    return true;
                } else {
                    console.log('\nAn employee name is required:')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeelastname',
            message: 'What\'s your employee\'s last name?',
            validate: lastnameanswer => {
                if (lastnameanswer) {
                    return true;
                } else {
                    console.log('\nAn employee last name is required:')
                    return false;
                }
            }
        },
        inquirer.prompt([
            {
                type: 'list',
                name: 'roleselect',
                message: 'What is the employee\'s role?:',
                choices: ['Saleslead', 'Salesperson', 'Lead Engineer',
                    'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer']
            }
        ])
    ])
}

const updateRole = () => {
    console.log('This works!')
}
const updatedEmployManager = () => {
    console.log('This works!')
}
const employeesByManager = () => {
    console.log('This works!')
}
const employeesByDepartment = () => {
    console.log('This works!')
}
const deleteDepartments = () => {
    console.log('This works!')
}
const deleteRoles = () => {
    console.log('This works!')
}
const deleteEmployees = () => {
    console.log('This works!')
}

introPrompt();
