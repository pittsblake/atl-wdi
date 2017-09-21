/* PACKAGES */
const express          = require('express');
const hbs              = require('hbs');
const app              = express();
const bodyParser       = require('body-parser');
const methodOverride   = require('method-override');

//USING METHOD-OVERRIDE
app.use(methodOverride('_method'));
//USING BODY PARSER
app.use(bodyParser.urlencoded({
    extended: true
}));



/* ALLOWS US TO ACCESS THE CONTROLLERS FILE*/
const todontsController = require('./controllers/todonts.js');

/* DIRECTS US TO THE CONTROLLER DEPENDING ON THE PATH */
app.use('/todonts', todontsController);


/* THE VIEW ENGINE WE'RE USING */
app.set('view engine', 'hbs');

/* HOME PAGE */
app.get('/', (req, res) => {
    res.send("THIS IS THE HOMEPAGE");
});



// START SERVER
const PORT = 3000;
app.listen(PORT, () => {
    console.log("=======================");
    console.log("LISTENING ON PORT", 3000);
    console.log("=======================");
});