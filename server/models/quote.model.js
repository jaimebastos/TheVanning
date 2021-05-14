const mongoose = require("mongoose")
const Schema = mongoose.Schema

const quoteSchema = new Schema({
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    van: {
      type: Schema.Types.ObjectId,
      ref: "Van",
    },
    status: {
        type: String,
        enum: ["Pending", "Confirmed", "Rejected"],
        default: "Pending"
    }
}, {
    timestamps: true
});

const Quote = mongoose.model("Quote", quoteSchema);

module.exports = Quote