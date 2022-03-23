const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true,
        maxlenght: 16
    },
    expiry: {
        type: String,
        required: true,
        maxlenght: 7
    },
    cvv: {
        type: Number,
        required: true,
        maxlenght: 3
    },
    amount: {
        type: Number,
        required:true
    }


})
module.exports = mongoose.model('card', cardSchema);
