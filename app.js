require("./models/db");
const express = require("express");
const booksController = require("./controllers/booksController");
const app = express();

app.listen(3000, ()=>{
    console.log("Express server is connected at port: 3000!")
})


//localhost:3000/employee  is our route
app.use("/books", booksController);