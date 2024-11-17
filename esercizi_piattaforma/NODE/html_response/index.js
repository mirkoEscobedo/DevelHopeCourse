import http from 'node:http';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>Message</h1></body></html>');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
