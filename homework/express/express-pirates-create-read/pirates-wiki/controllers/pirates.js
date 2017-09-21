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


// EDIT //
router.get('/:id/edit', (req, res) => {
    res.render('pirates/edit', {
        pirates: {
            id: req.params.id,
            name: data[req.params.id].name,
            birthplace: data[req.params.id].birthplace,
            death_year: data[req.params.id].death_year,
            base: data[req.params.id].base,
            nickname: data[req.params.id].nickname,
        }
    });
});


// UPDATE //
router.put('/:id', (req, res) => {
    const pirateEdit = data[req.params.id];

    pirateEdit.name = req.body.name;
    pirateEdit.birthplace = req.body.birthplace;
    pirateEdit.death_year = req.body.death_year;
    pirateEdit.base = req.body.base;
    pirateEdit.nickname = req.body.nickname;

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



//DELETE//
router.delete('/:id', (req, res) =>{
    data.splice(parseInt(req.params.id), 1);
    res.redirect('/pirates');
});






module.exports = router;