const http = require('http');

const server = http.createServer((req, res) => {
 console.log(req.method, req.url);

});

server.listen(3001, () => {
  console.log("Server is running on PORT 3001");
});
