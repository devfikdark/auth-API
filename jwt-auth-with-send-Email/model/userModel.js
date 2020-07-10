let mongoose = require('mongoose');
let bcrypt = require('bcryptjs');

let userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'please provide your email'],
    lowercase: true,
    unique: true
  },
  username: String,
  password: {
    type: String,
    required: [true, 'please provide your password'],
    minlength: 8,
    select: false
  },
  passwordConfirm: {
    type: String,
    required: [true, 'please confirm your password'],
    validate: {
      validator: function(el) {
        return el === this.password;
      },
      message: 'password are not the same!!!'
    }
  },
  phone: {
    type: String,
    required: [true, 'please provide your phone number'],
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
});

/*****Document middleware*****/
// get User from email
userSchema.pre('save', function(next) {
  this.username = this.email.match(/^([^@]*)@/)[1];
  next();
});

// hash passsword

userSchema.pre('save', async function(next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();
  
  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.comparePassword = async function(
  candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
}

let User = mongoose.model('User', userSchema);

module.exports = User;