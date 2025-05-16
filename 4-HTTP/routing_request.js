// Routing Requests
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  if (req.url === '/') {
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>My Node.js Server with Routing</title>
        </head>
        <body>
          <h1>Mantra.com</h1>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/men'>Men</a></li>
            <li><a href='/women'>Women</a></li>
            <li><a href='/kids'>Kids</a></li>
            <li><a href='/cart'>Cart</a></li>
          </ul>
        </body>
      </html>
    `);
  } else if (req.url === '/men') {
    res.end('<h1>Men Section</h1><a href="/">Back to Home</a>');
  } else if (req.url === '/women') {
    res.end('<h1>Women Section</h1><a href="/">Back to Home</a>');
  } else if (req.url === '/kids') {
    res.end('<h1>Kids Section</h1><a href="/">Back to Home</a>');
  } else if (req.url === '/cart') {
    res.end('<h1>Your Cart is Empty</h1><a href="/">Back to Home</a>');
  } else {
    res.statusCode = 404;
    res.end('<h1>404 - Page Not Found</h1><a href="/">Back to Home</a>');
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
