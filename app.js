var express = require('express');
var app= express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
require('dotenv').config()

const Blog = require("./models/blog");

mongoose.connect(process.env.DATABASEURL, {useNewUrlParser: true, useUnifiedTopology: true});
app.set('view engine' , 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json({limit: '25mb'}));
app.use(bodyParser.urlencoded({limit: '25mb', extended: true}));

app.get('/', (req,res) => {
    res.render('index');
});

app.post('/save', (req, res) => {
    const blog = new Blog({
        _id: new mongoose.Types.ObjectId(),
        content: req.body.content,
        author: req.body.author,
        bio: req.body.bio,
        fb: req.body.fb,
        insta: req.body.insta,
        linkedin: req.body.linkedin,
        github: req.body.github,

    })
    
    blog
    .save()
    .then(result => {
        res.status(201).json({
            message: "Blog Stored Successfully",
            result: result
        })
    })
    .catch(err => {
        console.log(err);
    })
})

app.listen(process.env.PORT, () => {
    console.log("Server has started on port " + process.env.PORT )
});
