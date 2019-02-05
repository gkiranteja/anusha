var express = require('express');
var router = express.Router();
var User=require('../models/users');
var passport=require('passport');
/* GET users listing. */
router.post('/register',function(req,res,next){
addtoDB(req,res); 
})
async function addtoDB(req,res,next){
 var user=new User({
  username:req.body.username,
  email:req.body.email,
  password:User.hashPassword(req.body.password),
  creation_dt:Date.now()
 });
 try{
   doc=await user.save();
   return res.status(201).json(doc);
 }
 catch(err){
   return res.status(501).json(err);
 }
}
router.post('/login',function(req,res,next){
  passport.authenticate('local', function(err, user, info) {
    if (err) { return res.status(501).json(err); }
    if (!user) { return res.status(501).json(info); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.status(200).json({message:'Login Success'});
    });
  })(req, res, next);
});

// function isValidUser(req,res,next){

// }
module.exports = router;
