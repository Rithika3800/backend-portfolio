let Contact = require('../models/contact'); 

exports.getAllContacts = async (req, res) => {
    try 
    {
        let contacts = await Contact.find();
        res.json(contacts);
    } catch (error) 
    {
        res.status(500).json({ message: error.message });
    }
};


exports.addContact = async (req, res) => 
    {
    let contact = new Contact(req.body);
    try 
    {
        let newContact = await contact.save();
        res.status(201).json(newContact);
    } catch (error)
     {
        res.status(400).json({ message: error.message });
    }
};

exports.updateContact = async (req, res) => {
    try {
        let contact = await Contact.findByIdAndUpdate(req.params.id, req.body);
        if (contact) {
            res.json(contact);
        } else {
            res.status(404).json({ message: 'not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteContact = async (req, res) => {
    try {
        let contact = await Contact.findByIdAndDelete(req.params.id);
        if (contact) {
            res.json({ message: 'Contact are deleted' });
        } else {
            res.status(404).json({ message: 'not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getContactById = async (req, res) => {
    try 
    {
        let contact = await Contact.findById(req.params.id);
        if (contact)
             {
            res.json(contact);
        } else
         {
            res.status(404).json({ message: 'not found' });
        }
    } catch (error) 
    {
        res.status(500).json({ message: error.message });
    }
};