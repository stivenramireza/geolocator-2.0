'use strict'

const User = require('../models/user')
const service = require('../services')
const bcrypt = require('bcrypt-nodejs')


function signUp(req, res) {
    const user = new User({
        userId: req.body.userId,
    })

    user.save((err) => {
        if (err) return res.status(500).send({ message: `Error al crear el usuario: ${err}` })

        return res.status(201).send({
            message: 'Registro exitoso',
            token: service.createToken(user),
            userId: user._id,
        })
    })
}

function signIn(req, res) {

    User.findOne({ userId: req.body.userId }).select('userId').exec(function (err, user) {
        if (err) return res.status(500).send({ message: err })
        if (!user) return res.status(404).send({ message: 'Usuario no registrado' })


        if (bcrypt.compareSync(req.body.password, user.password)) {
            
            res.status(200).send({
                message: 'Login exitoso',
                token: service.createToken(user),
                userId: user._id,
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