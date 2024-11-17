import http from 'node:http';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  
  const jsonRes = JSON.stringify({ location: 'Mars' });
  res.end(jsonRes);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
