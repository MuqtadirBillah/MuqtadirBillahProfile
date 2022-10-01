const mongoose = require('mongoose');
const { Schema } = mongoose;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const messageSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: true,
      validate: [validateEmail, 'Please fill a valid email address'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    name: {
        type: String
    },
    phone: {
        type: String
    },
    message: {
        type: String
    },
    creation_date: {
      type: String
    }
})

module.exports = mongoose.model('Message', messageSchema);