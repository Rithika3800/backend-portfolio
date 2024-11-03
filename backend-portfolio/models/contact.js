let mongoose = require('mongoose');

let contactSchema = new mongoose.Schema(
    {
    firstname: String,
    lastname: String,
    email:String
});

let Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
