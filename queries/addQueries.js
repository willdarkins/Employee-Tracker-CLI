const mysql = require('mysql2');
const connection = require('../db/connection');
const inquirer = require('inquirer');
const { introPrompt } = require('../app');

const addDepartment = () => {
    console.log('This works!')
}

const addRole = () => {
    console.log(`
    ==============
       Add Role
    ==============
    `);
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please list the name of the role:',
            validate: roleanswer => {
                if (roleanswer) {
                    return true;
                } else {
                    console.log('\nA role name is required:')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Please provide a salary for this new role:',
            validate: salaryanswer => {
                if (Number.isNaN(salaryanswer)) {
                    return true;
                } else {
                    console.log('\nA role salary is required and must be a number:')
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'department',
            message: 'Which department does this role fall under?',
            choices: ['1 Sales', '2 Engineering', '3 Finance', '4 Legal']
        },
    ])
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
            name: 'firstname',
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
            name: 'lastname',
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
        {
            type: 'list',
            name: 'roleselect',
            message: 'What is the employee\'s role?:',
            choices: ['1 Saleslead', '2 Salesperson', '3 Lead-Engineer',
                '4 Software-Engineer', '5 Account-Manager', '6 Accountant', '7 Legal-Team-Lead', '8 Lawyer']
        },
        {
            type: 'input',
            name: 'managerselect',
            message: 'What is the employees\'s manager\'s ID?',
            validate: managerId => {
                if (managerId) {
                    return true;
                } else {
                    console.log('\nA manager ID is required:')
                    return false;
                }
            }
        }
    ]).then((answer) => {
        let roleId = answer.roleselect.split(" ")
        return connection.promise().query(
            "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)", [answer.firstname, answer.lastname, roleId[0], answer.managerselect]
            ).then( (res) => {
                console.log(`${answer.firstname} ${answer.lastname} successfully added!`)})
    })
}



module.exports = {
    addDepartment,
    addRole,
    addEmployee
}