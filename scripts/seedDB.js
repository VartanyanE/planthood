const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/planthood");

const plantSeed = [
  {
    user_id: "gin@luthercorp.com",
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
    user_id: "vartanyan.emanuil@gmail.com",
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
    user_id: "vartanyan.emanuil@gmail.com",
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
    user_id: "gin@luthercorp.com",
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
    user_id: "vartanyan.emanuil@gmail.com",
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
