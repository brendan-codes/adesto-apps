let mongoose = require('mongoose');
let Product = mongoose.model('Product');

module.exports = {
    index: function(req, res){
        Product.find()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    create: function(req, res){
        Product.create(req.body)
            .then(data => res.json({message: 'success', data: data}))
            .catch(err => res.json({message: 'fail', err: err}))
    },
    findById: function(req, res){
        Product.findOne({_id: req.params._id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    update: function(req, res){
        Product.findOneAndUpdate({_id: req.params._id}, req.body, {runValidators: true, new: true})
            .then(data => res.json({message: 'success', data: data}))
            .catch(err => res.json({message: 'fail', err: err}))
    },
    delete: function(req, res){
        Product.remove({_id: req.params._id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}