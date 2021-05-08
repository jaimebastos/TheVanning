const mongoose = require('mongoose')
const Schema = mongoose.Schema

const vanSchema = new Schema({
    name: String,
    description: String,
    length: Number,
    weight: Number,
    image: String,
    price: Number,
}, {
    timestamps: true
})

const Van = mongoose.model('Van', vanSchema)

module.exports = Van