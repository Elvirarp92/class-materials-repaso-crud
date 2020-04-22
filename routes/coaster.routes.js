const express = require('express')
const router = express.Router()

const Coaster = require('./../models/coaster.model')
const Park = require('./../models/park.model')

// Aquí los endpoints

//CREATING COASTERS

router.get('/new', (req, res, next) =>
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
  console.log('hey')

  Coaster.create({ name, description, inversions, length, park })
    .then(() => {
      res.redirect('/')
    })
    .catch((err) => {
      console.log(err)
      next(err)
    })
})

//COASTER INDEX + DETAILS

router.get('/', (req, res, next) => {
  Coaster.find()
    .populate('park')
    .then((coasters) => {
      res.render('coasters/coasters-index', { coasters })
    })
    .catch((err) => {
      next(err)
    })
})

router.get('/:id', (req, res, next) => {
  Coaster.findById(req.params.id)
    .populate('park')
    .then((coaster) => {
      res.render('coasters/coaster-details', coaster)
    })
    .catch((err) => {
      next(err)
    })
})

module.exports = router
