'use strict'

var path = require('path');

function showMain(req, res){
    res.sendFile(path.resolve('views/main.html'))
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
    showMain,
    showSignin,
    showSignup,
    showProfile
}