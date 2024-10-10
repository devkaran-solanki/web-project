const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    cart: {
        type: Array,
        default: []
    },
    orders: {
        type: Array,
        default: []
    },
    isAdmin: Boolean,
    contact: Number,
    address: String,
    profilePicture: String,
});

module.exports = mongoose.model('User', userSchema);
