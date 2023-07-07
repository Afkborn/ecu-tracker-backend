const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide an Username!"],
    unique: [true, "Username Exist"],
  },
  password: {
    type: String,
    required: [true, "Please provide a Password!"],
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  
});

module.exports = mongoose.model("User", UserSchema);
