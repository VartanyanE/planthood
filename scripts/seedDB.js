const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below.

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/planthood");

const plantSeed = [
  {
    user_id: "michael.becker.123@gmail.com",
    plant_id: "2",
    is_owned: 1,
    is_favorited: 0,
    image_url:
      "https://images.unsplash.com/photo-1520860560195-0f14c411476e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    common_name: "Cactus",
    plant_care: "Lots of sunlight.",
    reminders: "No need too water.",
    date: new Date(Date.now()),
  },
  {
    user_id: "michael.becker.123@gmail.com",
    plant_id: "3",
    is_owned: 1,
    is_favorited: 1,
    image_url:
      "https://images.unsplash.com/photo-1490370946242-34092dbf29f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    common_name: "Alovera",
    plant_care: "Water once a week.",
    reminders: "",
    date: new Date(Date.now()),
  },
  {
    user_id: "michael.becker.123@gmail.com",
    plant_id: "4",
    is_owned: 1,
    is_favorited: 0,
    image_url:
      "https://images.unsplash.com/photo-1588205282197-2e208c102463?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    common_name: "Oak",
    plant_care: "Water regularly.  Prune branches as needed.",
    reminders: "Water at 3:00.",
    date: new Date(Date.now()),
  },
  {
    user_id: "michael.becker.123@gmail.com",
    plant_id: "5",
    is_owned: 1,
    is_favorited: 0,
    image_url:
      "https://images.unsplash.com/photo-1542324216541-c84c8ba6db04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    common_name: "Red Rose",
    plant_care: "Water Daily",
    reminders: "Deadhead roses.",
    date: new Date(Date.now()),
  },
  {
    user_id: "gin@luthercorp.com",
    plant_id: "6",
    is_owned: 1,
    is_favorited: 0,
    image_url:
      "https://images.unsplash.com/photo-1515513292257-0cc7d4e86706?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    common_name: "Lavender",
    plant_care: "Water daily.",
    reminders: "Trim Lavender.",
    date: new Date(Date.now()),
  },
];

const accessSeed = [
  {
    owner_user_id: "gin@luthercorp.com",
    sitter_user_id: "vartanyan.emanuil@gmail.com",
    date: new Date(Date.now()),
  },
];

const userSeed = [
  {
    user_id: "gin@luthercorp.com",
    user_name: "Martin",

    zone: "1",
    password: "abc",
    date: new Date(Date.now()),
  },
  {
    user_id: "",
    user_name: "Emanuil",
    zone: "1",
    password: "abc",
    date: new Date(Date.now()),
  },

  {
    user_id: "anna.olt16@gmail.com",
    user_name: "Anna",
    zone: "1",
    password: "abc",
    date: new Date(Date.now()),
  },
  {
    user_id: "stephtdedios@gmail.com",
    user_name: "Stephanie",
    zone: "1",
    password: "abc",
    date: new Date(Date.now()),
  },
  {
    user_id: "syd107@gmail.com",
    user_name: "Sydney",
    zone: "1",
    password: "abc",
    date: new Date(Date.now()),
  },
];

