const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    email: String,
    password: String,
    birthday: Date,
    tarriff: String,
    payCardNumber: String,
    payCardDate: String,
    payCardBackNumber: String
});

module.exports = mongoose.model('Login', LoginSchema);