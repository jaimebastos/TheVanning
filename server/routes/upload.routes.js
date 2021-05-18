const express = require("express");
const router = express.Router();

const uploader = require("../config/cloudinary.config");

router.post("/image", uploader.array("imageData"), (req, res) => {
  console.log(req.file, req.files)
  if (!req.files) {
    res.status(500).json({ code: 500, message: "Error loading the file" });
    return;
  }
  res.json({ secure_url: req.files.map(elm => elm.path) });
});

module.exports = router;