const plantsearchSeed = [
  {
    plant_id: 1,
    common_name: "Tulip",
    image_url:
      "https://images.unsplash.com/photo-1554220311-e6c46d92a1ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    family_name: "Liliaceae",
    scientific_name: "Tulipa",
    foliage_color: "Blue/Green",
    plant_care:
      "In the spring, when leaves emerge, feed your tulip the same bulb food or bone meal which you used at planting time. Water well. Deadhead tulips as soon as they go by, but do not remove the leaves! Allow the leaves to remain on the plants for about 6 weeks after flowering.",
    lighting_needs: "Full sun",
    watering_needs: "Once/Twice per Week",
    soil_needs: "Sandy or Similar",
    human_edible: true,
    pet_edible: false,
    USDA_zone: "4-6",
  },
  {
    plant_id: 2,
    common_name: "ZZ Plant, Zanzibar Gem",
    image_url:
      "https://img.crocdn.co.uk/images/products2/pl/20/00/03/20/pl2000032091.jpg",
    family_name: "Araceae",
    scientific_name: "Zamioculcas Zamiifolia",
    foliage_color: "Dark Green",
    plant_care:
      "ZZ’s like to dry out completely between waterings. They have an extremely efficient water retention mechanism, so you shouldn't water this plant until its soil has become dry throughout the pot. In low light environments or winter, this can mean watering as infrequently as once a month.",
    lighting_needs: "Bright to low indirect light",
    watering_needs: "Once/Twice per Week",
    soil_needs: "Well-draining",
    human_edible: false,
    pet_edible: false,
    USDA_zone: "9-10",
  },
  {
    plant_id: 3,
    common_name: "Spider Plant, Airplane Plant",
    image_url:
      "https://img.crocdn.co.uk/images/products2/pl/20/00/02/72/pl2000027236.jpg",
    family_name: "Asparagaceae",
    scientific_name: "Chlorophytum Comosum",
    foliage_color: "Blue/Green",
    plant_care:
      "Provide them with well-drained soil and bright, indirect light and they will flourish. Water them well but do not allow the plants to become too soggy, which can lead to root rot. In fact, spider plants prefer to dry out some between waterings.",
    lighting_needs: "Shade, Morning Sun (Semi Shade)",
    watering_needs: "Once/Twice per Week",
    soil_needs: "Sandy, Loam, Well-draining ",
    human_edible: true,
    pet_edible: false,
    USDA_zone: "9-11",
  },
  {
    plant_id: 4,
    common_name: "Aloe Vera, Aloe V, Medicine Plant, True Aloe, Burn Plant",
    image_url:
      "https://img.crocdn.co.uk/images/products2/pl/20/00/02/77/pl2000027723.jpg",
    family_name: "Asphodelaceae",
    scientific_name: "Aloe Barbadensis Miller",
    foliage_color: "Blue/Green, Gray/Silver",
    plant_care:
      "From May to September, you can bring your plant outdoors without any problems, but do bring it back inside in the evening if nights are cold.",
    lighting_needs: "Bright, indirect sunlight or artificial light",
    watering_needs: "Once Every 3 Weeks (more sparingly during the winter)",
    soil_needs: "Sandy, Gravelly",
    human_edible: true,
    pet_edible: false,
    USDA_zone: "10-11",
  },
  {
    plant_id: 5,
    common_name: "Peace Lily, P. lily, Spathe Flower",
    image_url:
      "https://i.etsystatic.com/15265690/r/il/9c7e6c/1211862072/il_570xN.1211862072_3kuo.jpg",
    family_name: "Araceae",
    scientific_name: "Spathiphyllum",
    foliage_color: "Blue/Green",
    plant_care:
      "Keep the soil moist, but do not overwater. Peace lilies are sensitive to chemicals commonly found in tap water, such as fluoride, which may cause brown leaf tips. Peace lilies enjoy high humidity. Peace lilies are not heavy feeders, so fertilize only occasionally.",
    lighting_needs: "Part Sun Shade",
    watering_needs: "Once/Twice per Week",
    soil_needs: "Peat-based potting mix with perlite, sand, or bark",
    human_edible: false,
    pet_edible: false,
    USDA_zone: "11-12",
  },
  {
    plant_id: 6,
    common_name: "Jade, Money, Lucky, Friendship",
    image_url:
      "https://images.crateandbarrel.com/is/image/Crate/PottedJadePlantSHF16",
    family_name: "Crassulaceae",
    scientific_name: "Crassula Ovata",
    foliage_color: "Blue/Green",
    plant_care:
      "Jade plants are succulents (they hold water in their leaves), so they don't do well when sitting in constantly moist soil, so let the top 1 to 2 inches of soil dry out between waterings.",
    lighting_needs: "Direct Sun Light",
    watering_needs: "Once Every 2-3 Weeks",
    soil_needs: "Sandy",
    human_edible: false,
    pet_edible: false,
    USDA_zone: "10-11",
  },
  {
    plant_id: 7,
    common_name: "Grape Ivy",
    image_url:
      "https://plants.buchanansplants.com/Content/Images/Photos/J338-08.jpg",
    family_name: "Vitaceae",
    scientific_name: "Cissus Rhombifolia",
    foliage_color: "Dark Green",
    plant_care:
      "Move it inside in fall when temperatures dip below 50°F. Grape ivy grows best when its soil dries out slightly between waterings. Only water when the soil is dry to the touch, then water the plant thoroughly, allowing excess water to drain out of the bottom of the pot.",
    lighting_needs: "Full Shade to Partial Sun",
    watering_needs: "Once/Twice per Week",
    soil_needs: "Well-draining",
    human_edible: true,
    pet_edible: true,
    USDA_zone: "10-11",
  },
  {
    plant_id: 8,
    common_name:
      "Lucky Bamboo, Ander's Dracaena, Ribbon Dracaena, Curly Bamboo, Chinese Water Bamboo, Goddess of Mercy's plant, Belgian Evergreen, Ribbon Plant",
    image_url:
      "https://balconygardenweb-lhnfx0beomqvnhspx.netdna-ssl.com/wp-content/uploads/2018/03/9.-Lucky-Bamboo.jpg",
    family_name: "Vitaceae",
    scientific_name: "Cissus Rhombifolia",
    foliage_color: "Dark Green",
    plant_care:
      "Low humidity can cause leaf tips to turn brown as well. Mist the leaves of the lucky bamboo every couple of days if lack of humidity is a problem.",
    lighting_needs: "Bright to low indirect light",
    watering_needs: "Once a Week",
    soil_needs: "Well-draining, rich potting",
    human_edible: true,
    pet_edible: false,
    USDA_zone: "10-11",
  },
  {
    plant_id: 9,
    common_name: "Fiddle-Leaf Fig, Banjo Fig",
    image_url:
      "https://cdn.shopify.com/s/files/1/0013/3529/6118/products/gallery_fiddle-leaf-bedroom_02b.jpg",
    family_name: "Moraceae",
    scientific_name: "Ficus Lyrata",
    foliage_color: "Dark Green",
    plant_care:
      "Fiddle Leaf Fig Trees prefer to dry out slightly between waterings, and while they take a good deal of water to keep healthy, soggy soil will drown the plant.",
    lighting_needs: "Bright to low indirect light",
    watering_needs: "Once a Week",
    soil_needs: "Fast-draining, well-aerated",
    human_edible: false,
    pet_edible: false,
    USDA_zone: "9-11",
  },
  {
    plant_id: 10,
    common_name: "Laceleaf, Tailflower, Flamingo Flower",
    image_url:
      "http://mobileimages.lowes.com/product/converted/022532/022532211556.jpg",
    family_name: "Araceae",
    scientific_name: "Anthurium",
    foliage_color: "Green",
    plant_care:
      "Make sure to water your anthurium plant regularly, but don't over water. Only water your anthurium when the soil is dry to the touch. The plant is susceptible to root rot, so too much water can cause the roots to die.",
    lighting_needs: "Sun to Partial Shade, Light Shade",
    watering_needs: "Once a Week",
    soil_needs: "Well-draining",
    human_edible: true,
    pet_edible: false,
    USDA_zone: "10-11",
  },
  {
    plant_id: 11,
    common_name: "Common Ivy, English Ivy",
    image_url:
      "https://i.pinimg.com/originals/17/27/f7/1727f7d34540854842b5ec096adbfe7b.jpg",
    family_name: "Araliaceae",
    scientific_name: "Hedera helix",
    foliage_color: "Evergreen",
    plant_care:
      "When watering your ivy, always check the soil before adding water. Ivies prefer to be kept slightly on the dry side, so let the soil dry out some (dry to the touch on top) before you water your ivy plant again.",
    lighting_needs: "Bright to low indirect light",
    watering_needs: "Once/Twice per Week",
    soil_needs: "Well-draining",
    human_edible: false,
    pet_edible: false,
    USDA_zone: "4-9",
  },
  {
    plant_id: 12,
    common_name:
      "Angel's Wings, Bunny Ears Cactus, Bunny Cactus or Polka-dot Cactus",
    image_url:
      "https://homemydesign.com/wp-content/uploads/2014/03/minimalist-cactus-indoor-planters.jpg",
    family_name: "Cactaceae",
    scientific_name: "Opuntia Microdasys",
    foliage_color: "n/a",
    plant_care:
      "Water the plant when the top one inch of soil is dry. Allow the water to drain out of the pot and remove any excess from the saucer. Fertilize the plant every other water period during spring and summer with a diluted houseplant food or cactus formula.",
    lighting_needs: "Sun to Partial Shade, Light Shade",
    watering_needs: "Once Every 3 Weeks (more sparingly during the winter)",
    soil_needs: "Potting, Sandy, Peat Moss",
    human_edible: true,
    pet_edible: false,
    USDA_zone: "9-11",
  },
];

db.Plant.remove({})
  .then(() => db.Plant.collection.insertMany(plantSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Access.remove({})
  .then(() => db.Access.collection.insertMany(accessSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Plantsearch.remove({})
  .then(() => db.Plantsearch.collection.insertMany(plantsearchSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
