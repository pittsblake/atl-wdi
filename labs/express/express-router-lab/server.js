const express = require('express');
const app = express();
const hbs = require('hbs');
const mathController = require('./controller/math.js');

app.set('view engine', 'hbs');
app.set('views', './views');
app.use('math', mathController);


app.get('/greeting/:name', (req, res) => {
    res.render('greeting', {
        saying: `${req.query.greeting} ${req.params.name}, good boy.`
    })
});

app.get('/reverse', (req, res) => {
    res.render('reversed', {
        word: `${req.query.word.split("").reverse().join("")}`
    })
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log("=============================");
    console.log("Express is listening on", PORT);
    console.log("=============================");
});

