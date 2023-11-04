const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Allow cross-origin requests from http://localhost:5173
var cors = require("cors");
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Parse incoming request bodies as JSON. This will be
// what allows us to access the data in the request body
app.use(bodyParser.json());

// GET request endpoint to retrieve my name
app.get("/myname", (req, res) => {
  res.send("Preston Roesslet");
});

// Since we do not have a database for this workshop, we will
// use a simple array to store a list of people in memory.
// This array will be reset every time the server restarts.
var people = [];

// Post request endpoint to add a person to the people array
app.post("/addPerson", (req, res) => {
  people.push(req.body.name);
  res.status(200).json({ message: "Person added successfully" });
});

// GET request endpoint to retrieve all people in the people array
app.get("/getPeople", (req, res) => {
  res.status(200).json({ people: people });
});

// Start app listening on port 3000
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
