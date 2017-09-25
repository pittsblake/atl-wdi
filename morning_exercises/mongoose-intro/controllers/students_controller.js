const express = require('express');
const router = express.Router();
const Schema = require('../db/schema.js');

const StudentModel = Schema.StudentModel;

router.get('/', (req, res) => {
    StudentModel.find({})
        .then((students) => {
            res.render('student/index', {
                students: students,
            })
        })
        .catch((error) => {
            console.log("error");
        })
})

router.get('/:id', (req, res) => {
    const studentId = req.params.id;

    StudentModel.findById(studentId)
        .then((student) => {
            res.render('student/show', {
                student: student,
            })
        })
})


//DELETE
router.get('/:id/delete', (req, res) => {

    const studentId = req.params.id
        StudentModel.findOneAndRemove(studentId)
        .then((student) => {
            res.send('you deleted it!')
        })
})

//router.delete('/id', (req, res))


module.exports = router;