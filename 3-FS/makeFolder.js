const fs = require('fs');

fs.mkdir('lolo', function (err) {
  if (err) console.log(err);
  else console.log('folder created');
});
