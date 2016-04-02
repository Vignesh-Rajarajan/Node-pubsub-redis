var express = require('express');
var bodyParser=require('body-parser');
var app=express()
var badges=require('./controller/badges.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.listen(3000,function(err){
if(err){
	throw err;
}
console.log('server started at'+3000);

});
