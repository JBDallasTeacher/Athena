var express = require ("express");
const mongoose = require ("mongoose");



var app = express();

//const routes = require ("./routes")
const db = require('./config/keys').MongoURI;

// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true})
.then(() => console.log('MongoDB Connected ..'))
.catch(err => console.log(err));




const PORT = process.env.PORT || 8080;//HEROKU, LOCAL HOST

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  }
  
  //CIRCULAR DEPENDENCY TO USE ROUTES
  //app.use(routes);
  app.use('/', require('./routes/index'));
  app.use('/users', require('./routes/users'));
  
  //INITIALIZE APP
  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });