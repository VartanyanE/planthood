const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
    user_id: { type: String, required: true },
    plant_id: { type: String, required: true },
    is_owned: Boolean,
    is_favorited: Boolean,
    image_url: String,
    common_name: { type: String, required: true },
    plant_care: { type: String, required: true },
    reminders: String,
    date: { type: Date, default: Date.now }
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;

