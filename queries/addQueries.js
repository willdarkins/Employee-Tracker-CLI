//Dependencies imported for mysql2, database connection and Inquirer
const mysql = require('mysql2');
const connection = require('../db/connection');
const inquirer = require('inquirer');
//Async function initiates inquirer to gather infomration and create new department
const addDepartment = async () => {
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
            console.log(`\n ${answer.name} department successfully added!`)
        })
    })

}
//Async function initiates inquirer to gather infomration and create new role
const addRole = async () => {
    const updatePrompt = async (depts) => {
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
                choices: depts
            },
        ]).then((answer) => {
            return connection.promise().query(
                "INSERT INTO role (title, salary, department_id) VALUES (?,?,?)", [answer.title, answer.salary, answer.department]
            ).then((res) => {
                console.log(`\n${answer.title} role successfully added!`)
            })
        })
    }
    return connection.promise().query("SELECT * FROM department").then(([res]) => {
        let depts = res.map(dept => {
            return {
                name: dept.name,
                value: dept.id
            }
        })
        return updatePrompt(depts)
    })
}

//Async function initiates inquirer to gather infomration and create new employee
const addEmployee = async () => {
    const updatePrompt = async (roles, managers) => {
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
                choices: roles
            },
            {
                type: 'list',
                name: 'managerselect',
                message: 'Who is the employee\'s manager?',
                choices: managers
            }
        ]).then((answer) => {
            return connection.promise().query(
                "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)",
                [answer.firstname, answer.lastname, answer.roleselect, answer.managerselect],
                console.log(`\n${answer.firstname} ${answer.lastname} successfully added to the staff!`)
            )
        })
    }
    return connection.promise().query("SELECT * FROM role").then(([res]) => {
        let roles = res.map(role => {
            return {
                name: role.title,
                value: role.id
            }
        })
        return connection.promise().query("SELECT * FROM employee WHERE manager_id is NULL").then(([res]) => {
            let managers = res.map(manager => {
                return {
                    name: manager.first_name + " " + manager.last_name,
                    value: manager.id
                }
            })
            return updatePrompt(roles, managers)
        })
    })
}
//Expots all add queries
module.exports = {
    addDepartment,
    addRole,
    addEmployee
}