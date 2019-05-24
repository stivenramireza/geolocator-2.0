'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PointSchema = Schema({
  latitud:  {type: Number, required: true},
  longitud: {type: Number, required: true},
  date:     {type: String, required: true},
})

module.exports = mongoose.model('Point', PointSchema)