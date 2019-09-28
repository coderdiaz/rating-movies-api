import jwt from 'jsonwebtoken';

const AuthMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({
      message: 'UNAUTHORIZED',
    });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    return res.status(401).json({
      message: 'UNAUTHORIZED',
    });
  }
};

export default AuthMiddleware;