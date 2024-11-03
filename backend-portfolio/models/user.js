let mongoose = require('mongoose');

let userS = new mongoose.Schema({
    name:  String ,
    email: String ,
    password: String ,
    created: Date,
    updated: Date,
});

module.exports = mongoose.model('User', userS);
