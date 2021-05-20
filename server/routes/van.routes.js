const express = require("express");
const Van = require("../models/van.model");
const router = express.Router();
const { isLoggedIn, checkRoles } = require('./../middlewares')

router.get("/", (req, res) => res.json("message: inicio"));

router.get("/list", (req, res) => {

  Van
    .find()
    .select("image name caption price")
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json({ code: 500, message: "Error fetching vans", err }));
});

router.get("/list/:boolean", (req, res) => {

  const { boolean } = req.params

  Van
    .find({ isCustomized: boolean })
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json({ code: 500, message: "Error fetching vans", err }));
});

router.get("/:van_id", (req, res) => {

  Van
    .findById(req.params.van_id)
    .then((response) => {
      console.log("respuesta", response)
      res.json(response)
    })
    .catch((err) => res.status(500).json({ code: 500, message: "Error fetching vans", err }));
});

router.post("/create", isLoggedIn, checkRoles('ADMIN', 'USER'), (req, res) => {

  const van = req.body;

  Van
    .create(van)
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json({ code: 500, message: "Error saving vans", err }));
});

router.put("/edit/:vans_id", isLoggedIn, checkRoles('ADMIN'), (req, res) => {

  const van = req.body
  const { vans_id } = req.params

  Van
    .findByIdAndUpdate(vans_id, van, { new: true })
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json({ code: 500, message: "Error editing vans", err }))
})

router.get("/delete/:vans_id", isLoggedIn, checkRoles('ADMIN'), (req, res) => {

  Van
    .findByIdAndRemove(req.params.vans_id)
    .then((response) => res.json(response))
    .catch((err) => res.status(204).json({ code: 204, message: "Error deleting vans", err }));
});


module.exports = router;
