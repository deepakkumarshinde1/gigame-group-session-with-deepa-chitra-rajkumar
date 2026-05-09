const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  city: { type: String },
  pincode: { type: Number },
});
const UserSchema = new mongoose.Schema({
  user: { type: String },
  email: { type: String, unique: true },
});

let UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
