const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const myBooks = mongoose.model("myBooks");

//route just to show the form on the addOrEdit in the browser
router.get("/", (req, res)=>{
    //this msg ll be printed the employee route is choosen on browser
    res.render("books/addOrEdit", {viewTitle: "Insert Books"})
})

//push data to database
router.post("/", (req, res)=>{
  console.log(req.body)  
})




module.exports = router;