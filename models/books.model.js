const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
    authorName: {
        type: String
    },
    bookTitle: {
        type: String,
        required: "this field is required"
    },
    publicationYear: {
        type: Number
    },
    publishedAt: {
        type: String
    },
    currentLanguage: {
        type: String
    },
    availability: {
        type: String
    }
})
//validation for email
/* booksSchema.path('bookTitle').validate((val)=> {
   bookTitleValidate = '/^.{0,20}$/'
   return bookTitleValidate.test(val);
}, "Invalid Book Title")  */

mongoose.model("MyBooks", booksSchema)



