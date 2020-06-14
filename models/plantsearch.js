const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantsearchSchema = new Schema({
    plant_id: { type: String, required: true },
    common_name: { type: String, required: true },
    category_type: String,
    image_url: String,
    family_name: String,
    scientific_name: String,
    foliage_color: String,
    plant_care: String,
    lighting_needs: String,
    watering_needs: String,
    soil_needs: String,
    human_edible: String,
    pet_edible: String,
    USDA_zone: String
}, { collection: 'Plantsearch' });

const Plantsearch = mongoose.model("Plantsearch", plantsearchSchema);

module.exports = Plantsearch;



// Common/Scientific Name
// Family
// Category/Type (i.e. Cactus,Succulent, Evergreen)
// Flower/Foliage
// Color
// Sun/Soil/Water (Plantcare?)
// Edible Human/Pets
// USDA Zone


// Plant Care
// Image with Scientific Name caption