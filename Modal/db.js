const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const signupschema = new mongoose.Schema({
  Name: String,
  Email: String,
  Password: String,
});

const signupschemas = mongoose.model("signupschemas", signupschema);

module.exports = { signupschemas };
