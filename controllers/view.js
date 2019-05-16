'use strict'

const router = require('./../routes')
var path = require('path');


function redirectSignin(req, res) {
    res.redirect('/signin');
}

function showSignin(req, res) {
    res.sendFile(path.resolve('views/signin.html'))
}

function showSignup(req, res) {
    res.sendFile(path.resolve('views/signup.html'))
}

function showProfile(req, res) {
    res.sendFile(path.resolve('views/profile.html'))
}

module.exports = {
    redirectSignin,
    showSignin,
    showSignup,
    showProfile
}