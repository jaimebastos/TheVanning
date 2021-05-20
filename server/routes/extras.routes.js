const express = require("express");
const Extra = require("../models/extra.model");
const router = express.Router();
const uploader = require("../config/cloudinary.config");
const { isLoggedIn, checkRoles } = require('./../middlewares')

router.get("/list", (req, res) => {

  Extra.find()
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json({ code: 500, message: "Error fetching extras", err }));
});

router.get("/list/:category", (req, res) => {
  const { category } = req.params


  Extra.find({ category: category })
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json({ code: 500, message: "Error fetching extras filtered category", err }));

})

router.get("/:extras_id", (req, res) => {

  Extra.findById(req.params.extras_id)
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json({ code: 500, message: "Error fetching extras", err }));
});

router.post("/create", isLoggedIn, checkRoles('ADMIN'), (req, res) => {
  const extra = req.body;

  Extra.create(extra)
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json({ code: 500, message: "Error saving extras", err }));
});

router.put("/edit/:extras_id", isLoggedIn, checkRoles('ADMIN'), (req, res) => {

  const { name, price, description, caption, category } = req.body

  Extra.findByIdAndUpdate(req.params.extras_id, { name, price, description, caption, category })
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json({ code: 500, message: "Error editing extras", err }));
});

router.get("/delete/:extras_id", isLoggedIn, checkRoles('ADMIN'), (req, res) => {

  Extra.findByIdAndRemove(req.params.extras_id)
    .then((response) => res.json(response))
    .catch((err) => res.status(204).json({ code: 204, message: "Error deleting extras", err }));
});


module.exports = router;