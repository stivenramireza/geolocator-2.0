'use strict'
const express = require('express')
const viewCtrl = require('../controllers/view')

const api = express.Router()

//Views
api.get('/', viewCtrl.showMain)
api.get('/profile', viewCtrl.showProfile)

module.exports = api
