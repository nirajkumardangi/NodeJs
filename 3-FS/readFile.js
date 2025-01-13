const fs = require('fs');

// read file
fs.readFile('abcd.txt', 'utf-8', function (err, data) {
  if (err) console.log(err);
  else console.log(data);
});
