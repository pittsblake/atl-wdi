const express = require ('express');
const app = express();
const hbs = require('hbs');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


// PIRATE CONTROLLER //
const pirateController = require('./controllers/pirates.js');
app.use('/pirates', pirateController);

app.set("view engine", "hbs");
app.set('views', './views');







const PORT = 3000;
app.listen(PORT, () => {
    console.log("=======================");
    console.log("LISTENING ON PORT", PORT);
    console.log("=======================");
});