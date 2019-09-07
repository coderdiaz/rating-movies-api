const http = require('http');
const router = require('./router');

const server = http.createServer(router.config);

server.listen(3000, () => {
  console.log('The app is listening on port 3000');
});