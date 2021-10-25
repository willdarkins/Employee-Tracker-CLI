const express = require('express');
const router = express.Router();
const db = require('../../db/connection');


const deleteDepartments = () => {
    console.log('This works!')
}
const deleteRoles = () => {
    console.log('This works!')
}
const deleteEmployees = () => {
    console.log('This works!')
}



module.exports = {
    router,
    deleteDepartments,
    deleteRoles,
    deleteEmployees
}