const mongoose = require('mongoose')
const Schema = mongoose.Schema

const vanSchema = new Schema(
  {
    name: {
      type: String,
      //required: [true, "El nombre es obligatoria"],
      unique: true,
    },

    designer: {
      brand: {
        type: String,
        //required: [true, "La marca es obligatoria"],
      },
      model: {
        type: String,
        //required: [true, "El modelo es obligatorio"],
      }
    },

    caption: {
      type: String,
      //required: [true, "La descripción corta es obligatoria"],
    },
    description: {
      type: String,
      //required: [true, "La descripción es obligatoria"],
    },

    dimension: {
      length: {
        type: String,
        enum: ["L1", "L2", "L3", "L4"],
        //required: [true, "La longitud de la furgoneta es obligatoria"],
      },
      weight: {
        type: Number,
        //required: [true, "El peso es obligatorio"],
      },
      height: {
        type: String,
        enum: ["H1", "H2", "H3"],
        //required: [true, "La altura de la furgoneta es obligatoria"],
      },
    },

    specifications: {

      fuelSpecifications: {
        fuelType: {
          type: String,
          //required: [true, "El tipo de combustible que usa la furgoneta es obligatorio"],
        },
        fuelConsume: {
          type: Number,
          //required: [true, "El consumo de combustible de la furgoneta es obligatorio"],
        },

      },
      cv: {
        type: Number,
        //required: [true, "Los caballos son obligatorios"],
      },
      kilometers: {
        type: Number,
        //required: [true, "Los kilometros que tiene la furgoneta son obligatorios"],
      },
      year: {
        type: Number,
        //required: [true, "El año de fabricacion es obligatorio"],
      },
    },

    image: {
      type: String,
      //required: [true, "La imagen es obligatoria"],
    },
    price: {
      type: Number,
      //required: [true, "El precio es obligatorio"],
    },

    extras: [
      {
        type: Schema.Types.ObjectId,
        ref: "Extra",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Van = mongoose.model('Van', vanSchema)

module.exports = Van