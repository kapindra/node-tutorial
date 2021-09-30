// HERE WE GET A ROUTE
// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// const PORT = 8000;

// app.listen(PORT, () => {
//   console.log(`Node JS API listening on port: ${PORT}`);
// });

//HOWEVER WE CAN MANAGE ROUTES AND DESTRUCTURE OUR CODE

const express = require("express");

const app = express();

const { getPosts } = require("./routes/getPosts");

app.get("/", getPosts);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Node JS API listening on port: ${PORT}`);
});
