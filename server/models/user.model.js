const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'El nombre de usuario es obligatorio']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    }
   
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User