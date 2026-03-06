const cloudinary = require("../config/cloudinary");
const Background = require("../models/imageModel");

exports.changeBackground = async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).send("No file uploaded");

    const previousBackground = await Background.findOne();

    if (previousBackground) {
      await cloudinary.uploader.destroy(previousBackground.publicId);
      await Background.deleteOne({ _id: previousBackground._id });
    }

    const newBackground = new Background({
      imageUrl: file.path,
      publicId: file.filename
    });

    await newBackground.save();

    res.json({
      message: "Background updated successfully",
      imageUrl: file.path,
      publicId: file.filename,
    });

  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating background image");
  }
};

exports.getImage = async (req,res) => {
  try {
    const image = await Background.findOne();
    res.json({
      message: "Background updated successfully",
      imageUrl: image.imageUrl,
    })
  } catch (error) {
    console.error(err);
    res.status(500).send("Error updating background image");
  }
}