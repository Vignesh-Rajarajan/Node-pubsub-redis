var _= require('underscore');
var model=require('../models/badges')

exports.save=function (req,res,next) {

  var badges=_.clone(req.body);
  console.log('hhhhhhhhhhhhhhhhh'+badges);
  model.save(badges,function(err){
    if(err)   return res.json(503,{error:true});
    next();
});
};

exports.send=function (req,res,next) {
  var badges=_.clone(req.body);
model.send(badges,function(err){
     if(err)   return res.json(503,{error:true});
         res.status(200).json({error:null});
   });
};

exports.get=function(req,res,next){
  model.get(function (err,data) {
  if(err)   return res.json(503,{error:true});

  res.json(200,data);
  });
};
