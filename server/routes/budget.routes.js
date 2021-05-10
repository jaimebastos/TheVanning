const express = require("express");
const router = express.Router();
const Van = require("../models/van.model");

router.post("/create", (req, res) => {
  const van  = req.body

  Van.create(van)
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json({ code: 500, message: "Error saving budget", err }));
});

module.exports = router;
