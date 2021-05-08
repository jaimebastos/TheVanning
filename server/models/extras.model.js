const mongoose = require('mongoose')
const Schema = mongoose.Schema

const extrasSchema = new Schema({
    extras: {
        name: {type: String},
        price: {type: Number},
    }
}, {
    timestamps: true
})

const Extras = mongoose.model('Extras', extrasSchema)

module.exports = Extras
