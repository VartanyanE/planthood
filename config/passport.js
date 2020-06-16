var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var User = require("../models/user");

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(
  "local.signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    function (req, email, password, done) {
      User.findOne({ email: email }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (user) {
          return done(null, false, { message: "Email is already in use" });
        }
        var newUser = new User();
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);
        newUser.save(function (err, result) {
          if (err) {
            return done(err);
          }
          return done(null, newUser);
        });
      });
    }
  )
);


passport.use(
  "local.login",
  new LocalStrategy(
    // Our user will sign in using an email, rather than a "username"
    {
      usernameField: "user_id",
      passwordField: "password"
    },
    (email, password, done) => {
      // When a user tries to sign in this code runs
      console.log("logging in...")
      console.log(email,password)
     User.findOne({user_id: email}).populate("plants").then(dbUser => {
        // If there's no user with the given email
        console.log(dbUser)
        if (!dbUser) {
          console.log('incorrect email')
          return done(null, false, {
            message: "Incorrect email."
          });
        }
        // If there is a user with the given email, but the password the user gives us is incorrect
        else if (!dbUser.validPassword(password)) {
          console.log('invalid pw')
          return done(null, false, {
            message: "Incorrect password."
          });
        }
        // If none of the above, return the user
        return done(null, dbUser);
      }).catch(err=>console.log(err))
    }
  )
);


// Exporting our configured passport
module.exports = passport;