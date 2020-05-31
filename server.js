const express = require("express");
var compression = require("compression");
var flash = require("connect-flash");
const session = require('express-session')
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

const passport = require('passport');
require('./config/passport');


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// We need to use sessions to keep track of our user's login status

app.use(
    session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(compression());


// Add routes, both API and view
app.use(routes);
require("./routes/api/index.js")(app);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/planthood");

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
