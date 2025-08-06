const { text } = require("express");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    discount: {
        type: Number,
        default: 0
    },
    bgColor: String,
    panelcolor: String,
    textColor: String
    
});

module.exports = mongoose.model("User", productSchema);
