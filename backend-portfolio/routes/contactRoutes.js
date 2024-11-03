let express = require('express');
let router = express.Router();
let Contact = require('../models/contact'); 

router.get('/', async (req, res) => {
    try {
        let contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        let contact = await Contact.findById(req.params.id);
        if (!contact) return res.status(404).json({ message: 'not found' });
        res.json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!contact) return res.status(404).json({ message: 'not found' });
        res.json(contact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    let contact = new Contact({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
    });

    try {
        let savedContact = await contact.save();
        res.status(201).json(savedContact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if (!contact) return res.status(404).json({ message: 'not found' });
        res.json({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
