const fs = require('fs');

// remove folder
fs.rm('lolo', { recursive: true }, function (err) {
  if (err) console.log(err);
  else console.log('deleted');
});
