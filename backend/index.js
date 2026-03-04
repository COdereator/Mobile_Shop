const express = require("express");
const multer = require("multer");
const adminRouter = require("./router/adminRouter");
const orderRouter = require("./router/orderRouter");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const randomString = (length) => {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, randomString(10) + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Only JPEG and PNG files are allowed"), false);
  }
};

app.use(multer({ storage, fileFilter }).single("file"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/admin", adminRouter);
app.use("/orders", orderRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// backgroundImage Change
// new phone model add
// orders
