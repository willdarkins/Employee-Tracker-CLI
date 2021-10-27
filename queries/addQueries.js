const mysql = require('mysql2');
const connection = require('../db/connection');

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
            choices: ['1 Saleslead', '2 Salesperson', '3 Lead Engineer',
                '4 Software Engineer', '5 Account Manager', '6 Accountant', '7 Legal Team Lead', '8 Lawyer']
        },
        {
            type: 'list',
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
    ])
}



module.exports = {
    addDepartment,
    addRole,
    addEmployee
}