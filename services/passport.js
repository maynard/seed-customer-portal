const passport = require('passport'); 
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose');
const keys = require('../config/keys.js');
 
const User = mongoose.model('users');


// Use mongo ID to serialize for token
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

// Implement the google oAuth Strategy
passport.use(new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    }, 
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId : profile.id })  
        .then((existingUser) => {
            if(existingUser) {
                // We already have a record with this id
                done(null, existingUser);
            } else {
              // We don't have a record with this ID
              new User({ googleId: profile.id })
                .save()
                .then(user => done(null, user));  
            }
        })
      

      //console.log('access Token', accessToken);
      //console.log('refresh token', refreshToken);
      //console.log('Profile', profile);
    }
  )
);
