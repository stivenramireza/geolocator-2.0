'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

const UserSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  displayName: { type: String },
  password: { type: String, select: false }
})



UserSchema.pre('save', function (next) {
  let user = this
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err)

    bcrypt.hash(user.password, salt, null, function (err, hash){
      if (err) return next(err)
      user.password = hash
      next()
    })
  })
})



module.exports = mongoose.model('User', UserSchema)


