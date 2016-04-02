var express = require('express');
var bodyParser=require('body-parser');
var app=express()
var badges=require('./controllers/badges.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/',badges.save,badges.send,function(req,res){
  res.send('completed');
})

app.get('/badges',badges.get);

app.listen(3000,function(err){
if(err){
	throw err;
}
console.log('server started at'+3000);

});
