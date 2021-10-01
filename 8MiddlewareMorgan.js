const express = require("express");
const app = express();
const morgan = require("morgan");

const { getPosts } = require("./routes/getPosts");

app.use(morgan("dev"));

app.get("/", getPosts);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Node JS API listening on port: ${PORT}`);
});
