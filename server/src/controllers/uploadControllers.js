const path = require("path");
const parseCSV = require("../services/csvParser");

exports.uploadCSV = (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "No CSV uploaded",
    });
  }

  const filePath = path.join(process.cwd(), "uploads", req.file.filename);

  const records = parseCSV(filePath);

  res.status(200).json({
    success: true,
    totalRecords: records.length,
    preview: records.slice(0, 10),
  });
};