import { Product } from "./product.type";
import SequelizeProduct from "../../models/product.model";

export default class ProductRepository {

   private model = SequelizeProduct

   public async findAll(): Promise<Product[]> {
      return this.model.findAll()

   }

   public async create(req:Product): Promise<Product> {
      return this.model.create({
         name: req.name,
         brand: req.brand,
         color: req.color,
         price: req.price,
         model: req.model
      })

   }
   
public async bulkCreate(req: Product[]): Promise<Product[]> {
  const newProducts: Product[] = [];
  
  await Promise.all(req.map(async product => {
    const { name, brand, color, price, model } = product;

    const createdProduct = await this.model.create({
      name,
      brand,
      color,
      price,
      model,
    });

    newProducts.push(createdProduct);
  }));

  return newProducts;
}


   public async update(req:Product, id: number): Promise<Product | string>{
      await this.model.update(req, {
      where: {id: id}
      })

      const updatedProduct = await this.model.findByPk(id)
      if(!updatedProduct) return "product not found"

      return updatedProduct as Product;
   }

   public async delete(id:number){
      console.log(id);
      
     const productToDelete = await this.model.findByPk(id)

     
     if(!productToDelete) return "book not found"
     
     productToDelete?.destroy()

      return null
   }
}