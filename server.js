var express = require("express");
const mongoose = require("mongoose");
var app = express();

//var stormpath = require('express-stormpath');
var bodyParser = require('body-parser');
//const routes = require ("./routes")

const PORT = process.env.PORT || 8080;//HEROKU, LOCAL HOST

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

//CIRCULAR DEPENDENCY TO USE ROUTES
//app.use(routes);


//INITIALIZE APP
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});