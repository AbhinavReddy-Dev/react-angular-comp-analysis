import React, { useEffect, useState } from "react";
import { data } from "../../Components/dd_ecommerce";
import { Product, ProductApiRes } from "../../types/ecommerce";
import ProductCard from "../../Components/ProductCard";
import "../../styles/ecommerce.css";
// write a function that returns promise of dummy data from import statement with setTimeout

const Ecommerce = () => {
  const [products, setProducts] = useState([]) as [Product[], Function];

  const getProductsAPI = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  };
  async function getProducts() {
    try {
      // const response = await fetch("https://dummyjson.com/products");
      const response: ProductApiRes = (await getProductsAPI()) as ProductApiRes;
      const data: Product[] = response.products as Product[];
      console.log(data);
      // const data = response.products;
      setProducts((prev: Product[]) => [...data]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    let isFetchValid = true;
    if (isFetchValid) {
      getProducts();
    }
    return () => {
      isFetchValid = false;
    };
  }, []);

  return (
    <main>
      <h1>Ecommerce</h1>
      <div className="product-list">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Ecommerce;
