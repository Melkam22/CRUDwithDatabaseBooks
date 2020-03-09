const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/BooksDB", {useNewUrlParser: true}, (err)=>{
    if(!err) {console.log("MongoDB is connected!")}
    else {console.log("MongoDB could not be able to connect!" + err)}
});


require("./books.model");