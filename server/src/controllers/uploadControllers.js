exports.uploadCSV = (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "No CSV uploaded",
    });
  }

  res.status(200).json({
    success: true,
    message: "CSV uploaded successfully",
    file: req.file.filename,
  });
};