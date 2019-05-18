<<<<<<< HEAD
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
=======
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
>>>>>>> master
