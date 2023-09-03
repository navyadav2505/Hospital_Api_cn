const mongoose = require('mongoose');


//connect to DB
mongoose.connect('mongodb+srv://naveenyadav:Ashadevi1379@cluster0.vvp398h.mongodb.net/', { useNewUrlParser: true ,useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to db"));

db.once('open', function () {
    console.log("Successfully connected to db");
});