import { Request, Response } from 'express';
import { HTTPStatus } from './http-status.enum';
import ProductService from '../service/product.service';

export default class ProductController {

   constructor(
      private productService: ProductService = new ProductService()
   ) {}

   public getAllProducts = async (req: Request, res:Response) => {
      const produtcsResponse = await this.productService.getAllProducts()

      if(produtcsResponse.status !== "OK"){
         return res.status(HTTPStatus.BAD_REQUEST).json(produtcsResponse.data)
      }

      return res.status(HTTPStatus.OK).json(produtcsResponse.data)
   }

   public async createProduct(req: Request, res:Response){
      const productCreated = await this.productService.createProduct(req.body)

      if(productCreated.status !== "OK"){
         return res.status(HTTPStatus.BAD_REQUEST).json(productCreated.data)
      }

      return res.status(HTTPStatus.CREATED).json(productCreated.data)
   }

   public async updateProduct(req: Request, res: Response){
      const id = req.params.id as unknown as number;
      const productUpdated = await this.productService.updateProduct(req.body, id )

      if(productUpdated.status !== "OK"){
         return res.status(HTTPStatus.BAD_REQUEST).json(productUpdated.data)
      }

      return res.status(HTTPStatus.OK).json(productUpdated.data)
   }

   public async deleteProduct(req: Request, res:Response){
      
      const id = req.params.id as unknown as number; 
      const productDeleted = await this.productService.deleteProduct(id)

      if(productDeleted.status !== "OK"){
         return res.status(HTTPStatus.BAD_REQUEST).json(productDeleted.message)
      }

      return res.status(HTTPStatus.OK).json()
   }
   }
