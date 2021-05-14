const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "El nombre de usuario es obligatorio"],
    },
    name: {
      type: String,
      required: [true, "El nombre es obligatorio"],
    },
    email: {
      type: String,
      required: [true, "El email es obligatorio"],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
      type: String,
      required: [true, "La contraseña es obligatoria"],
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User

//AÑADIR ROLES Y RELCACIONARLO CON EL MODELO REQUEST