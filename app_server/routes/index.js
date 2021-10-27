const express = require('express');
const router = express.Router();
const ctrlbooks = require('../controllers/books'); 
const ctrlLoginAndRegistration = require('../controllers/LoginAndRegistration');

/* Home page*/
router.get('/', ctrlbooks.homepage);
/* Registration page*/
router.get('/registration', ctrlLoginAndRegistration.registration);
/* login page*/
router.get('/login', ctrlLoginAndRegistration.login);

module.exports = router;