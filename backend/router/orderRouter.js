const express = require("express");

const orderRouter = express.Router();

orderRouter.get("/dashboard", (req, res) => {
  res.send("Order Dashboard");
});

module.exports = orderRouter;
