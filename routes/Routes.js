const express = require("express");
const router = express.Router();
const userController = require('../controllers/UserController');
const pickController = require('../controllers/PicksController');


router.get('/', (req, res) => {
    res.send('Root page route functional')
});

// Users 

router.get('/users', userController.getUsers);
router.post('/users/new', userController.createUser);

// Picks

router.get('/picks', pickController.getPicks);
router.post('/picks/new', pickController.createPick);


module.exports = router;