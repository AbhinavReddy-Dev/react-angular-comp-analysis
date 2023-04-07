import React, { useEffect, useState } from "react";
// import { data } from "../../Components/dd_ecommerce";
import { Product, ProductApiRes } from "../../types/ecommerce";
import ProductCard from "../../Components/ProductCard";
import "../../styles/ecommerce.css";

const Ecommerce = () => {
  const [products, setProducts] = useState([]) as [Product[], Function];

  async function getProducts() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const { products }: ProductApiRes =
        (await response.json()) as ProductApiRes;
      setProducts(products);
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
        {!products.length ? (
          <h5>Loading...</h5>
        ) : (
          products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </main>
  );
};

export default Ecommerce;
