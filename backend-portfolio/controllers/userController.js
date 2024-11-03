let User = require('../models/user'); 

exports.getAllUsers = async (req, res) => {
    try {
        let users = await User.find(); 
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        let user = await User.findById(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addUser = async (req, res) => {
    let user = new User(req.body);
    try {
        let newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        let user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        let user = await User.findByIdAndDelete(req.params.id);
        if (user) {
            res.json({ message: 'User deleted' });
        } else {
            res.status(404).json({ message: 'not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
