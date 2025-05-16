// sending html request
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My Node.js Server</title>
      </head>
      <body>
        <h1>Hello from Node.js!</h1>
        <p>This is an HTML response.</p>
      </body>
    </html>
  `);
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
