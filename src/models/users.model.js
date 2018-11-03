const mongoose = require('mongoose');
const { Schema } = mongoose;

const shemaUsers = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model('users', shemaUsers);