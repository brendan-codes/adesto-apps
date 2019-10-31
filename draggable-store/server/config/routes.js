// require controllers
let products = require('./../controllers/products');

module.exports = function(app){
    app.get('/api/products', products.index);
    app.post('/api/products', products.create);
    app.get('/api/products/:_id', products.findById);
    app.put('/api/products/:_id', products.update);
    app.delete('/api/products/:_id', products.delete);
};