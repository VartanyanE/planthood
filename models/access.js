const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accessSchema = new Schema({
    owner_user_id: { type: String, required: true },
    sitter_user_id: { type: String, required: true },
    date: { type: Date, default: Date.now }
}, { collection: 'access' });

const Access = mongoose.model("Access", accessSchema);

module.exports = Access;

