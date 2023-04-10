const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    accNumber: {
      type: String,
      maxLength: 20,
      required : true
    },
    accName: String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;
