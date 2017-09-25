const express = require('express');
const mongoose = require('mongoose');
const hbs = require('hbs');
const app = express();

mongoose.connect('mongodb://localhost/students');

app.set('view engine', 'hbs');

const db = mongoose.connection;

db.on('error', function (err) {
    console.log(err);
});

// Will log "database has been connected" if it successfully connects.
db.once('open', function () {
    console.log("database has been connected!");
});

const studentsController = require('./controllers/students_controller');

app.use('/students', studentsController);



const PORT = 3000;
app.listen(PORT, () => {
    console.log('==================================');
    console.log('Express is listening on port', PORT);
    console.log('==================================');    
})


app.use