const mongoose = require('mongoose')
const Schema = mongoose.Schema

const vanSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre es obligatoria"],
      unique: true
    },
    description: {
      type: String,
      required: [true, "La descripción es obligatoria"],
    },
    length: {
      type: Number,
      required: [true, "Las medidas son obligatorias"],
    },
    weight: {
      type: Number,
      required: [true, "El peso es obligatorio"],
    },
    fuel: {
      type: String,
      required: [true, "El tipo de combustible que usa la furgoneta es obligatorio"],
    },
    cv: {
      type: Number,
      required: [true, "Los caballos son obligatorios"],
    },
    kilometers: {
      type: Number,
      required: [true, "Los kilometros que tiene la furgoneta son obligatorios"],
    },
    year: {
      type: Number,
      required: [true, "El año de fabricacion es obligatorio"],
    },
    image: {
      type: String,
      required: [true, "La imagen es obligatoria"],
    },
    price: {
      type: Number,
      required: [true, "El precio es obligatorio"],
    },
    extras: {
      type: Schema.Types.ObjectId,
      ref: "Extras",
    },
  },
  {
    timestamps: true,
  }
);

const Van = mongoose.model('Van', vanSchema)

module.exports = Van