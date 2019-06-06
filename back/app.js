'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
const api = require('./routes') 
var session = require('express-session');
var dotenv = require('dotenv');
const User = require('./models/user')
var passport = require('passport');
var Auth0Strategy = require('passport-auth0');
var flash = require('connect-flash');
var userInViews = require('./lib/middleware/userInViews');

dotenv.config();

// Configure Passport to use Auth0
var strategy = new Auth0Strategy(
    {
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      callbackURL:
        process.env.AUTH0_CALLBACK_URL
    },
    function (accessToken, refreshToken, extraParams, profile, done) {
          //check if user already exists in our db
          User.findOne({ auth0Id: profile.id }).then((currentUser) => {
              if (currentUser) {
                  // Already have the user
                  console.log('userId is: ', currentUser._doc.auth0Id);
                  done(null, currentUser);
              } else {
                  // if not, create user in our db
                  var id_auth0 = (profile.id).substring(6, profile.id.length);
                  new User({
                      auth0Id: id_auth0,
                      email: profile._json.email
                  }).save().then((newUser) => {
                      console.log('new user created: ' + newUser);
                      done(null, newUser);
                  });
              }
              
          });
         
    }
  );

// You can use this section to keep a smaller payload
passport.serializeUser(function (user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function (user, done) {
    done(null, user);
  });

passport.use(strategy);

const app = express()

app.use((req, res, next) => {
    //res.header('Access-Control-Allow-Origin',"http://35.244.156.53");
    res.header('Access-Control-Allow-Origin',"http://localhost:3030");
    res.header('Access-Control-Allow-Origin',"https://geolocator.auth0.com");
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, cache-control, authorization, Authorization');
    if(req.method ==="OPTIONS"){
        res.header("Access-Control-Allow-Methods","PUT, POST, PATCH, DELETE, GET")
        return res.status(200).json({})
    }
    next();
})

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(logger('dev'));
app.use(cookieParser());

var sess = {
  secret: 'SECRET',
  cookie: {},
  resave: false,
  saveUninitialized: true
};

if (app.get('env') === 'production') {
  sess.cookie.secure = true; // serve secure cookies, requires https
}

app.use(session(sess));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use(flash());

// Handle auth failure error messages
app.use(function (req, res, next) {
  if (req && req.query && req.query.error) {
    req.flash('error', req.query.error);
  }
  if (req && req.query && req.query.error_description) {
    req.flash('error_description', req.query.error_description);
  }
  next();
});

app.use(userInViews());
app.use('/', api)

module.exports = app
