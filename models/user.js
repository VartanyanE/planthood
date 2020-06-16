const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var bcrypt = require("bcrypt-nodejs");

const userSchema = new Schema(
  {
    user_id: { type: String, required: true },
    user_name: { type: String, required: true },
    zone: String,
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
    plants: [{
      type: Schema.Types.ObjectId,
      ref: "Plantsearch"
    }]
  },
  { collection: "users" }
);

userSchema.methods.encryptPassword = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};

userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.pre('save', async function(next){
  this.password = await this.encryptPassword(this.password);
  next();
})
const User = mongoose.model("User", userSchema);

module.exports = User;
