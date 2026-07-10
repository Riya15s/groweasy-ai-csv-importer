const fs = require("fs");
const Papa = require("papaparse");

const parseCSV = (filePath) => {
  const file = fs.readFileSync(filePath, "utf8");

  const parsed = Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
  });

  return parsed.data;
};

module.exports = parseCSV;