const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const toDoSchema = new mongoose.Schema({
  title: String,
  description: String
});

const ToDoModel = mongoose.model('ToDo', toDoSchema);

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: String
});

userSchema.pre('save', function(next) {
  const user = this;

  bcrypt.genSalt(10, function(err, salt) {
    if (err) { return next(err) };

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) { return next(err) };
      user.password = hash;
      next();
    })
  })
})

userSchema.methods.comparePassword = function(suppliedPassword, callBack) {
  bcrypt.compare(suppliedPassword, this.password, function(err, match) {
    if (err) { return callBack(err) }
    callBack(null, match);
  })
}

const UserModel = mongoose.model('User', userSchema);

module.exports.ToDoModel = ToDoModel;
module.exports.UserModel = UserModel;