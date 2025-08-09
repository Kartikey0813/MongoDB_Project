const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        minLength: 3,
        trim: true,
    },
    email: String,
    password: String,
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart",
        default: []
    },
    isAdmin: Boolean,
    orders: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        default: []
    },
    contact: Number,
    picture: String
});

module.exports = mongoose.model("User", userSchema);
