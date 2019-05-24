'use strict'


const express = require('express')

const viewCtrl = require('../controllers/view') 
const api = express.Router()

//Views
api.get('/', viewCtrl.redirectSignin)
api.get('/signin', viewCtrl.showSignin)
api.get('/signup', viewCtrl.showSignup)
api.get('/profile', viewCtrl.showProfile)

module.exports = api
