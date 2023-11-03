const express = require("express");

const app = express();

app.get("/myname", (req, res) => {
  res.send("Preston Roesslet");
});

app.get("/myfavoritelanguages", (req, res) => {
  var langauges = {
    name: "Preston",
    languages: ["Java", "Javascript"],
  };

  res.status(200).json(langauges);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
