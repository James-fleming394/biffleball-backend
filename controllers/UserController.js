const User = require('../models/User');
const middleware = require('../middleware');

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

// Login and Register 

const Login = async (req, res) => {
    try {
        const user = await User.findOne({
        where: { email: req.body.email },
        raw: true
        })
        console.log(user)
        console.log(req.body.password)
        if (user && middleware.comparePassword(user.password, req.body.password)) {
        let payload = {
            id: user.id,
            email: user.email
        }
        let token = middleware.createToken(payload)
        return res.send({ user: payload, token })
        }
        res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
    } catch (error) {
        res.status(500).send({ status: 'Error', msg: error.message })
    }
}

const Register = async (req, res) => {
    try {
        const { username, email, password } = req.body
        let passwordScramble = await middleware.hashPassword(password)
        const user = await User.create({
        firstName,
        lastName,
        userName,
        email,
        password: passwordScramble,
        address
        })
        res.send(user)
    } catch (error) {
        res.status(500).send({ status: 'Error', msg: error.message })
    }
}

const CheckSession = async (req, res) => {
    console.log(res.locals)
    const { payload } = res.locals
    res.send(payload)
}

module.exports = {
    getUsers,
    createUser,
    Login,
    Register,
    CheckSession
}