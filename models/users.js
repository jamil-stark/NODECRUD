const { default: mongoose } = require("mongoose");

const mongoose = require('mongoose');
const requstSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});
module.exports = mongoose.model('user',requstSchema)