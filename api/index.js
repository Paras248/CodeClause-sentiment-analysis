require("dotenv").config();
const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const CustomError = require("./CustomError");

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.post("/api/analyze", (req, res, next) => {
    if (!req.text) {
        return next(new CustomError("Please provide text to analyze"));
    }
});

app.listen(PORT, () => {
    console.log("Server started successfully at port " + PORT);
});
