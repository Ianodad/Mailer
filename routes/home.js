const express = require('express');
const router = express.Router();
const students = require('../service/students')

const {
    getStudent,
    getStudents
} = require('../service/students')


router.get('/', (req, res) =>
    res.render('home', {
        students: getStudents()

    }));


module.exports = router;