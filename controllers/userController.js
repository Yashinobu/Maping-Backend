const User = require('../models/User');

// Get all users
const getUsers = async (req, res) => {
    try {
        // const users = await User.find();
        res.status(200).json({ user: "my name is okay" });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Create a new user
const createUser = async (req, res) => {
    const { name, email } = req.body;

    try {
        const user = new User({ name, email });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { getUsers, createUser };
