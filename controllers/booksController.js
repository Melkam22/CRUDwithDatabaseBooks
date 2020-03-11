const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const MyBooks = mongoose.model("MyBooks");

//route just to show the form on the addOrEdit in the browser
router.get("/", (req, res)=>{
    //this msg ll be printed the employee route is choosen on browser
    res.render("books/addOrEdit", {viewTitle: "Insert Books"})
})

//push data to database, inserted infos showen on terminal below to show them on the dom
router.post("/", (req, res)=>{
  //console.log(req.body)  
  //if(req.body._id == "")
  insertBooks(req,res)
//else
  //updateBooks(req, res) 
})
function insertBooks(req,res){
    let books = new MyBooks();
    books.authorName = req.body.authorName;
    books.bookTitle = req.body.bookTitle;
    books.publicationYear = req.body.publicationYear;
    books.publishedAt = req.body.publishedAt;
    books.currentLanguage = req.body.currentLanguage;
    books.availability = req.body.availability
books.save((err, doc)=>{
    if(!err) res.redirect("books/list");
    //email validation
    else{ 
        if(err.name == "ValidationError"){
        handleValidationError(err,req.body);
        //copied from router above
           res.render("books/addOrEdit",
           {viewTitle: "Insert Books",
           books: req.body   //update function 
       })
       }
    else
        console.log("Error occurs during push to db" + err)
    
}
})
}
 
 
//route for list, retriveing docs from the mongodb
router.get("/list", (req,res)=>{
MyBooks.find((err, docs)=>{
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

//validation function for name and email,
function handleValidationError(err, body){
    for(field in err.errors){
        switch (err.errors[field].path){
            case "authorName":
                    body ["authorNameError"] = err.errors[field].message;
                    break;
            case "bookTitle":
                body ["bookTitleError"] = err.errors [field].message;
                break;
            default:
                break;
        }
    }
} 


module.exports = router;