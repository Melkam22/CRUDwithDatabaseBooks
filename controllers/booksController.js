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
  insertBooks (req, res); 
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
    else{
        console.log("Error occurs during push to db" + err)
    }
})
}

router.get("/list", (req, res)=>{
    res.json("from book list")
})

//insert function added in route add to database
/* router.post("/", (req,res) => {
    if(req.body._id == "")
       insertBooks(req,res)
   else
       updateBooks(req, res) 
}); */

/* function insertBooks(req,res){
    let books = new myBooks();
    books.authorName = req.body.authorName;
    books.bookTitle = req.body.bookTitle;
    books.publicationYear = req.body.publicationYear;
    books.publishedAt = req.body.publishedAt;
    books.currentLanguage = req.body.currentLanguage;
    books.availability = req.body.availability
    books.save((err, doc)=>{
        if(!err)
        res.redirect("books/list");
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
            console.log("error in pushing to db occurs" + err)
        }
    })

    } */

//related function
/* function updateBooks(req, res){
   myBooks.findByIdAndUpdate({_id: req.body._id}, req.body, {new: true}, (err,doc)=>{ 
        if(!err){
            res.redirect("books/list")
        }
            /* else{
                if(err.name == "ValidationError"){
                    handleValidationError(err, req.body)
                    res.render("books/addOrEdit", {
                        viewTitle : "Update Books",
                        books: req.body
                    })
            } 
            else {
            console.log("Error in recording update", + err)
            }
       }) 
    }  */
//route for list
    /* router.get("/list", (req,res)=>{
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
    }) */
//validation function for name and email,
/* function handleValidationError(err, body){
    for(field in err.errors){
        switch (err.errors[field].path){
            case "bookTitle":
                body ["bookTitleError"] = err.errors [field].message;
                break;
            default:
                break;
        }
    }
} */


module.exports = router;