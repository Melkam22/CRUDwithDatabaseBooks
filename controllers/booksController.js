const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const myBooks = mongoose.model("myBooks");

//route just to show the form on the addOrEdit in the browser
router.get("/", (req, res)=>{
    //this msg ll be printed the employee route is choosen on browser
    res.render("books/addOrEdit", {viewTitle: "Insert Books"})
})

//push data to database, inserted infos showen on terminal below to show them on the dom
/* router.post("/", (req, res)=>{
  console.log(req.body)  
}) */

//insert function added in route add to database
router.post("/", (req,res) => {
    if(req.body._id == "")
       insertBooks(req,res)
    else
       updateBooks(req, res)
});

function insertBooks(req,res){
    let booksList = new myBooks();
    booksList.authorName = req.body.authorName;
    booksList.bookTitle = req.body.bookTitle;
    booksList.publicationYear = req.body.publicationYear;
    booksList.publishedAt = req.body.publishedAt;
    booksList.currentLanguage = req.body.currentLanguage;
    booksList.availability = req.body.availability
    booksList.save((err, doc)=>{
        if(!err)
        res.redirect("books/list");
        //email validation
        else 
            console.log("error in pushing to db occurs" + err)
    })

    }

//related function
function updateBooks(req, res){
    myBooks.findByIdAndUpdate({_id: req.body._id}, req.body, {new: true}, (err,doc)=>{
        if(!err){
            res.redirect("books/list")
         
            }
            else 
            console.log("Eror in recording update", + err)
        })
    }
//route for list
    router.get("/list", (req,res)=>{
        myBooks.find((err, docs)=>{
            if(!err){
                res.render("books/list", {
                    list: docs
                })
            }
            else{
                console.log("Error in retrieving books list" + err)
            }
        })
    })


module.exports = router;