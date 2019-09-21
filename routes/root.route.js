const fs = require('fs');

const rootRoute = async (req, res) => {
  if (req.method === 'GET') {
    const data = fs.readFileSync('./data.json');
    // json
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.write(data);
    return res.end();
  } else if (req.method === 'POST') {
    const data = [];
    req.on('data', (chunk) => {
      return data.push(chunk);
    });
    req.on('end', () => {
      res.write('Created /' + data);
      res.end();
    });
  }
}

module.exports = rootRoute;
