require("./models/db");
const express = require("express");
 
const path = require("path");
const exphbs = require("express-handlebars");
//to send data to database 1
const bodyParser = require("body-parser");
const booksController = require("./controllers/booksController");
const app = express();

//to send data to database 2
app.use(bodyParser.urlencoded({
    extended: true
}))
//together with the above
app.use(bodyParser.json())


//create a new folder and put hbs files there
app.set("views", path.join(__dirname, "/views/"));
app.engine("hbs", exphbs ({extname: "hbs", defaultLayout: "mainLayout", layoutsDir: __dirname + "/views/layouts/"}));
app.set("view engine", "hbs");


app.listen(3000, ()=>{
    console.log("Express server is connected at port: 3000!")
})


//localhost:3000/employee  is our route
app.use("/books", booksController);