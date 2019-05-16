'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RouteSchema = Schema({
  userId: {type: String, required: true},
  name: {type: String, required: false},
  points: {type: Array, required: true },
  description: {type: String, required: false}
})

module.exports = mongoose.model('Route', RouteSchema)
