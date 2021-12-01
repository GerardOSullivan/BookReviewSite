const request = require('request');
const apiOptions = { 
    server : 'http://localhost:3000' 
    }; 
    if (process.env.NODE_ENV === 'production') { 
    apiOptions.server = 'https://bookreview222.herokuapp.com'; 
    }

    const  homepage = function(req, res){
        const path = '/api/books'; 
        const requestOptions = { 
        url : apiOptions.server + path, 
        method : 'GET', 
        json : {},
        }; 
        request(requestOptions, (err, response, body) => { 
        _renderHomepage(req, res, body); 
        } 
    );
    };
    
    /* GET 'home' page */
const _renderHomepage = function(req, res, responseBody){
        res.render('index', {
            title: 'Book Reviews',
            pageHeader:{
                title: 'Book Reviews',
                strapline: 'Find accurate reviews on your favourite books'
            },
            books: responseBody
            });
};
    

module.exports = {
homepage
};