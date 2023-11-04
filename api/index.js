const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var cors = require("cors");
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get("/myname", (req, res) => {
  res.send("Preston Roesslet");
});

var people = [];

app.post("/addPerson", (req, res) => {
  people.push(req.body.name);
  res.status(200).json({ message: "Person added successfully" });
});

app.get("/getPeople", (req, res) => {
  res.status(200).json({ people: people });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
