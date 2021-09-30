const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hellow World from Express JS.");
});

app.listen(3000);
