// Create web server 

// require dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// set up express app
var app = express();
var PORT = process.env.PORT || 8080;

// set up express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set up routes
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// listen for server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});