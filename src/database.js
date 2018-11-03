const mongoose = require('mongoose');

const URI = 'mongodb://localhost/algoritbuild-db';

mongoose.connect(URI)
    .then(db => console.log('bd is connect now'))
    .catch(err => console.error('failed the connection' + err));

module.exports = mongoose;