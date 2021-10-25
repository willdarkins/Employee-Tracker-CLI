const mysql = require('mysql2');
const express = require('express');
const router = express.Router();
require("console.table");
const db = require('../../db/connection');

//View all departments
async function viewAllDepartments (){ 
  const sql = "SELECT * FROM department";
  db.query(sql, (err, response) => {
    if (err) {
      res.status(500).json({ error: err.message });
      console.table("All departments: ", response);
    }
  });
}

const viewAllRoles = () => {
  console.log('This works!')
}
const viewAllEmployees = () => {
  console.log('This works!')
}
const viewEmployeesByManager = () => {
  console.log('This works!')
}
const viewEmployeesByDepartment = () => {
  console.log('This works!')
}

module.exports = {
  router,
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  viewEmployeesByManager,
  viewEmployeesByDepartment
}