const express = require('express');
const router = express.Router();
const ctrlbooks = require('../controllers/books'); 
const ctrlOthers = require('../controllers/others');

/* Home page*/
router.get('/', ctrlbooks.homepage);
/* Registration page*/
router.get('/registration', ctrlbooks.registration);
/* login page*/
router.get('/login', ctrlbooks.login);

module.exports = router;