import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Product } from "../../types/ecommerce";
import "../../styles/ecommerce.css";
interface ProductPageProps {
  state: {
    product: Product;
  };
}

const ProductPage = () => {
  // const params = useParams<{ id: string }>();
  const [count, setCount] = useState(0);
  const {
    state: { product },
  }: ProductPageProps = useLocation();
  //   return <div>ProductPage: {product.id}</div>;
  return (
    // product page with image slider
    <div className="product-page">
      <div className="product-page__image-slider">
        <div className="product-page__image">
          <img
            loading="lazy"
            height={400}
            width={"auto"}
            src={product.images[Math.abs(count % product.images.length) + 1]}
            alt={product.title}
          />
        </div>
        <div className="image-button__container">
          <button className="image-button" onClick={() => setCount(count - 1)}>
            Prev
          </button>
          <p>
            {Math.abs(count % product.images.length) + 1}/
            {product.images.length}
          </p>
          <button className="image-button" onClick={() => setCount(count + 1)}>
            Next
          </button>
        </div>
      </div>
      <div className="product-page__content">
        <h2 className="product-page__title">
          {product.title}{" "}
          <span className="product-page__rating">
            ⭐️ {product.rating.toFixed(1)}
          </span>
        </h2>

        <div>
          <div className="product-page__brand">Brand: {product.brand}</div>
          <div className="product-page__category">
            Category: {product.category}
          </div>
        </div>

        <div className="product-page__price">
          <span className="product-page__price--discounted">
            {(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(2)}
          </span>
          <span className="product-page__price--original">
            $ {product.price}
          </span>
        </div>
        <div className="product-page__description">{product.description}</div>

        <div className="product-page__stock">In Stock: {product.stock}</div>
        <div className="product-page__actions">
          <button className="product-page__actions--add-to-cart">
            Add to Cart
          </button>
          <button className="product-page__actions--buy-now">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
