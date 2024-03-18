import React, { useState, useEffect } from 'react';
import { Product, requestData, requestNewProduct, requestProductUpdate, requestRemoveProduct } from '../../../services/requests'
import AddProductFormMulti from './AddProductsMultipleForm';

function ProductTable() {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState<Product>({
    name: '',
    color: '',
    model: '',
    brand: '',
    price: 0,
  });

  const [editingProductId, setEditingProductId] = useState<number | null>(null);
  const [editingProduct, setEditingProduct] = useState<Product>({
    name: '',
    color: '',
    model: '',
    brand: '',
    price: 0,
  });

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortByPrice, setSortByPrice] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const fetchProducts = await requestData(`${import.meta.env.VITE_API_URL}/products`);
      setProducts(fetchProducts);
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleInputChangeEditingProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditingProduct(prevProduct => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = async (productToAdd: Product) => {
    if (!productToAdd.name || !productToAdd.color || !productToAdd.model || !productToAdd.brand || productToAdd.price <= 0) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      const addedProduct = await requestNewProduct(`${import.meta.env.VITE_API_URL}/products`, productToAdd);
      setProducts(prevProducts => [...prevProducts, addedProduct]);
      setNewProduct({
        name: '',
        color: '',
        model: '',
        brand: '',
        price: 0,
      });
    } catch (error) {
      console.log(error);
    }
  };

const handleAddProducts = async (productsToAdd: Product[] | Product) => {
  try {
    if (!Array.isArray(productsToAdd)) {
      // Se for apenas um produto, chamamos a função handleAddProduct para adicionar um único produto
      await handleAddProduct(productsToAdd);
      return;
    }

    // Verificar se todos os campos estão preenchidos para todos os produtos
    for (const product of productsToAdd) {
      if (!product.name || !product.brand || !product.model || !product.color || product.price <= 0) {
        alert("Please complete all fields");
        return; // Parar a execução da função se algum campo estiver vazio
      }
    }

    // Se todos os campos estiverem preenchidos, construir o requestBody
    const requestBody = productsToAdd.map(product => ({
      name: product.name,
      brand: product.brand,
      model: product.model,
      data: [{
        price: product.price,
        color: product.color
      }]
    }));

    // Enviar a requisição com o requestBody
    const addedProducts = await requestNewProduct(`${import.meta.env.VITE_API_URL}/products`, requestBody);
    
    // Atualizar o estado dos produtos e limpar o estado do novo produto
    setProducts(prevProducts => [...prevProducts, ...addedProducts]);
    setNewProduct({
      name: '',
      color: '',
      model: '',
      brand: '',
      price: 0,
    });
    
  } catch (error) {
    console.log(error);
  }
};



  const handleEditProduct = (productId: number) => {
    setEditingProductId(productId);
    const productToEdit = products.find(product => product.id === productId);
    if (productToEdit) {
      setEditingProduct(productToEdit);
    }
  };

  const handleSaveEdit = async () => {
    try {
      await requestProductUpdate(`${import.meta.env.VITE_API_URL}/products/${editingProductId}`, editingProduct);
      setProducts(prevProducts =>
        prevProducts.map(product =>
          product.id === editingProductId ? editingProduct : product
        )
      );
      setEditingProductId(null);
      setEditingProduct({
        name: '',
        color: '',
        model: '',
        brand: '',
        price: 0,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelEdit = () => {
    setEditingProductId(null);
    setEditingProduct({
      name: '',
      color: '',
      model: '',
      brand: '',
      price: 0,
    });
  };

  const handleRemoveProduct = async (id: number) => {
    try {
      // Remover o produto do servidor
      await requestRemoveProduct(`${import.meta.env.VITE_API_URL}/products/${id}`);

      // Remover o produto do estado
      setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

 const handleSortByPrice = () => {
  setSortByPrice(prevState => !prevState);
};

const filteredProducts = products.filter(product =>
  product.name.toLowerCase().includes(searchTerm.toLowerCase())
);
const sortedProducts = sortByPrice ? filteredProducts.sort((a, b) => b.price - a.price) : filteredProducts.sort((a, b) => a.price - b.price);

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className="relative overflow-x-auto w-8/12">
        <div className="mt-4 flex">
          <input type="text" value={searchTerm} onChange={handleSearchChange} className="mr-2 px-2 py-1 rounded border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Search by product name" />
          <button onClick={handleSortByPrice} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            {sortByPrice ? "Sort by price (High to Low)" : "Sort by price (Low to High)"}
          </button>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          {/* Table header */}
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Model
              </th>
              <th scope="col" className="px-6 py-3">
                Brand
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody>
            {sortedProducts.map((product, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">
                  {editingProductId === product.id ? (
                    <input type="text" name='name' value={editingProduct.name} onChange={handleInputChangeEditingProduct} />
                  ) : (
                    product.name
                  )}
                </td>
                <td className="px-6 py-4">
                  {editingProductId === product.id ? (
                    <input type="text" name='color' value={editingProduct.color} onChange={handleInputChangeEditingProduct} />
                  ) : (
                    product.color
                  )}
                </td>
                <td className="px-6 py-4">
                  {editingProductId === product.id ? (
                    <input type="text" name='model' value={editingProduct.model} onChange={handleInputChangeEditingProduct} />
                  ) : (
                    product.model
                  )}
                </td>
                <td className="px-6 py-4">
                  {editingProductId === product.id ? (
                    <input type="text" name='brand' value={editingProduct.brand} onChange={handleInputChangeEditingProduct} />
                  ) : (
                    product.brand
                  )}
                </td>
                <td className="px-6 py-4">
                  {editingProductId === product.id ? (
                    <input type="number" name='price' value={editingProduct.price} onChange={handleInputChangeEditingProduct} />
                  ) : (
                    product.price
                  )}
                </td>
                <td className="px-6 py-4 flex">
                  {editingProductId === product.id ? (
                    <>
                      <button onClick={handleSaveEdit} className=" hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                        Save
                      </button>
                      <button onClick={handleCancelEdit} className=" hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                        Cancel
                      </button>
                    </>
                  ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 cursor-pointer mr-2"
                          onClick={() => handleEditProduct(product.id as number)}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 cursor-pointer"
                          onClick={() => handleRemoveProduct(product.id as number)}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v4.75A2.25 2.25 0 0 1 18.25 21H5.75A2.25 2.25 0 0 1 3.5 18.75v-9A2.25 2.25 0 0 1 5.75 7H12"
                          />
                        </svg>
                      </>
                    )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Add new product section */}
      <div className="w-8/12">
       
        <div className='flex w-8/12"'>
          <AddProductFormMulti onAddProducts={handleAddProducts}></AddProductFormMulti>
        </div>

      
      </div>
    </div>
  );
}

export default ProductTable;
