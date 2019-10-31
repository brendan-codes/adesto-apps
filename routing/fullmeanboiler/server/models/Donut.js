let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let DonutSchema = new Schema({
    name: String,
    flavor: String,
    glaze: Boolean
});

// let mongoose = require('mongoose');
let Donut = mongoose.model('Donut', DonutSchema);