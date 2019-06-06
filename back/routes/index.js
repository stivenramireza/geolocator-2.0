'use strict'

const express = require('express')
const routeCtrl = require('../controllers/route')
const pointCtrl = require('../controllers/point')
var passport = require('passport');
var dotenv = require('dotenv');
var secured = require('../lib/middleware/secured');
dotenv.config();
const api = express.Router()

//API Routes
api.get('/api/route',  routeCtrl.getAllRoutes) 
api.get('/api/route/:auth0Id', secured(),  routeCtrl.getRoutes) 
api.post('/api/route', secured(), routeCtrl.saveRoute)
api.put('/api/route/:routeId', secured(), routeCtrl.updateRoute)
api.delete('/api/route/:routeId',secured(),   routeCtrl.deleteRoute)

//Api Point
api.get('/api/point/:pointId',secured(),  pointCtrl.getPoint) 
api.post('/api/point', secured(),  pointCtrl.savePoint)
api.delete('/api/point/:pointId',  secured(), pointCtrl.deletePoint)
 
// Perform the login, after login Auth0 will redirect to callback
api.get('/login', passport.authenticate('auth0', {
    scope: 'openid email profile'
  }), function (req, res, data) {
    res.redirect('http://frontend-topicos-telematica.tk/');
  });
  
  // Perform the final stage of authentication and redirect to previously requested URL or '/profile'
  api.get('/callback', function (req, res, next) {
    passport.authenticate('auth0', function (err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.redirect('http://frontend-topicos-telematica.tk/'); }
      req.logIn(user, function (err) {
        if (err) { return next(err); }
        const returnTo = req.session.returnTo;
        delete req.session.returnTo;
        res.cookie('userId', user._doc.auth0Id);
        res.redirect(returnTo || 'http://frontend-topicos-telematica.tk/profile');
      });
    })(req, res, next);
  });
  
  // Perform session logout and redirect to homepage
  api.get('/logout', (req, res) => {
    req.logout();
    res.redirect('http://frontend-topicos-telematica.tk/');
  });

module.exports = api
