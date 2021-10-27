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
  return connection.promise().query("SELECT * FROM employee")
}

const viewEmployeesByManager = () => {
  console.log('This works!')
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