var express = require('express');
var app = express();
var apiController = require('./controllers/apiController');

var port = process.env.PORT || 3050;

apiController(app);

app.listen(port);