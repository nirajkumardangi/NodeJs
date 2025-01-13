const fs = require('fs');

// rename file name
fs.rename('abcd.txt', 'hey.txt', function (err) {
  if (err) console.log(err);
  else console.log('file renamed');
});
