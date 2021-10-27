const mysql = require('mysql2');
const connection = require('../db/connection');

//View all departments
function viewAllDepartments (){ 
  return connection.promise().query("SELECT * FROM department")
}

const viewAllRoles = () => {
  return connection.promise().query("SELECT * FROM role")
}

const viewAllEmployees = () => {
  return connection.promise().query(`
    SELECT employee.id, employee.first_name, employee.last_name, role.title AS role, role.salary, department.name AS department, CONCAT(manager.first_name, " ", manager.last_name) AS manager
    FROM employee
    LEFT JOIN role ON role_id = role.id
    LEFT JOIN department ON department_id = department.id
    LEFT JOIN employee AS manager ON employee.manager_id = manager.id`
  )
}

const viewEmployeesByManager = () => {
  return connection.promise().query(`
  SELECT manager.id, CONCAT(manager.first_name, " ", manager.last_name) AS manager, employee.id AS employee_id, CONCAT(employee.first_name," ", employee.last_name) AS employee , role.title AS role, role.salary, department.name AS department
  FROM employee AS manager
  RIGHT JOIN employee ON employee.manager_id = manager.id
  RIGHT JOIN role ON employee.role_id = role.id
  RIGHT JOIN department ON department_id = department.id
  `)
}

const viewEmployeesByDepartment = () => {
  console.log('This works!')
}

module.exports = {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  viewEmployeesByManager,
  viewEmployeesByDepartment
}