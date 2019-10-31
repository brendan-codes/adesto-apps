let mongoose = require('mongoose');
let Donut = mongoose.model('Donut');

module.exports = {

    index: function(req,res){
        Donut.find({})
        .then(data => res.json(data))
        .catch(errs => res.json(errs))
    },
    getOne: function(req,res){

    },
    delete: function(req,res){},
    update: function(req,res){},
    create: function(req,res){}

}