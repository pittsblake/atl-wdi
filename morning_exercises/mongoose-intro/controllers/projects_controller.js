const express = require('express');
const router = express.Router({mergeParams: true});
const Schema = require("../db/schema.js");

const StudentModel = Schema.StudentModel

router.get('/', (req, res) => {
   
    const studentId = req.params.studentId 

    StudentModel.findById(studentId)
        .then((student) => {
            // display each project in a div
            res.render('project/index', {
                student: student
            })
        })
        
})

module.exports = router