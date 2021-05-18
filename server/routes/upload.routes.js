const express = require("express");
const router = express.Router();

const uploader = require("../config/cloudinary.config");


router.post("/singleImage", uploader.single("imageData"), (req, res) => {
  
  if (!req.file) {
    res.status(500).json({ code: 500, message: "Error loading the file" });
    return;
  }
  res.json({ secure_url: req.file.path});
});

router.post("/image", uploader.array("imageData"), (req, res) => {
  console.log(req.file, req.files)
  if (!req.files) {
    res.status(500).json({ code: 500, message: "Error loading the file" });
    return;
  }
  res.json({ secure_url: req.file.path });
});

module.exports = router;
