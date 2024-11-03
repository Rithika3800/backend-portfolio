let mongoose = require('mongoose');

let contactS = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email:String,
});

module.exports = mongoose.model('Contact', contactS);
