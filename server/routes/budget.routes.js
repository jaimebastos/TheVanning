const express = require("express");
const Quote = require("../models/quote.model");
const router = express.Router();
const Van = require("../models/van.model");

router.post("/create", (req, res) => {
  const quote  = req.body

  Quote.create(quote)
    .populate('extras', 'owner')
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json({ code: 500, message: "Error saving budget", err }));
});

module.exports = router;
