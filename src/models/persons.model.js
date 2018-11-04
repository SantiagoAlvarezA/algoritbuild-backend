const mongoose = require('mongoose');
const { Schema } = mongoose;

const shemaPersons = new Schema({
    document: { type: String, required: true },
    name: { type: String, required: true },
    typePersonId: { type: String, required: true },
    semesterId: { type: String, required: false },
});

module.exports = mongoose.model('persons', shemaPersons);