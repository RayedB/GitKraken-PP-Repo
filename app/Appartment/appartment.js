const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appartmentSchema = new Schema({
    address: String,
    zip: String,
    neighborhood: String,
    size: Number,
    balcony: {type: Boolean, default: false},
    city: { type: String, required: true}
})

const Appartment = mongoose.model('Appartments', appartmentSchema)

module.exports = Appartment