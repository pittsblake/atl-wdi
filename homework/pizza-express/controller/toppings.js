const express = require ("express");
const router = express.Router();

router.get('/:type', (req, res,) => {  
    res.render('toppings', {
        type: req.params.type,
    });
});

module.exports = router;