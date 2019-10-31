const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

let app = express();
const PORT = 8010;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client/dist/client')));

require('./server/config/mongoose');
require('./server/config/routes')(app);



app.listen(PORT, function(){
    console.log(`new app on ${PORT}`);
})