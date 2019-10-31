let mongoose = require('mongoose');
let Survey = mongoose.model('Survey');

module.exports = {
    index: function(req, res){
        Survey.find({})
            .then(data => {
                res.render('index', {surveys: data});
            })
            .catch(err => {
                console.log(err);
                res.render('index');
            })
    },
    findOne: function(req, res){
        Survey.findOne({_id: req.params.id})
            .then(data => {
                res.render('new');
            })
            .catch(err => {
                res.render('new');
            })
    },
    showCreate: function(req, res){
        res.render('new');
    },
    showEdit: function(req, res){
        Survey.findOne({_id: req.params.id})
            .then(data => {
                res.render('edit', {survey: data})
            })
            .catch(err => {
                res.redirect('/');
            })
    },
    create: function(req, res){
        Survey.create(req.body)
            .then(data => {
                console.log(data);
                res.redirect('/');
            })
            .catch(err => {
                console.log(err);
                res.redirect('/');
            })
    },
    update: function(req, res){
        Survey.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true})
            .then(function(data){
                res.redirect('/');
            })
            .catch(function(err){
                res.redirect('/');
            })
    },
    delete: function(req, res){
        Survey.findByIdAndDelete({_id: req.params.id})
            .then(function(data){
                res.redirect('/');
            })
            .catch(function(err){
                res.redirect('/');
            })
    },


    //
}