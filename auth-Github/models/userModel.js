let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: [true, 'please provide your googleId']
  },
  name: {
    type: String,
    required: [true, 'please provide your name']
  },
  email: {
    type: String,
    required: [true, 'please provide your email']
  },
  profilePhoto: {
    type: String,
    required: [true, 'please provide your profilePhoto']
  },
  createAt: Date
});

let User = mongoose.model('facebookUser', userSchema);
module.exports = User;