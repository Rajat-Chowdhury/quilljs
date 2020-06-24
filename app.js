var express = require('express');



var app= express();

//set up template engine

app.set('view engine' , 'ejs');
app.get('/', function(req,res){
    res.render(  'index');
});

//static files 

app.use(express.static('./public'));



//listening to port 

app.listen(5000);
console.log("you are listening to port 5000");
