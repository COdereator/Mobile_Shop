exports.changeBackground = (req, res) => {
  // Logic for changing background image
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).send("No file uploaded");
    }
  } catch (error) {
    res.status(500).send("Error changing background image");
  }
  res.send("Background image changed successfully");
};
