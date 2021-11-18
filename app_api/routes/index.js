const express = require('express');
const router = express.Router();
const ctrlbooks = require('../controllers/books'); 
//const ctrlLoginAndRegistration = require('../controllers/LoginAndRegistration');

// books
router
  .route('/books')
  .get(ctrlbooks.booksReadOne)
  .post(ctrlbooks.booksCreate);

router
  .route('/books/:bookid')
  .get(ctrlbooks.booksReadOne)
  .put(ctrlbooks.booksUpdateOne)
  .delete(ctrlbooks.booksDeleteOne);
  
/*// login
router
  .route('/locations/:locationid/reviews')
  .post(ctrlLoginAndRegistration.reviewsCreate);

router
  .route('/locations/:locationid/reviews/:reviewid')
  .get(ctrlLoginAndRegistration.reviewsReadOne)
  .put(ctrlLoginAndRegistration.reviewsUpdateOne)
  .delete(ctrlLoginAndRegistration.reviewsDeleteOne);
  
// registration
router
  .route('/locations/:locationid/reviews')
  .post(ctrlLoginAndRegistration.reviewsCreate);

router
  .route('/locations/:locationid/reviews/:reviewid')
  .get(ctrlLoginAndRegistration.reviewsReadOne)
  .put(ctrlLoginAndRegistration.reviewsUpdateOne)
  .delete(ctrlLoginAndRegistration.reviewsDeleteOne);*/

module.exports = router;