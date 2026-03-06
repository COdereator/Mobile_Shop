const express = require("express");
const multer = require("multer");
const mongoose = require('mongoose')
const adminRouter = require("./router/adminRouter");
const orderRouter = require("./router/orderRouter");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./config/cloudinary");
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "backgrounds",
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
  },
});

app.use(multer({ storage }).single("background"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/admin", adminRouter);
app.use("/orders", orderRouter);

mongoose.connect('mongodb://localhost:27017/mobile_shop').then(()=>{
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
})

// backgroundImage Change
// new phone model add
// orders