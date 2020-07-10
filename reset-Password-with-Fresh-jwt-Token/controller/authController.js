let jwt = require('jsonwebtoken');
let { promisify } = require('util');
let crypto = require('crypto');
let AppError = require('./../util/appError');
let catchAsync = require('./../util/catchAsync');
let sendEmail = require('./../util/email');
let User = require('./../model/userModel');

let getToken = id => {
  return jwt.sign(
    { id }, 
    process.env.JWT_SECRET, 
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
}

let createSendToken = (model, statusCode, res) => {
  let token = getToken(model._id);
  res.status(statusCode).json({
    status: 'ok',
    token: token,
    data: {
      model
    }
  });
}

exports.protect = catchAsync(async (req, res, next) => {
  let token, reqHeader = req.headers.authorization;
  if (reqHeader && reqHeader.startsWith('Bearer')) {
    token = reqHeader.split(' ')[1];
  }
  if (!token) {
    return next(new AppError(
      'You are not logged in! Please log in to get access', 
      401
    ));
  }
  let decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  let currentuser = await User.findById(decoded.id);
  if (!currentuser) {
    return next(new AppError(
        'The user belonging to this token does no longer exist', 
        401
    ));
  }
  if (currentuser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError('User recently changed password! Please login again', 401)
    )
  }
  req.user = currentuser;
  next();
});

exports.signUp = catchAsync(async (req, res, next) => {
  let createUser = await User.create(req.body);
  try {
    await sendEmail({
      email: createUser.email,
      subject: 'Sign-Up Notification',
      message: `Welcome to join us, ${createUser.username}!!!`
    });
    createUser.password = undefined;
    createSendToken(createUser, 201, res);
  } catch (error) {
    return next(new AppError(
        'Somthing problem here!!!',
        500
    ));
  }
});

exports.logIn = catchAsync(async (req, res, next) => {
  let { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError(
      'provide email and password',
      400
    ));
  }
  let user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.comparePassword(password, user.password))) {
    return next(new AppError(
      'Incorrect email or password',
      401
    ));
  }
  try {
    await sendEmail({
      email: user.email,
      subject: 'LogIn Notification',
      message: `Login successful, ${user.username}!!!`
    });
    user.password = undefined;
    createSendToken(user, 200, res);
  } catch (error) {
    return next(new AppError(
      'Somthing problem here!!!',
      500
  ));
  }
});

exports.forgotPassword = catchAsync(async (req, res, next) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError(
      'There is no user with this email address',
      404
    ));
  }
  let resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });
  let resetURL = `${req.protocol}://${req.get(
    'host'
  )}/api/user/resetPassword/${resetToken}`;

  let message = `Forget your password ? Submit a Patch request with your new password and passwordConfirm 
  to: ${resetURL}.\nIf you didn't forget your password, please ignore this email !!!`;

  try {
    await sendEmail({
      email: user.email,
      subject: 'Your password reset token (valid for 10 minutes)',
      message
    });
    res.status(200).json({
      status: 'ok',
      message: 'Token send to your email!'
    });
  } catch (error) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });
    return next(
      new AppError(
        'There was an error sending the email. Try again later !!!',
        500
      )
    )
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  let hashedToken =crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');
  let user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() }
  });
  if (!user) {
    return next(new AppError(
        'Token is invalid or has expired', 
        400
    ));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  createSendToken(user, 200, res);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  let user = await User.findById(req.user.id).select('+password');
  console.log(user);

  if (!(await user.comparePassword( req.body.passwordCurrent, user.password ))) {
    return next(new AppError(
      'Your current password is wrong',
      401
    ));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();
  user.password = undefined;
  createSendToken(user, 200, res);
});