const fs = require('fs');

// append file
fs.appendFile('abcd.txt', ' Appended: My name is john', function (err) {
  if (err) console.log(err);
  else console.log('appended data');
});
