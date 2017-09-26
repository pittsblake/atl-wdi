//requirements: require mongoose
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;
//create your donut schema:
const DonutSchema = new Schema({
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number
});

const DonutModel = mongoose.model('Donuts', DonutSchema);
//export your donut with module.exports()
module.exports = {
    DonutModel: DonutModel
}