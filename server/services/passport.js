const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const { UserModel } = require('../models');
const config = require('../../config.js');
const LocalStrategy = require('passport-local');

const localLogin = new LocalStrategy({ usernameField: 'email' }, function(email, password, done) {
  UserModel.findOne({ email: email }, function(err, user) {
    if (err) { return done(err) }
    if (!user) { return done(null, false) }

    user.comparePassword(password, function(err, match) {
      if (err) { return done(err) }
      if (!match) { return done(null, false) }
      return done(null, user);
    })

  })
});

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, function(decodedToken, done) {
  UserModel.findById(decodedToken.sub, function(err, user) {
    if (err) { return done(err, false) };

    if (user) {
      done(null, user);
    } else {
      done(null, false)
    }
  })
})

passport.use(jwtLogin);
passport.use(localLogin);