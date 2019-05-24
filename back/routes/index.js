'use strict'

const express = require('express')
const routeCtrl = require('../controllers/route')
const pointCtrl = require('../controllers/point')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')

const api = express.Router()




//API Routes
api.get('/api/route',  routeCtrl.getAllRoutes) //Me trae todas las rutas de todos los usuarios
api.get('/api/route/:userId',auth,  routeCtrl.getRoutes) //Me trae todas las rutas de un solo usuario
api.post('/api/route', auth, routeCtrl.saveRoute)
api.put('/api/route/:routeId', auth, routeCtrl.updateRoute)
api.delete('/api/route/:routeId',auth,   routeCtrl.deleteRoute)

//Api Point
api.get('/api/point/:pointId',auth,  pointCtrl.getPoint) 
api.post('/api/point', auth,  pointCtrl.savePoint)
api.delete('/api/point/:pointId',  auth, pointCtrl.deletePoint)
 
//Api User
api.post('/api/signup', userCtrl.signUp)
api.post('/api/signin', userCtrl.signIn)


module.exports = api
