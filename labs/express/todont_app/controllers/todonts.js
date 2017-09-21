const express       = require('express');
const router        = express.Router();
const data          = require('../data.js');

//INDEX PAGE FOR TODONTS(res.render - this sends us into what we are trying to view...so the hbs file.)
router.get ('/', (req, res) => {
    res.render('todonts/index', {
        todonts: data.seededToDonts,
        numTotal: data.seededToDonts.length,
    });
});


//NEW PAGE FOR TODONTS
router.get ('/new', (req, res) => {
    res.render('todonts/new');
});

// POST (this will post the input on from the newpage to the index page)
router.post('/', (req, res) => {
    const newTodont = req.body;
    data.seededToDonts.push(newTodont);
    res.redirect('/todonts');
})

//EDIT ToDonts
router.get('/:id/edit', (req, res) => {
    res.render('todonts/edit', {
        todont: {
            id: req.params.id,
            description: data.seededToDonts[req.params.id].description,
            urgent: data.seededToDonts[req.params.id].urgent,
        }
    });
});

//UPDATE TODonts
router.put('/:id', (req, res) => {
    const todontEdit = data.seededToDonts[req.params.id];

    todontEdit.description = req.body.description;
    todontEdit.urgen = req.body.ugent;

    res.redirect('/todonts');
});



// SHOW PAGE FOR TODONTS (This is to look at ONE)
router.get ('/:id', (req, res) => {
    //This grabs the index from the specific part of an array
    const id = parseInt (req.params.id);
    //This assigns the data to the variable todonts and the index number whish is attached to id
    const todonts = data.seededToDonts[id];

    if(!todonts){
        res.render('todonts/show', {
            error: "No ToDont found on this page"
        })
    } else {
        res.render('todonts/show', {
            todonts: todonts
        })
    }
});


//DELETE//
router.delete('/:id', (req, res) => {
    data.seededToDonts.splice(req.params.id, 1); //removes item from array
    res.redirect('/todonts');
});


module.exports = router;