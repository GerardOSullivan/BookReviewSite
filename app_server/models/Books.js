const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  image: {type: String, required: true}
});
mongoose.model('Book', bookSchema);
  