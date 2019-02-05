var express= require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('passportapp',['users']);
var bcrypt = require('bcryptjs');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


// LOGIN PAGE - GET
router.get('/login', function(req,res){

	res.render('login');
})

// Register here- GET
router.get('/register', function(req,res){

	res.render('register');
})


// Register here- POST
router.post('/register', function(req,res){

	console.log("adding user...");
 
    // Get from values

     var name = req.body.name;
     var email = req.body.email;
     var username = req.body.username;
     var password = req.body.password;
     var password2 = req.body.password2;
     console.log(name);
  
      // validation

      req.checkBody('name','Name field is required').notEmpty();
      req.checkBody('email','email field is required').notEmpty();
      req.checkBody('email','Please use a valid email address').isEmail();
      req.checkBody('username','username field is required').notEmpty();
      req.checkBody('password','password field is required').notEmpty();
      req.checkBody('password2','Passwords do not match').equals(req.body.password);
        
        // check for errors
         var errors= req.validationErrors();
         if(errors)
         {
         	console.log("form has errors");
         	res.render('register',{
         		errors : errors,
         		 name : name,
         		 email : email,
         		 username : username,
         		 password : password,
         		 password : password2
         	});
         }
         else
         { 
         	 console.log("inside the else block");
         	var newUser = {
         		 name : name,
         		 email : email,
         		 username : username,
         		 password : password,
         	};

              bcrypt.genSalt(10,function(err,salt)
              {
              	 bcrypt.hash(newUser.password,salt,function(error,hash){
                          newUser.password= hash;

                          db.users.insert(newUser,function(err,doc)
         	{
         		if(err)
         		{
         			console.log("we got an error");
         			res.send(err);
         		}
         		else
         		{
         			console.log("user added");
         			// Success Message
         			req.flash('success','you are registered and can go for login');
         			//Redirect after register
         			res.location('/');
         			res.redirect('/');
         		}
         	});
              	 });
              });

         	
         }

});



passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
 
 db.users.findOne({_id : mongojs.ObjectId(id)}, function(err,user)
 	{
 		done(err,user);
 	});
});



passport.use(new LocalStrategy(
  function(username,password,done){

  	db.users.findOne({username: username}, function(err,user)
  	{
  		if(err){
  			return done(err);
  		}
  		if(!user)
  		{
  			return done(null,false,{message:'incorrect username'})
  		}

  		bcrypt.compare(password, user.password, function(err,isMatch)
  			{
  				if(err)
  				{
  					return done(err);
  				}
  				if(isMatch)
  				{
  					return done(null,user);
  				}
  				else
  				{
  					return done(null,false,{message:'incorrect password'})
  				}
  			});
  	});
  }
	)

	);

//login post
router.post('/login', passport.authenticate('local', { successRedirect: '/',
                                                    failureRedirect: '/users/login',
                                                    failureFlash : 'invalid username/password'}), 
function(req,res){
      console.log("Auth successful");
      res.redirect('/');
})
;

router.get('/logout', function(req,res)
{
	req.logout();
	req.flash('success','you have successfully logged out');
	res.redirect('/users/login');

})



module.exports = router;