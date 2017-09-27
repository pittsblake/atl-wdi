//======================
// REQUIREMENTS
//======================
// require express, mongoose, body-parser, method-override
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const hbs = require("hbs");
const logger = require('morgan');


//======================
// MIDDLEWARE
//======================
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.set("view engine", "hbs");
app.set('views', './views');

app.use(express.static(__dirname + 'public'));
app.use( logger('dev'));


//app.get('/', (req, res) => {
  //  res.redirect('/donuts')
//})

//======================
// CONTROLLERS
//======================
//for seed file, seed the database
var seedController = require('./controllers/seeds.js');
app.use('/seed', seedController);

//for root directory, show all donuts
var donutsController = require('./controllers/donuts.js');
app.use('/', donutsController);


//======================
// LISTENERS
//======================
//CONNECT MONGOOSE TO "donut_store"
mongoose.connect('mongodb://localhost/donut_store');

//CREATE THE MONGOOSE CONNECTION and SET APP TO LISTEN to 3000
const db = mongoose.connection;

db.on('error', (err) => {
    console.log(err);
})

db.once('open', () => {
    console.log("database hase been connected!");
}) 

const PORT = 3000;
app.listen(PORT, () => {
    console.log("=======================");
    console.log("Listening on port", PORT);
    console.log("=======================");    
})

app.use