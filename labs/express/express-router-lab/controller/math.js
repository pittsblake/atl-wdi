const express = require('express');
const router = express.Router();
const hbs = require('hbs');



router.get('/:operator', (req, res) => {
    if (req.params.operator === "add") {
        res.render('math', {
            solution: parseInt(req.query.num1) + parseInt(req.query.num2),
        });
    } else if (req.params.operator === "subtract") {
        res.render('math', {
            solution: parseInt(req.query.num1) - parseInt(req.query.num2),
        });
    } else if (req.params.operator === "multiply") {
        res.render('math', {
            solution: parseInt(req.query.num1) * parseInt(req.query.num2),
        });
    } else if (req.params.operator === "divide") {
        res.render('math', {
            solution: parseInt(req.query.num1) / parseInt(req.query.num2),
        });
    }
});

module.exports = router;