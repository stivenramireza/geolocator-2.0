'use strict'

const Route = require('../models/route')



function getAllRoutes(req, res) {
    Route.find({}, (err, allroutes) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` })
        if (!allroutes) return res.status(404).send({ message: 'No existen rutas' })


        res.status(200).send({ allroutes })
    })
}




function getRoutes(req, res) {
    let userId = req.params.userId

    Route.find({ userId: userId }, (err, routes) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` })
        if (!routes) return res.status(404).send({ message: `El usuario no tiene rutas` })

        res.status(200).send({ routes })
    })
}


function saveRoute(req, res) {

    let route = new Route()
    route.userId = req.body.userId
    route.name = req.body.name
    route.points = req.body.points
    route.description = req.body.description

    console.log("me esta llegando");
    console.log(req.body);
    route.save((err, routeStored) => {
        if (err) return res.status(500).send({ message: `Error al salvar en la base de datos: ${err} ` })

        res.status(200).send({ route: routeStored })
    })
}


function updateRoute(req, res) {
    let routeId = req.params.routeId
    let update = req.body

    Route.findByIdAndUpdate(routeId, update, (err, routeUpdated) => {
        if (err) return res.status(500).send({ message: `Error al actualizar la ruta: ${err}` })
        console.log(routeUpdated)

        res.status(200).send({ route: routeUpdated })
    })
}


function deleteRoute(req, res) {
    let routeId = req.params.routeId

    Route.findById(routeId, (err, route) => {
        if (err) return res.status(500).send({ message: `Error al borrar la ruta, no encuentro la ruta: ${err}` })

        route.remove(err => {
            if (err) return res.status(500).send({ message: `Error al borrar la ruta: ${err}` })
            res.status(200).send({ message: 'La ruta ha sido eliminada' })
        })
    })
}

module.exports = {
    getAllRoutes,
    getRoutes,
    saveRoute,
    updateRoute,
    deleteRoute
}