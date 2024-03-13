import { Router, Request, Response } from 'express';
import ProductController from '../controllers/product.controller';

 

const productRouter = Router();
const productController = new ProductController()

productRouter.get(
  '/products', (req: Request, res: Response) => productController.getAllProducts(req, res)
);

productRouter.post(
  '/products', (req: Request, res: Response) => productController.createProduct(req, res)
);

productRouter.put(
  '/products/:id/', (req: Request, res: Response) => productController.updateProduct(req, res)
);


productRouter.delete(
  '/products/:id/',  (req: Request, res: Response) => productController.deleteProduct(req, res)
);

export default productRouter;