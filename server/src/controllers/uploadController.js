const fs = require("fs");
const Papa = require("papaparse");
const { extractCRMData } = require("../services/geminiService");

const uploadCSV = async (req, res) => {
  try {
    console.log("========== API HIT ==========");

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    console.log("✅ File received:", req.file.originalname);

    const csv = fs.readFileSync(req.file.path, "utf8");

    const parsed = Papa.parse(csv, {
      header: true,
      skipEmptyLines: true,
    });

    console.log("✅ Parsed rows:", parsed.data.length);

    // Try Gemini AI
    try {
      console.log("🤖 Sending data to Gemini...");

      const crmData = await extractCRMData(parsed.data);

      console.log("✅ Gemini Success");

      return res.json({
        success: true,
        aiDisabled: false,
        totalRows: parsed.data.length,
        data: crmData,
      });

    } catch (err) {

      console.log("⚠️ Gemini unavailable. Using fallback.");

      // Fallback: return parsed CSV directly
      return res.json({
        success: true,
        aiDisabled: true,
        totalRows: parsed.data.length,
        message: "Gemini quota exceeded. Returning parsed CSV data.",
        data: parsed.data,
      });
    }

  } catch (error) {
    console.error("UPLOAD ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  uploadCSV,
};