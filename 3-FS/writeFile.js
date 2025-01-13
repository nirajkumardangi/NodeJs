const fs = require('fs');

// create file
fs.writeFile('abc.txt', 'hey hello', function (err) {
  if (err) console.log(err);
  else console.log('file created');
});
