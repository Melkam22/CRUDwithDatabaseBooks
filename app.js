require("./models/db");
const express = require("express");
const app = express();

app.listen(3000, ()=>{
    console.log("Express server is connected at port: 3000!")
})