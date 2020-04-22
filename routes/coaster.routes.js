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

router.post('/new', (req, res, next) => {
  const { name, description, inversions, length, park } = req.body
  console.log("hey")

  Coaster.create({name, description, inversions, length, park})
    .then(() => {
      res.redirect('/')
    })
    .catch((err) => {
      console.log(err)
      next(err)
    })
})

module.exports = router
