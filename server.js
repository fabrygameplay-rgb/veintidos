const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("Public"));

const deadLine = new Date("2026-06-17T20:00:00Z").toISOString();

app.get("/", (req,res) => {
    res.send("PetWatch backend functioning correctly");
});

app.get("/deadLine", (req,res) => {
    res.json({ deadLine });
});

const PORT = 12000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
});