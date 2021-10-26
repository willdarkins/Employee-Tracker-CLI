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



module.exports = {
    addDepartment,
    addRole,
    addEmployee
}