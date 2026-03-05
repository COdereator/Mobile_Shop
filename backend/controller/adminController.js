const cloudinary = require("../config/cloudinary");

let previousImagePublicId = null;

exports.changeBackground = async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).send("No file uploaded");

    if (previousImagePublicId) {
      await cloudinary.uploader.destroy(previousImagePublicId);
    }

    previousImagePublicId = file.filename;

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