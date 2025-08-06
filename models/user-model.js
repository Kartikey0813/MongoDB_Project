const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/MONGODB_PROJECT");

const userSchema = new mongoose.Schema({
    fullName: String,
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
