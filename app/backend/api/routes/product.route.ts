import { Router, Request, Response } from 'express';
import ProductController from '../controllers/product.controller';
import { authMiddleware } from '../middlewares/auth-middleware';

const productRouter = Router();
const productController = new ProductController()

productRouter.get(
  '/products', authMiddleware, (req: Request, res: Response) => productController.getAllProducts(req, res)
);

productRouter.post(
  '/products', authMiddleware, (req: Request, res: Response) => productController.createProduct(req, res)
);

productRouter.put(
  '/products/:id/', authMiddleware, (req: Request, res: Response) => productController.updateProduct(req, res)
);


productRouter.delete(
  '/products/:id/', authMiddleware,  (req: Request, res: Response) => productController.deleteProduct(req, res)
);

export default productRouter;