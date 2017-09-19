const express = require ("express");
const router = express.Router();

router.get('/:amount/:size', (req, res) => {
    res.render('order', {
        amount: req.params.amount,
        size: req.params.size,
    });
});

module.exports = router;