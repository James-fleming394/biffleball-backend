const User = require('../models/User');

//User 

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.send(users)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const createUser = async (req, res) => {
    try {
        const users = await User.create(req.body)
        res.send(users);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getUsers,
    createUser
}