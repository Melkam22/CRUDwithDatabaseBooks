const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
    authorName: {
        type: String
    },
    bookTitle: {
        type: String
        /* required: "this field is required" */
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
/* employeeSchema.path("email").validate((val)=>{
    emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return emailRegex.test(val);
}, "Invalid E-mail")
 */
mongoose.model("MyBooks", booksSchema)

