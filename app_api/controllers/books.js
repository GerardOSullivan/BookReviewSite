const mongoose = require('mongoose');
const Book = mongoose.model('Book');

const _buildBooksList = function (req, res, results) {
	let books = [];
	results.forEach((doc) => {
	  books.push({
		name: doc.name,
		description: doc.description,
		image: doc.image,
	  });
	});
	return books;
  };
  
  const booksList = function (req, res) {
	Book.find(function (err, results) {
	  books = _buildBooksList(req, res, results);
	  res.status(200).json(books);
	});
  };

  const booksCreate = function (req, res) {
	Book.create({ 
		name: req.body.name,
		description: req.body.description,
		image: req.body.image
		}, (err, book) => { 
		if (err) {
		res
		.status(400)
		.json(err);
		} else {
		res
		.status(201)
		.json(book);
		}
		});
		
};

const booksReadOne = function (req, res) { 
Book
	.findById(req.params.bookid) 
	.exec((err, book) => { 
		if (!book) {
			res	
			  .status(404) 
			  .json({	
				"message": "bookid not found"
			  });	 
			return;
		  } else if (err) {
			res	
			  .status(404) 
			  .json(err); 
			return; 	
		  }  
		res 
			.status(200) 
			.json(book); 
	});
};

const booksUpdateOne = function (req, res) { 
res
.status(200)
.json({"status" : "success"});
};
const booksDeleteOne = function (req, res) { 
res
.status(200)
.json({"status" : "success"});
};

module.exports = {
  booksList,
  booksCreate,
  booksReadOne,
  booksUpdateOne,
  booksDeleteOne
};
