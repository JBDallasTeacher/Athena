//DEPENDECIES
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const morgan = require("morgan");
const app = express();
const users = require("./routes/api/users");

//PORT
const PORT= process.env.PORT || 8080;

//MIDLEWARE MORGAN
app.use(morgan('dev'));
//app.use(cookieParser());

//MIDLEWARE - USING EXPRESS INSTEAD OF BODYPARSER
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//MONGOOSE CONECTION
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/athenadb',{ useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));


//USE STATIC FOLDER WHILE IN HEROKU
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

//CIRCULAR DEPENDENCIES
app.use("/api/users", users);

//INITIZLIZE PASSPORT
app.use(passport.initialize());
require("./config/passport")(passport);


//INITIALIZE APP
app.listen(PORT, () => console.log(`Server up and running on port ${PORT} !`));




// DB Config
//const db = require("./config/keys").mongoURI;

