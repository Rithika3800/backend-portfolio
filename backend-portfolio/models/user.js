let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name: String,
    email:String,
    password: String,
    created: Date,
    updated: Date
});

module.exports = mongoose.model('User', userSchema);
