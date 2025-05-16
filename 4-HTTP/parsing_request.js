// parsing request
const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/submit') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString(); // Convert buffer to string
    });

    req.on('end', () => {
      const parsedData = querystring.parse(body); // Parse form data
      console.log(parsedData);

      const name = parsedData.username;
      const gender = parsedData.gender;
      const password = parsedData.password;

      // Proper response
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(
        `<h1>Namaste ${name}! You are ${gender}. (Password: ${password})</h1>`
      );
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <form method="POST" action='/submit' >
        <label for='username'>Username: </label>
        <input type='text' id='username' name='username' placeholder='username' required/>
        <br>
        <br>
        <label for='password'>Password: </label>
        <input type='password' id='password' name='password' placeholder='password' required/>
        <br>
        <br>
        Gender: <br>
        <label for='male'>Male: </label>
        <input type='radio' id='male' name='gender' value='male' />
        <label for='male'>Female: </label>
        <input type='radio' id='female' name='gender' value='female' />
        <br>
        <br>
        <input type='submit' value='Submit'/>
      </form>
    `);
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
