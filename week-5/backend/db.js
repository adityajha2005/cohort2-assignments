const mongoose = require('mongoose'); 
mongoose.connect("mongodb+srv://2005akjha:aditya@cluster0.gxoqohx.mongodb.net/businesscard");
const businessSchema = mongoose.Schema({
    Name: String,
    Description: String,
    Interest: String,
    Linkedin: String
})

const businesscard = mongoose.model('todos', businessSchema);
module.exports = {
    businesscard
}

