
const jwt = require('jwt-simple');
const config = require('../../config.js')
const { UserModel } = require('../models');

function generateToken(user) {
  const timeStamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timeStamp }, config.secret)
}

//req.user is from the done callback in localogin passport strategy
const login = (req, res, next) => {
  res.send({ token: generateToken(req.user)})
}

const signUp = (req, res, next) => {
  let password = req.body.password;
  let email = req.body.email;

  if (!email || !password) {
    res.status(422).send({ error: 'Missing email or password'})
  }

  UserModel.findOne({ email: email}, function(err, existingUser) {
    if (err) { return next(err) };

    if (existingUser) {
      res.status(422).send({ error: 'Email is in use'})
    }

    const user = new UserModel({
      email: email,
      password: password
    })

    user.save(function(err) {
      if (err) { return next(err)}

      res.json({ token: generateToken(user) })
    })
  })
}

module.exports.login = login;
module.exports.signUp = signUp;