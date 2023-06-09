import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Product } from "../../types/ecommerce";
import "../../styles/ecommerce.css";
import { GlobalDispatchContext, GlobalStateContext } from "../../state";
interface ProductPageProps {
  state: {
    product: Product;
  };
}

const ProductPage = () => {
  const state = useContext(GlobalStateContext);
  const [stateProduct, setStateProduct] = useState() as [Product, Function];
  const [count, setCount] = useState(0);
  const {
    state: { product },
  }: ProductPageProps = useLocation();

  useEffect(() => {
    try {
      setStateProduct(state.products.find((p: Product) => p.id === product.id));
    } catch (e) {
      console.log(e);
    }
  }, [product.id]);

  if (stateProduct === undefined) {
    return <h1>Loading...</h1>;
  } else {
    return (
      // product page with image slider
      <div className="product-page">
        <div className="product-page__image-slider">
          <div className="product-page__image">
            <img
              loading="lazy"
              height={400}
              width={"auto"}
              src={
                stateProduct.images[
                  Math.abs(count % stateProduct.images?.length) + 1
                ]
              }
              alt={stateProduct.title}
            />
          </div>
          <div className="image-button__container">
            <button
              className="image-button"
              onClick={() => setCount(count - 1)}>
              Prev
            </button>
            <p>
              {Math.abs(count % stateProduct.images.length) + 1}/
              {stateProduct.images.length}
            </p>
            <button
              className="image-button"
              onClick={() => setCount(count + 1)}>
              Next
            </button>
          </div>
        </div>
        <div className="product-page__content">
          <h2 className="product-page__title">
            {stateProduct.title}{" "}
            <span className="product-page__rating">
              ⭐️ {stateProduct.rating.toFixed(1)}
            </span>
          </h2>

          <div>
            <div className="product-page__brand">
              Brand: {stateProduct.brand}
            </div>
            <div className="product-page__category">
              Category: {stateProduct.category}
            </div>
          </div>

          <div className="product-page__price">
            <span className="product-page__price--discounted">
              {(
                stateProduct.price -
                (stateProduct.price * stateProduct.discountPercentage) / 100
              ).toFixed(2)}
            </span>
            <span className="product-page__price--original">
              $ {stateProduct.price}
            </span>
          </div>
          <div className="product-page__description">
            {stateProduct.description}
          </div>

          <div className="product-page__stock">
            In Stock: {stateProduct.stock}
          </div>
          <div className="product-page__actions">
            <button className="product-page__actions--add-to-cart">
              Add to Cart
            </button>
            <button className="product-page__actions--buy-now">Buy Now</button>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductPage;
