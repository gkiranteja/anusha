var express = require('express');
var path = require('path');
var expressValidator = require('express-validator');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bodyParser = require('body-parser');
var flash = require('connect-flash');


var routes = require('./routes/index');
var users = require('./routes/users');
var app = express();

// View Engine

app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

// set static folder

app.use(express.static(path.join(__dirname,'public')));

app.use('/css', express.static(path.join(__dirname+'./node_modules/bootstrap/dist/css')))

// BodyParser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// Express session middleware

app.use(session({
	   secret : 'secret',
	   saveUninitialized : true,
	   resave : true
}));

// Passport Middleware

app.use(passport.initialize());
app.use(passport.session());


// Express validator middleware

app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// connect-flash middleware

app.use(flash());
app.use(function(req,res,next){
	res.locals.messages = require('express-messages')(req,res);
	next();
})


app.get('*', function(req,res,next)
{
     res.locals.user = req.user || null;
     next();
})

// Define Routes
app.use('/', routes);
app.use('/users',users);

app.listen(3000);
console.log('server started on port 3000');































