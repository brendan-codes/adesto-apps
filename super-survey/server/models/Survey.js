let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let surveySchema = new Schema({
    name: String,
    email: String,
    age: Number
});

let Survey = mongoose.model('Survey', surveySchema);