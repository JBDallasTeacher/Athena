const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();
const Port = process.env.PORT || 5000;

//MIDLEWARE MORGAN
app.use(morgan('dev'));
//app.use(cookieParser());

//routing
//const users = require("./routes/api/users");

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.use("/api/users", users);


// DB Config
//const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose.connect(
    process.env.MONGO_URI || 'mongodb://localhost/athenadb',
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Passport config
require("./config/passport")(passport);


app.listen(port, () => console.log(`Server up and running on port ${port} !`));