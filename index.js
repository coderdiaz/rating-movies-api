const http = require('http');

const server = http.createServer((request, response) => {
  // Logic businness
  if (request.url === '/') {
    switch(request.method) {
      case 'GET':
        response.write('Hello to my Node server');
        break;
      case 'POST':
        response.write('New resource created');
        break;
    }
  } else if (request.url === '/user') {
    switch(request.method) {
      case 'GET':
        response.write('Hello to users section');
        break;
      case 'POST':
        response.write('New user created');
        break;
    }
  }
  return response.end();
});

server.listen(3000, () => {
  console.log('The app is listening on port 3000');
});