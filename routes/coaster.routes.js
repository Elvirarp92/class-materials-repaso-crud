const express = require('express')
const router = express.Router()

const Coaster = require('./../models/coaster.model')
const Park = require('./../models/park.model')

// Aquí los endpoints

router.get('/new', (req, res) =>
  Park.find()
    .then((parks) => {
      res.render('coasters/new-coaster', { parks })
    })
    .catch((err) => {
      next(err)
    })
)

module.exports = router
