const express = require("express");
const { changeBackground, getImage } = require("../controller/adminController");

const adminRouter = express.Router();

adminRouter.get("/dashboard", (req, res) => {
  res.send("Admin Dashboard");
});

adminRouter.post("/changeBackground", changeBackground);

adminRouter.get("/getImage", getImage);

module.exports = adminRouter;
