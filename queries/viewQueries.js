const mysql = require('mysql2');
const connection = require('../db/connection');

//View all departments
const viewAllDepartments = async() => {
  return connection.promise().query("SELECT * FROM department")
    .then(([depts]) => {
      console.log('\n')
      console.table(depts);
    })
}

const viewAllRoles = async() => {
  return connection.promise().query("SELECT * FROM role")
    .then(([roles]) => {
      console.log('\n')
      console.table(roles)
    })
}

const viewAllEmployees = async() => {
  return connection.promise().query(`
  SELECT employee.id, employee.first_name, employee.last_name, role.title AS role, role.salary, department.name AS department, CONCAT(manager.first_name, " ", manager.last_name) AS manager
  FROM employee
  LEFT JOIN role ON role_id = role.id
  LEFT JOIN department ON department_id = department.id
  LEFT JOIN employee AS manager ON employee.manager_id = manager.id
`).then(([employees]) => {
    console.log('\n')
    console.table(employees)
  })
}

const viewEmployeesByManager = async() => {
  return connection.promise().query(`SELECT CONCAT(manager.first_name, ' ', manager.last_name) AS manager,
CONCAT(employee.first_name, ' ', employee.last_name) AS employee, role.title
FROM employee
LEFT JOIN employee manager ON employee.manager_id = manager.id
LEFT JOIN role ON employee.role_id = role.id
ORDER BY manager.id`).then(([employees]) => {
    console.log('\n')
    console.table(employees)
  })
}

const viewEmployeesByDepartment = async() => {
  return connection.promise().query(`SELECT department.name AS department, role.title, employee.id, employee.first_name, employee.last_name
  FROM employee
  LEFT JOIN role ON (role.id = employee.role_id)
  LEFT JOIN department ON (department.id = role.department_id)
  ORDER BY department.name;`).then(([employees]) => {
    console.log('\n')
    console.table(employees)
  })
}

module.exports = {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  viewEmployeesByManager,
  viewEmployeesByDepartment
}