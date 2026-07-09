const uploadRoutes = require("./routes/uploadRoutes");

app.use(express.json());
app.use("/api", uploadRoutes);

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "GrowEasy Backend Running Successfully"
  });
});

module.exports = app;