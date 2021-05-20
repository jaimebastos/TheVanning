const express = require("express");
const Quote = require("../models/quote.model");
const router = express.Router();
const Van = require("../models/van.model");
const { isLoggedIn, checkRoles } = require('./../middlewares')

router.post("/create", isLoggedIn, (req, res) => {
  const quote = req.body

  Quote.create(quote)
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json({ code: 500, message: "Error saving budget", err }));
});

module.exports = router;
