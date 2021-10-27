/* GET 'Registration' page */
const registration = function(req, res){
res.render('registration', { title: 'Registration' });
};
/* GET 'login' page */
const login = function(req, res){
res.render('login', { title: 'Login' });
};
module.exports = {
registration,
login
};