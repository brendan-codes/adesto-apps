let persons = require('./../controllers/persons');
let donuts = require('./../controllers/donuts');

let path = require('path');

module.exports = function(app){

    app.get('/persons', persons.index);
    app.get('/persons/:id', persons.getOne);
    app.post('/persons', persons.create);
    app.put('/persons/:id', persons.update);
    app.delete('/persons/:id', persons.delete);

    app.get('/donuts', donuts.index);




    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve('./client/dist/client/index.html'));
    });
};