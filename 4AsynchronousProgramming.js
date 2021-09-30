const fs = require("fs");

const file = "target.txt";

fs.readFile(file, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
  // This function will load later as it node knows that it will take some time.
});

console.log("This text will appear first.");
