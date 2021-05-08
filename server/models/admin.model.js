const mongoose = require("mongoose")
const Schema = mongoose.Schema

const adminSchema = new Schema({
    username: {
        type: String,
        required: [true, 'El nombre de administrador es obligatorio']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    // insertar bandeja de solicitudes
}, {
    timestamps: true
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin