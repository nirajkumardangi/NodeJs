const fs = require('fs');

// delete file
fs.unlink('abc.txt', function (err) {
  if (err) console.log(err);
  else console.log('delete');
});
