const mongoose = require("mongoose");

const CarSchema = mongoose.Schema({
  vin: {
    type: String,
    required: [true, "Please provide a VIN!"],
    unique: [true, "VIN Exist"],
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: [true, "Please provide a Name!"],
  },
  user_manufacturer: {
    type: String,
    required: [true, "Please provide a Manufacturer!"],
  },
  user_model: {
    type: String,
    required: [true, "Please provide a Model!"],
  },
  user_year: {
    type: String,
    required: [true, "Please provide a Year!"],
  },
});

module.exports = mongoose.model("User", UserSchema);
