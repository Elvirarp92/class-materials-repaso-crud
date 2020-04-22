const express = require('express')
const router = express.Router()

const Coaster = require('./../models/coaster.model')

// Aquí los endpoints

router.get('/new', (req, res) => res.render('coasters/new-coaster'))

module.exports = router
