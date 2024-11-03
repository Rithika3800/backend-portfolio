let express = require('express');
let router = express.Router();
let User = require('../models/user'); 

// Get all users
router.get('/', async (req, res) => {
    try {
        let users = await User.find(); 
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a user by ID
router.get('/:id', async (req, res) => {
    try {
        let user = await User.findById(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new user
router.post('/', async (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        created: new Date(), // Set the created date
        updated: new Date()  // Set the updated date
    });

    try {
        let savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update an existing user
router.put('/:id', async (req, res) => {
    try {
        let user = await User.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            updated: new Date() // Update the updated date
        }, { new: true });

        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a user
router.delete('/:id', async (req, res) => {
    try {
        let user = await User.findByIdAndDelete(req.params.id);
        if (user) {
            res.json({ message: 'User deleted' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
