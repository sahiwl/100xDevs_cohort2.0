const fs = require("fs");

fs.writeFile("a.txt", " gibberish is another word for trash.", function (err, data) {
  console.log(data);
});