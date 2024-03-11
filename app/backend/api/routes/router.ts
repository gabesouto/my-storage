import { Router } from 'express';
import productRouter from './product.route';
import userRouter from './user.route';

const router = Router();

router.use(productRouter);
router.use(userRouter);

export default router;
