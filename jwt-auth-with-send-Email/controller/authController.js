let { promisify } = require('util');
let jwt = require('jsonwebtoken');
let catchAsync = require('./../util/catchAsync');
let AppError = require('./../util/appError');
let sendEmail = require('./../util/email');
let User = require('./../model/userModel');

// Make JWT token
let createToken = id => {
  return jwt.sign(
    { id }, 
    process.env.JWT_SECRET, 
    { 
      expiresIn: process.env.JWT_EXPIRES_IN 
    }
  );
};

let createSendToken = (user, statusCode, res) => {
  let myToken = createToken(user._id);
  res.status(statusCode).json({
    status: "ok",
    token: myToken,
    data: {
      user
    }
  });
};

exports.signUp = catchAsync(async (req, res, next) => {

  let createUser = await User.create({
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    phone: req.body.phone,
    role: req.body.role
  });
  
  try {
    // Email data pass to email.js
    await sendEmail({
      email: createUser.email,
      subject: 'Sign-Up Notification',
      message: `Welcome to join us, ${createUser.username}!!!`
    });
    
    // response data
    createUser.password = undefined; // hide pass from response
    createSendToken(createUser, 201, res);
  } catch (error) {
    return next(
      new AppError(
        'Somthing problem here!!!',
        500
      )
    );
  }
});

exports.logIn = catchAsync(async (req, res, next) => {
  let { email, password } = req.body;

  // Check email and password exist
  if (!email || !password) { 
    return next(
      new AppError(
        'provide email and password',
        400
      )
    );
  }

  // Check if user exists & password is correct
  let user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.comparePassword(password, user.password))) {
    return next(
      new AppError(
        'Incorrect email or password',
        401
      )
    );
  }
  
  try {
    // Email data pass to email.js
    await sendEmail({
      email: user.email,
      subject: 'LogIn Notification',
      message: `Login successful, ${user.username}!!!`
    });

    // response data
    user.password = undefined; // hide pass from response
    createSendToken(user, 200, res);
  } catch (error) {
    return next(
      new AppError(
        'Somthing problem here!!!',
        500
      )
    );
  }
});

exports.getAllUser = catchAsync(async (req, res, next) => {
  let users = await User.find();
  
  res.status(200).json({
    success: 'ok',
    length: users.length,
    data: {
      users
    }
  });
});

// Restrict user route
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      next(
        new AppError(
        'You do not have permission to perform this action', 
          403
        )
      )
    }
    next();
  }
}

// Get current user Info from JWT token
exports.protect = catchAsync(async (req, res, next) => {
  // Getting token and check of it's there
  let token, reqHeader = req.headers.authorization;

  if (reqHeader && reqHeader.startsWith('Bearer')) {
    token = reqHeader.split(' ')[1];
  }
  console.log(token);
  if (!token) {
    next(
      new AppError(
        'You are not logged in! Please log in to get access', 
        401
      )
    );
  }

  // Verification token
  let decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  let currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    next(
      new AppError(
        'User recently changed password! Please login again', 
        401
      )
    );
  }
  // assign current user data on (req.user)
  req.user = currentUser;
  next();
});