let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let PersonSchema = new Schema({
    name: String,
    age: Number
});

// let mongoose = require('mongoose');
let Person = mongoose.model('Person', PersonSchema);

// let x = new Person({name: "brendan", age: 100});
// let y = new Person({name: "jeff", age: 100});
// let z = new Person({name: "kadie", age: 100});
// let k = new Person({name: "jan", age: 100});

// x.save();
// y.save();
// z.save();
// k.save();