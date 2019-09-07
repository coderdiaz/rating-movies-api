const fs = require('fs');

const rootRoute = (req, res) => {
  if (req.method === 'GET') {
    const data = fs.readFileSync('./data.json');
    // json
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.write(data);
  } else if (req.method === 'POST') {
    res.write('Created /');
  }
  return res.end();
}

module.exports = rootRoute;
