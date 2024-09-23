const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: { type: String, require: true, max: 7 },
    lastName: { type: String, require: true, max: 7 },
    email: { type: String, require: true },
    phoneNumber: { type: String, require: true, max: 10 },
    age: { type: Number, require: true },
    country: { type: String, require: true, max: 7 },
    gender: { type: String, max: 5, default: "Male" },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
