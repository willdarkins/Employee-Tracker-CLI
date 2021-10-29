const mysql = require('mysql2');
const connection = require('../db/connection');
const inquirer = require('inquirer');

const addDepartment = async() => {
    console.log(`
    ====================
       Add Department
    ====================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter a department name:',
            validate: deptanswer => {
                if (deptanswer) {
                    return true;
                } else {
                    console.log('\nA department name is required:')
                    return false;
                }
            }
        }
    ]).then((answer) => {
        return connection.promise().query(
            "INSERT INTO department (name) VALUES (?)", [answer.name]
        ).then((res) => {
            console.log(`${answer.name} department successfully added!`)
        })
    })

}

const addRole = () => {
    console.log(`
    ==============
       Add Role
    ==============
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please list the title of the role:',
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
                if (!isNaN(salaryanswer)) {
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
    ]).then((answer) => {
        let deptId = answer.department.split(" ");
        return connection.promise().query(
            "INSERT INTO role (title, salary, department_id) VALUES (?,?,?)", [answer.title, answer.salary, deptId[0]]
        ).then((res) => {
            console.log(`${answer.title} role successfully added!`)
        })
    })
}

const addEmployee = async() => {
    console.log(`
        ==================
           Add Employee
        ==================
        `);
    return inquirer.prompt([
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
        ).then((res) => {
            console.log(`${answer.firstname} ${answer.lastname} successfully added!`)
        })
    })
}

module.exports = {
    addDepartment,
    addRole,
    addEmployee
}