const fs = require("fs");

const file = "target.txt";

const errHandler = (err) => console.log(err);

const dataHandler = (data) => console.log(data.toString());

fs.readFile(file, (err, data) => {
  if (err) errHandler(err);
  dataHandler(data);
});

console.log("This line to execute first.");
