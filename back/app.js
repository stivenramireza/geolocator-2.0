'use strict'

const express = require('express')
const bodyParser = require('body-parser')


const app = express()
const api = require('./routes') //Indica que todo en cuestion de rutas se encuentra en routes/index.js

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', api)


module.exports = app
