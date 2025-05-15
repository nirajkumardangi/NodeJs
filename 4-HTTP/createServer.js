const http = require('http');

const server = http.createServer(function (req, res) {
  res.end('Serer is is Running');
});

server.listen(3000);
