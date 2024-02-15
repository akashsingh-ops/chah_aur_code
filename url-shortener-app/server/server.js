// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const User = require("./models/User");
const authRoutes = require("./routes/auth");
const urlRoutes = require("./routes/urls");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/url_shortener", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Define Routes
app.use("/api/auth", authRoutes);
app.use("/api/urls", urlRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
