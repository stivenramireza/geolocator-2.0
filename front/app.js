'use strict'

const express = require('express')
const bodyParser = require('body-parser')


const app = express()
const api = require('./routes') //Indica que todo en cuestion de rutas se encuentra en routes/index.js

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin',"http://frontend-topicos-telematica.tk");
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, cache-control, authorization, Authorization');
    if(req.method ==="OPTIONS"){
        res.header("Access-Control-Allow-Methods","PUT, POST, PATCH, DELETE, GET")
        return res.status(200).json({})
    }
    next();
})

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', api)


module.exports = app
