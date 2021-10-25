const express = require('express');
const router = express.Router();
const db = require('../../db/connection');


const updateRole = () => {
    console.log('This works!')
}
const updatedEmployManager = () => {
    console.log('This works!')
}



module.exports = {
    router,
    updateRole,
    updatedEmployManager
}