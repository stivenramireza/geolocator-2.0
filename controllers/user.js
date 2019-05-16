'use strict'

const User = require('../models/user')
const service = require('../services')
const bcrypt = require('bcrypt-nodejs')


function signUp(req, res) {
    const user = new User({
        email: req.body.email,
        displayName: req.body.displayName,
        password: req.body.password
    })

    user.save((err) => {
        if (err) return res.status(500).send({ message: `Error al crear el usuario: ${err}` })

        return res.status(201).send({
            message: 'Registro exitoso',
            token: service.createToken(user),
            userId: user._id,
            userEmail: user.email,
            userName: user.displayName   
        })
    })
}

function signIn(req, res) {

    User.findOne({ email: req.body.email }).select('email displayName password').exec(function (err, user) {
        if (err) return res.status(500).send({ message: err })
        if (!user) return res.status(404).send({ message: 'Usuario no registrado' })


        if (bcrypt.compareSync(req.body.password, user.password)) {
            
            res.status(200).send({
                message: 'Login exitoso',
                token: service.createToken(user),
                userId: user._id,
                userEmail: user.email,
                userName: user.displayName
            })
        } else {
            res.status(400).send({
                message: 'Contraseña incorrecta, intenta de nuevo!'
            })
        }
    })
}

module.exports = {
    signUp,
    signIn
}