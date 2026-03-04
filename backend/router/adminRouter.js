const express = require("express");
const { changeBackground } = require("../controller/adminController");

const adminRouter = express.Router();

adminRouter.get("/dashboard", (req, res) => {
  res.send("Admin Dashboard");
});

adminRouter.post("/changeBackground", changeBackground);

module.exports = adminRouter;
