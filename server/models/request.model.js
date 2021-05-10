const mongoose = require("mongoose")
const Schema = mongoose.Schema

const requestSchema = new Schema({
    
}, {
    timestamps: true
});

const Request = mongoose.model("Request", requestSchema);

module.exports = Request

//CAMBIAR ADMIN POR MODELO REQUEST