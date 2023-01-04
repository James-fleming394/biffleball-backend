const express = require("express");
const router = express.Router();
const userController = require('../controllers/UserController')


router.get('/', (req, res) => {
    res.send('Root page route functional')
});

// Users 

router.get('/users', userController.getUsers);
router.post('/users/new', userController.createUser);

module.exports = router;