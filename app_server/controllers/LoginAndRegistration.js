const request = require('request');
const apiOptions = { 
    server : 'http://localhost:3000' 
    };
    if (process.env.NODE_ENV === 'production') { 
        apiOptions.server = 'https://bookreview222.herokuapp.com'; 
        }

/* GET 'Registration' page */
const registration = function(req, res){
    const path = '/api/registration'; 
    const requestOptions = { 
    url : apiOptions.server + path, 
    method : 'POST', 
    json : {},
    }; 
    request(requestOptions, (err, response, body) => {
        _renderRegistration(req, res, body);
    } 
    );
};

const _renderRegistration = function(req, res, responseBody){
    res.render('registration', {
        });
};

/* GET 'login' page */
const login = function(req, res){
res.render('login', { title: 'Login' });
};


module.exports = {
registration,
login
};