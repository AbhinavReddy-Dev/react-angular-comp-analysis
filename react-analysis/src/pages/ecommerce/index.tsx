import React, { useContext, useEffect, useState } from "react";
import { Product, ProductApiRes } from "../../types/ecommerce";
import ProductCard from "../../Components/ProductCard";
import "../../styles/ecommerce.css";
import { GlobalDispatchContext, GlobalStateContext } from "../../state";

const Ecommerce = () => {
  const state = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);

  const [products, setProducts] = useState([]) as [Product[], Function];

  async function getProducts() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const { products }: ProductApiRes =
        (await response.json()) as ProductApiRes;
      // setProducts(products);
      dispatch({ type: "SET_PRODUCTS", payload: products });
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

  useEffect(() => {
    setProducts(state.products);
  }, [state.products]);

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
