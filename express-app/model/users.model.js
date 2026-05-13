const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  city: { type: String, trim: true },
  pincode: { type: Number, trim: true },
});
const UserSchema = new mongoose.Schema(
  {
    user: { type: String, required: true, trim: true },
    email: { type: String, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    address: AddressSchema,
  },
  {
    versionKey: false,
  },
);

let UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
