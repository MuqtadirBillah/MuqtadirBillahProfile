const mongoose = require('mongoose');
const { Schema } = mongoose;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: true,
      validate: [validateEmail, 'Please fill a valid email address'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
      type: String,
      required: [true, 'Please enter a password!'],
      min: [6, "Please Enter at least 6 characters in Password"]
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    role: {
        type: String,
        default: 'user'
    },
    creation_date: {
      type: String
    },
    updation_date: {
      type: String
    },
    isActive: {
      type: String,
      default: 'true'
    },
    pin: {
        type: Number
    }
})

module.exports = mongoose.model('User', userSchema);