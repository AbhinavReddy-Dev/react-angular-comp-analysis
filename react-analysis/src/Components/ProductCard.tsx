import React from "react";
import { useNavigate } from "react-router-dom";
import { ProductCardProps } from "../types/ecommerce";

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/ecommerce/${product.id}`, { state: { product } });
  };

  return (
    <div className="product-card" onClick={handleProductClick}>
      <div className="product-card__image">
        <img loading="lazy" src={product.thumbnail} alt={product.title} />
      </div>
      <div className="product-card__content">
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__description">{product.description}</p>
        <div className="product-card__price">
          <span className="product-card__price--discounted">
            {(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(2)}
          </span>
          <span className="product-card__price--original">
            $ {product.price}
          </span>
        </div>
        <div className="product-card__rating">
          {" "}
          ⭐️ {product.rating.toFixed(1)}
        </div>
        <div>
          In Stock <span className="product-card__stock"> {product.stock}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
