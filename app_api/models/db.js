const mongoose = require('mongoose');
const dbURI = "mongodb+srv://Gerard2:1@cluster0.6o3r1.mongodb.net/BookReview?retryWrites=true&w=majority";

try {
   
mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
	);
}
 catch (e) {
  console.log("could not connect");
}

const dbConnection = mongoose.connection;

dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));
mongoose.connect(dbURI);

require('./books');
