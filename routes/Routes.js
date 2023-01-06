const express = require("express");
const router = express.Router();
const userController = require('../controllers/UserController');
const pickController = require('../controllers/PicksController');
const middleware = require('../middleware');


router.get('/', (req, res) => {
    res.send('Root page route functional')
});

// Users 

router.get('/users', userController.getUsers);
router.post('/users/new', userController.createUser);

// Picks

router.get('/picks', pickController.getPicks);
router.post('/picks/new', pickController.createPick);

//Login and Register 

router.post('/signin', userController.Login)
router.post('/register', userController.Register)
router.post(
    '/',
    middleware.stripToken,
    middleware.verifyToken,
    userController.createUser
)

//Session Routes

router.get(
    '/session',
    middleware.stripToken,
    middleware.verifyToken,
    userController.CheckSession
)


module.exports = router;