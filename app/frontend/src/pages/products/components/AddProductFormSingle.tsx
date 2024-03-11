import { ChangeEvent } from "react";
import { Product } from "../../../services/requests";

interface AddProductFormSingleProps {
  newProduct: Product;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onAddProduct: () => void;
}

export default function AddProductFormSingle({ newProduct, onInputChange, onAddProduct }: AddProductFormSingleProps) {
  
  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Add new product</h2>
      <div className="flex">
        <input type="text" name="name" value={newProduct.name} onChange={onInputChange} className="mr-2 w-2/4" placeholder="Product name" />
        <input type="text" name="color" value={newProduct.color} onChange={onInputChange} className="mr-2 w-2/4" placeholder="Color" />
        <input type="text" name="model" value={newProduct.model} onChange={onInputChange} className="mr-2 w-2/4" placeholder="Model" />
        <input type="text" name="brand" value={newProduct.brand} onChange={onInputChange} className="mr-2 w-2/4" placeholder="Brand" />
        <input type="number" name="price" value={newProduct.price} onChange={onInputChange} className="mr-2 w-2/4" placeholder="Price" />
        <button onClick={onAddProduct} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
      </div>
    </div>
  );
}
