const express = require("express");
const Van = require("../models/van.model");
const router = express.Router();

// Endpoints
router.get("/", (req, res) => res.json("message: inicio"));

router.get("/vans", (req, res) => {

  Van.find()
    .select("image name caption price ")
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json({ code: 500, message: "Error fetching vans", err }));
});

router.get("/vans/:van_id", (req, res) => {

  Van.findById(req.params.van_id)
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json({ code: 500, message: "Error fetching vans", err }));
});

router.post("/vans/create", (req, res) => {

  const van = req.body;

  Van.create(van)
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json({ code: 500, message: "Error saving vans", err }));
});

router.put("/vans/edit/:vans_id", (req, res) => {

  Van.findByIdAndUpdate(req.params.vans_id, req.body)
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json({ code: 500, message: "Error editing vans", err }));
});

router.get("/delete/:vans_id", (req, res) => {
    
  Van.findByIdAndRemove(req.params.vans_id)
    .then((response) => res.json(response))
    .catch((err) => console.log("erororororororororoororororor", err));
});

module.exports = router;
