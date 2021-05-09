const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const extrasSchema = new Schema(
  {
    extras: {
      unique: true,
      name: {
        type: String,
        required: [true, "El nombre es obligatiorio"],
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
  },
  {
    timestamps: true,
  }
);

const Extras = mongoose.model("Extras", extrasSchema);

module.exports = Extras;
