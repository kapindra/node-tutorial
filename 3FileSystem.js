const fs = require("fs");

const file = "target.txt";

fs.watch(file, () => {
  console.log("file changed");
});
