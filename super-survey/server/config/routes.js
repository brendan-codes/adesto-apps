let surveys = require('./../controllers/surveys');


module.exports = function(app){

    // routes
    app.get("/", surveys.index);
    app.get("/survey/:id", surveys.findOne);
    app.get('/survey/new', surveys.showCreate);
    app.get('/survey/:id/edit', surveys.showEdit);
    app.post("/survey/", surveys.create);
    app.post("/survey/:id/edit", surveys.update);
    app.post("/survey/:id/delete", surveys.delete);



};