//Requirements
const express    = require ("express");
const router     = express.Router();
const data       = require('../models/pirates.js');

// INDEX PIRATES //
router.get('/', (req, res) => {
    res.render('pirates/index', {
       pirates: data
    });
});

// NEW PIRATES
router.get('/new', (req, res) => {
    res.render('pirates/new', {  
    })
});

// POST //

router.post('/', (req, res) => {
    const newPirate = req.body;

    data.push(newPirate);
    res.redirect('/pirates');
});

//SHOW PIRATES//
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pirate = data[id];

    res.render('pirates/show', {
        pirate: pirate
    })
});





module.exports = router;