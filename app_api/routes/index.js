const express = require('express');
const router = express.Router();
const ctrlbooks = require('../controllers/books'); 
const ctrlLoginAndRegistration = require('../controllers/registration');

// books
router
  .route('/books')
  .get(ctrlbooks.booksList)
  .post(ctrlbooks.booksCreate);

router
  .route('/books/:bookid')
  .get(ctrlbooks.booksReadOne)
  .put(ctrlbooks.booksUpdateOne)
  .delete(ctrlbooks.booksDeleteOne);
  
// registration
router
  .route('/registration')
  .get(ctrlLoginAndRegistration.accountsList)
  .post(ctrlLoginAndRegistration.accountsCreate);

router
  .route('/registration/:registrationid')
  .get(ctrlLoginAndRegistration.accountsReadOne)
  .put(ctrlLoginAndRegistration.accountsUpdateOne)
  .delete(ctrlLoginAndRegistration.accountsDeleteOne);

  /*// login
router
  .route('/api/login')
  .post(ctrlLoginAndRegistration.loginCreate);

router
  .route('/api/login/:loginid')
  .get(ctrlLoginAndRegistration.loginReadOne)
  .put(ctrlLoginAndRegistration.loginUpdateOne)
  .delete(ctrlLoginAndRegistration.loginDeleteOne);
  */

module.exports = router;