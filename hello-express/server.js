const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send("hello wdi12");
})

app.get('/greeting', (req, res) => {
    res.send("Hey! WDI12!!");
})

app.get('/:name', (req, res) => {
    console.log(req.params);
    res.send(`Hello, ${req.params.name}`);
})


app.get('/food/:food', (req, res) => {
    console.log(req.params);
    res.send(`Wow, ${req.params.food} is great`);
})

app.get('/rihanna', (req, res) => {
    res.send("work work work work");
})

app.get('/math/add', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    res.send(`${num1} + ${num2}`);
})

app.get('/math:operator', (req, res) => {
    const num1 = req.query.num1;
    const num2 = req.query.num2;
    if(req.params.operator === "add"){
        res.send(`${num1} + ${num2}`);
    } else if (req.params.operator === "subtract"){
        res.send(`${num1} - ${num2}`);
    }c
})


const PORT = 3000;

app.listen(PORT, () => {
    console.log("Express is listening on port", PORT);
});


