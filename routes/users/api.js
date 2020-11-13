const express = require("express");
const app = express.Router();

app.get("/", async (req, res) => {
  try {
    res.status(200).json({
      message: "/users/api welcome",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error",
    });
  }
});

module.exports = app;
