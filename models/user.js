const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var bcrypt = require("bcrypt-nodejs");

const userSchema = new Schema(
  {
    user_id: { type: String, required: true },
    email: { type: String, required: true },
    zone: String,
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  { collection: "users" }
);

userSchema.methods.encryptPassword = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};

userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
const User = mongoose.model("Users", userSchema);

module.exports = User;
