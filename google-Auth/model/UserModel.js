let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({

});

let User = mongoose.model('googleUser', userSchema);
module.exports = User;