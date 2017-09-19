const express = require ('express');
const app = express();
const hbs = require('hbs');
const toppingsController = require('./controller/toppings.js');
const orderController = require('./controller/order.js');
const indexController = require('./controller/index.js');

app.set("view engine", "hbs");
app.set('views', './views');

app.use('/toppings', toppingsController);
app.use('/order', orderController);
app.use('/', indexController);
app.use(express.static(__dirname + "/public"));

const PORT = 3002;
app.listen(PORT, () => {
    console.log("==================================");
    console.log("Express is listening on port", PORT);
    console.log('==================================');
});