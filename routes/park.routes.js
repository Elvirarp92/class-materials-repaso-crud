const express = require('express')
const router = express.Router()

const Park = require("./../models/park.model")

// Aquí los endpoints

router.get("/new", (req, res) => res.render("./parks/new-park"))

router.post("/new", (req, res, next) => {

  const {name, description} = req.body

  Park.create({name, description})
  .then(() => {
    res.redirect("/")
  }).catch((err) => {
    next(err)
  });

})


module.exports = router