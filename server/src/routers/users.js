var express = require("express");
var User = require("../models/userModel");
var router = new express.Router();
var sortUser = require("../utils/sort")

// route to login
router.post("/login", async (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  try {
    var user = await User.findOne(email,password);
    if(user){
      return res.status(200).send(user);
    }
    return res.status(400).send("Invalid Credentials!");
  } catch (e) {
    return res.status(500).send(e);
  }
});

// route to fetch all the users
router.get("/users", async (req, res) => {
  try {
    var users = await User.find();
    if (!users) {
      return res.status(404).send();
    }
    users = sortUser.sortUserByName(users);
    return res.status(200).send(users);
  } catch (e) {
    return res.status(500).send(e);
  }
});

// route to get a user by id
router.get("/users/:userId", async (req, res) => {
  try {
    var user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(400).send();
    }
    return res.status(200).send(user);
  } catch (e) {
    return res.status(500).send(e);
  }
});

module.exports = router;
