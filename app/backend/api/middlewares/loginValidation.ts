import { Request, Response, NextFunction } from 'express';
import { HTTPStatus } from '../controllers/http-status.enum';

export default function loginValidation(req: Request, res: Response, next: NextFunction) {
  const payload = req.body;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRequiredLength = 6;

  if (!emailRegex.test(payload.email) || payload.password.length < passwordRequiredLength) {
    return res.status(HTTPStatus.BAD_REQUEST).json({ message: 'Invalid email or password' });
  }
  next();
}
