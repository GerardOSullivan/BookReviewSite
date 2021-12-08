const mongoose = require('mongoose');
const Account = mongoose.model('registeredAccount');

const _buildAccountsList = function (req, res, results) {
	let accounts = [];
	results.forEach((doc) => {
	  accounts.push({
		email: doc.email,
		phone: doc.phone,
	  });
	});
	return accounts;
  };

  const accountsList = function (req, res) {
	Account.find(function (err, results) {
		accounts = _buildAccountsList(req, res, results);
		res.status(200).json(accounts);
	  });
};

  const accountsCreate = function (req, res) {
	Account.create({ 
		email: req.body.email,
		password: req.body.password,
		phone: req.body.phone
		}, (err, account) => { 
		if (err) {
		res
		.status(400)
		.json(err);
		} else {
		res
		.status(201)
		.json(account);
		}
		});
		
};

const accountsReadOne = function (req, res) { 
Account.findById(req.params.id) 
	.exec((err, account) => { 
		if (!account) {
			res	
			  .status(404) 
			  .json({	
				"message": "account not found"
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
			.json(account); 
	});
};

const accountsUpdateOne = function (req, res) { 
res
.status(200)
.json({"status" : "success"});
};
const accountsDeleteOne = function (req, res) { 
res
.status(200)
.json({"status" : "success"});
};

module.exports = {
  accountsCreate,
  accountsUpdateOne,
  accountsReadOne,
  accountsList,
  accountsDeleteOne
};
