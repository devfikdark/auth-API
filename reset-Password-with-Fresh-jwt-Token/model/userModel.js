let crypto = require('crypto');
let mongoose = require('mongoose');
let bcrypt = require('bcryptjs');
const { use } = require('../router/userRouter');

let userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'please provide your email'],
    unique: true,
    lowercase: true
  },
  username: String,
  phone: {
    type: Number,
    required: [true, 'please provide your phone number']
  },
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
        return el === this.password
      },
      message: 'password are not the same!!'
    }
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date
});

/*****Document middleware*****/
// get User from email
userSchema.pre('save', function(next) {
  this.username = this.email.match(/^([^@]*)@/)[1];
  next();
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre('save', function(next) {
  if (!this.isModified('password') || this.isNew) 
    return next();
  this.passwordChangedAt = Date.now() - 1000;
  next();
});

// function
userSchema.methods.comparePassword = async function(
  candidatePass, userPass) {
  return await bcrypt.compare(candidatePass, userPass);
}

userSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
  if (this.passwordChangedAt) {
    let changedTimesTamp = parseInt(
      this.passwordChangedAt.getTime() / 1000, 
      10
    );
    return JWTTimestamp < changedTimesTamp;
  }
  return false;
}

userSchema.methods.createPasswordResetToken = function() {
  let resetToken = crypto.randomBytes(32).toString('hex');
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  this.passwordResetExpires = Date.now() + (10 * 60 * 1000);
  return resetToken;
}

let User = mongoose.model('User', userSchema);
module.exports = User;
