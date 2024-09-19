const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
const jwt = require("jsonwebtoken");
const express = require("express");
const { singularize } = require("sequelize/lib/utils");

const signupschema = new mongoose.Schema({
  Name: String,
  Email: String,
  Password: String,
});

const signupschemas = mongoose.model("signupschemas", signupschema);

const Blogsschema = new mongoose.Schema({
  Blog_Title: String,
  Blog_Post: String,
});

const BlogsModel = mongoose.model("BlogsModel", Blogsschema);

// signupschemas.methods.generateToken = function () {};

module.exports = { signupschemas, BlogsModel };
