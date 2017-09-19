const express = require ('express');
const app = express();
const hbs = require('hbs');

app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('Welcome to Pizza Express');
});

app.get('/topping/:type', (req, res) => {  
    res.send(`${req.params.type} pizza!`);
});

app.get('/order/:amount/:size', (req, res) => {
    res.send(`${req.params.amount} and ${req.params.size} on it's way!`);
});



const PORT = 3002;
app.listen(PORT, () => {
    console.log("==================================");
    console.log("Express is listening on port", PORT);
    console.log('==================================');
});