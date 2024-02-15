// routes/auth.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// User Authentication Route - Login
router.post("/login", async (req, res) => {
  // Implementation details
});

// User Authentication Route - Register
router.post("/register", async (req, res) => {
  // Implementation details
});

module.exports = router;
