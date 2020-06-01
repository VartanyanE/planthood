const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_id: { type: String, required: true },
    user_name: { type: String, required: true },
    zone: String,
    password: { type: String, required: true },
    date: { type: Date, default: Date.now }

}, { collection: 'users' });

const User = mongoose.model("Users", userSchema);

module.exports = User;

