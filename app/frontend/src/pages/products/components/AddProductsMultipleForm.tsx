import { ChangeEvent, useState } from "react";
import { Product } from "../../../services/requests";

interface AddProductFormMultiProps {
  onAddProducts: (products: Product[]) => void;
}

export default function AddProductFormMulti({ onAddProducts }: AddProductFormMultiProps) {
  const [products, setProducts] = useState<Product[]>([{ name: "", color: "", model: "", brand: "", price: 0 }]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = e.target;
    const updatedProducts = [...products];
    updatedProducts[index] = { ...updatedProducts[index], [name]: value };
    setProducts(updatedProducts);
  };

  const handleAddProduct = () => {
    setProducts([...products, { name: "", color: "", model: "", brand: "", price: 0 }]);
  };

  const handleRemoveProduct = (index: number) => {
    const updatedProducts = [...products];

    if(updatedProducts.length > 1) {
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
    return
    }

    return alert("At least 1 product is needed")
    
    
  };

  const handleSubmit = () => {
    onAddProducts(products);
    setProducts([{ name: "", color: "", model: "", brand: "", price: 0 }]);
  };

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Add new products</h2>
      {products.map((product, index) => (
        <div key={index} className="flex mb-2">
          <input type="text" name="name" value={product.name} onChange={(e) => handleInputChange(e, index)} className="mr-2 w-2/4" placeholder="Product name" />
          <input type="text" name="color" value={product.color} onChange={(e) => handleInputChange(e, index)} className="mr-2 w-2/4 " placeholder="Color" />
          <input type="text" name="model" value={product.model} onChange={(e) => handleInputChange(e, index)} className="mr-2 w-2/4" placeholder="Model" />
          <input type="text" name="brand" value={product.brand} onChange={(e) => handleInputChange(e, index)} className="mr-2 w-2/4" placeholder="Brand" />
          <input type="number" name="price" value={product.price} onChange={(e) => handleInputChange(e, index)} placeholder="Price" />
          <button onClick={() => handleRemoveProduct(index)} className="bg-red-500 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded">Remove</button>
        </div>
      ))}
      <button onClick={handleAddProduct} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Another Product</button>
      <button onClick={handleSubmit} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2">Add All Products</button>
    </div>
  );
}
