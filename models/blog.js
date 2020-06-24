const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    content: String,
    author: String,
    fb: String,
    insta: String,
    linkedin: String,
    github: String
})

module.exports = mongoose.model("Blog", blogSchema);
