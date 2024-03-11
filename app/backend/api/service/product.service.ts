import { Product } from "../repositories/product/product.type";
import ProductRepository from "../repositories/product/product-repository.repository";
import { productDTO, productDtoToProduct } from "./product.dto";

export default class ProductService {
   constructor(
         private repository:ProductRepository = new ProductRepository()

   ) {}

      public async getAllProducts(){
         const products = await this.repository.findAll();
         if(!products) return {status:'BAD_REQUEST', message: "no products have be"}
         return {status:'OK', data: products}
      }

      public async createProduct(req:productDTO){

         if(Array.isArray(req)){
         const newProducts = productDtoToProduct(req) as Product[]    
         const createdProducts = await this.repository.bulkCreate(newProducts);
         
         if(!createdProducts) return {status:'BAD_REQUEST', message: "no products have been created"}
         return {status:'OK', data: createdProducts}
         }

         const newProduct = productDtoToProduct(req) as Product
         const createdProduct = await this.repository.create(newProduct);
  
         
         if(!createdProduct) return {status:'BAD_REQUEST', message: "no products have been created"}
         return {status:'OK', data: createdProduct}
      }

      public async updateProduct(req:productDTO, id: number){
         const updateData = productDtoToProduct(req) as Product;
         const updatedProduct = await this.repository.update(updateData, id)
      
         if(!updatedProduct) return {status:'BAD_REQUEST', message: "no products have been updated"}

         return {status:'OK', data: updatedProduct}

      }

      public async deleteProduct(id:number){{

         const deletedProduct = await this.repository.delete(id)
      
         if(deletedProduct) return {status:'BAD_REQUEST', message: "no products have been deleted"}

         return {status:'OK'}

      }
      }}

