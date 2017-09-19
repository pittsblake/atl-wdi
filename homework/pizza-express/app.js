const express = require ('express');
const app = express();
const hbs = require('hbs');

app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'));



const PORT = 3002;
app.listen(PORT, () => {
    console.log("==================================");
    console.log("Express is listening on port", PORT);
    console.log('==================================');
});