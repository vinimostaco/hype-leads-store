  import { RequestHandler } from 'express';
  import jwt from 'jsonwebtoken';

  export const authMiddleware: RequestHandler = (req, res, next) => {
    const token = req.cookies?.token
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).json({ error: 'Token inválido' });
    }
  };
