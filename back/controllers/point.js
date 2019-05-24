'use strict'

const Point = require('../models/point')


function getPoint (req, res) {
    let pointId = req.params.pointId
  
    Point.findById(pointId, (err, point) => {
      if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
      if (!point) return res.status(404).send({message: `El punto no existe`})
  
      res.status(200).send({ point })
    })
  }



function savePoint(req, res) {

    let point = new Point()
    point.latitud = req.body.latitud
    point.longitud = req.body.longitud
    point.date = req.body.date

    point.save((err, pointStored) => {
        if (err) return res.status(500).send({ message: `Error al salvar en la base de datos: ${err} ` })

        res.status(200).send({ id: pointStored._id })
    })
}



function deletePoint(req, res) {
    let pointId = req.params.pointId

    Point.findById(pointId, (err, point) => {
        if (err) return res.status(500).send({ message: `Error al borrar la punto, no encuentro el punto: ${err}` })

        point.remove(err => {
            if (err) return res.status(500).send({ message: `Error al borrar el punto: ${err}` })
            res.status(200).send({ message: 'El punto ha sido eliminado' })
        })
    })
}


module.exports = {
    getPoint,
    savePoint,
    deletePoint
}