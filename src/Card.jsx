import React from "react";
import "./card.css";
import { useCartContext } from "./CartContext";

const Card = ({ product }) => {
  const { cartState, dispatch } = useCartContext();
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button
        onClick={() =>
          dispatch({
            type: "ADD_TO_CART",
            payload: {
              _id: product._id,
              title: product.title,
              price: product.price,
              image:product.image,
              quantity: 1,
            },
          })
        }
        className="add-to-cart-button"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
