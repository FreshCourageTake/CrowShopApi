const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    cors = require('cors'),
    List = require('./models/list-model'), //created model loading here
    Store = require('./models/store-model'),
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/crowdshopdb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(cors());

//register the routes
require('./routes/list-routes')(app);
require('./routes/store-routes')(app);

app.listen(port);

console.log('CrowdShop RESTful API server started on: ' + port);