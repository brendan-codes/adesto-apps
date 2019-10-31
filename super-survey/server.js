// requires, global variables, etc
const express        = require('express'),
      path           = require('path'),
      bodyParser     = require('body-parser'),
      mongoose       = require('mongoose'),
      Schema         = mongoose.Schema,
      PORT           = 8020;

// create express instance
let app = express();

// check body for post data
app.use(bodyParser.urlencoded({extended: false}));

// express static routes
app.use(express.static(path.join(__dirname, './static')));

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './server/views'));


require('./server/config/database');
require('./server/config/routes')(app);


let server = app.listen(PORT, function(){
    console.log(`We are doing survey on Port ${PORT}`);
})
