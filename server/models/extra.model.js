const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const extraSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre es obligatiorio"],
      unique: true,
      },
      price: {
        type: Number,
        required: [true, "El precio es obligatiorio"],
      },
      description: {
        type: String,
        required: [true, "La descripción es obligatioria"],
      },
    },
  {
    timestamps: true,
  }
);

const Extra = mongoose.model("Extra", extraSchema);

module.exports = Extra;
