const rootRoute = require('./routes/root.route');
const userRoute = require('./routes/user.route');

module.exports = {
  config: (req, res) => {
    if (req.url === '/') rootRoute(req, res);
    if (req.url === '/user') userRoute(req, res);
    // else
    //   return res.end('Not found');
  },
};
