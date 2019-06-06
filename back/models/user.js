'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  auth0Id: { type: String, required: true, unique: true},
  email: {type: String}
})

module.exports = mongoose.model('User', UserSchema)