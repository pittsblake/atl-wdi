const express = require ("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        welcome: 'Welcome to Pizza Express',
    })
});

module.exports = router;