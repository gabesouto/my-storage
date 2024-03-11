import { Product } from "./product.type"

export interface ProductRepositoryInterface {
   findAll(): Promise<Product[]>
   create(req:Product): Promise<Product>
   update(req:Product, id:number): Promise<Product | string>
   delete(id:number): Promise<string | null>
}