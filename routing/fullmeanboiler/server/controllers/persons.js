let mongoose = require('mongoose');
let Person = mongoose.model('Person');

module.exports = {

    index: function(req,res){
        Person.find({})
        .then(data => res.json(data))
        .catch(errs => res.json(errs))
    },
    getOne: function(req,res){

    },
    delete: function(req,res){},
    update: function(req,res){},
    create: function(req,res){}

}