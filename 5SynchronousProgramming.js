const fs = require("fs");

const file = "target.txt";

const data = fs.readFileSync(file);

console.log(data.toString());

console.log(
  "This text now will be displayed later as the previous data is shown first as we assigned synchronous function to it."
);
