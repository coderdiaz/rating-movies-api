import jwt from 'jsonwebtoken';
import User from '../models/user';

const RoleMiddleware = (allowedRoles) => {
  return async (req, res, next) => {
    const token = req.headers.authorization;
    const { email } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ email }).exec();
    if (!user) {
      return res.status(401).json({
        message: 'UNAUTHORIZED',
      });
    }
    const { roles } = user;
    let isValid = false;
    roles.forEach(rol => {
      if (allowedRoles.includes(rol)) {
        isValid = true;
        return; 
      }
    });
    
    if (!isValid) {
      return res.status(401).json({
        message: 'UNAUTHORIZED',
      })
    };
    next();
  };
}

export default RoleMiddleware;
