const fs = require("fs");
const Papa = require("papaparse");

const uploadCSV = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const csvData = fs.readFileSync(req.file.path, "utf8");

    const parsedData = Papa.parse(csvData, {
      header: true,
      skipEmptyLines: true,
    });

    res.status(200).json({
      success: true,
      totalRows: parsedData.data.length,
      preview: parsedData.data,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to parse CSV",
    });
  }
};

module.exports = {
  uploadCSV,
};