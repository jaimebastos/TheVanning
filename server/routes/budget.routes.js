const { response } = require("express");
const express = require("express");
const Quote = require("../models/quote.model");
const router = express.Router();
const mongoose = require('mongoose');
const realObjectId = mongoose.Types.ObjectId
const { isLoggedIn, checkRoles } = require('./../middlewares');
const Van = require("../models/van.model");

router.get("/get-quotes/:id", isLoggedIn, (req, res) => {
  const { id } = req.params
  console.log(id)
  Quote
    .find({ owner: id })
    .populate("owner van")
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json({ code: 500, message: "Error finding quotes", err }));

});

router.post("/create", isLoggedIn, (req, res) => {
  const quote = req.body

  Quote.create(quote)
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json({ code: 500, message: "Error saving budget", err }));
});



module.exports = router;
