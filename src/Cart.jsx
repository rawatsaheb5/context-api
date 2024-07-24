import React, { useContext } from "react";
import { CartContext, useCartContext } from "./CartContext";
import "./cart.css";
import { redirect, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

const url = process.env.REACT_APP_API_URL;
const publishable_key = process.env.REACT_APP_PUBLISHABLE_KEY;

const Cart = () => {
  const { cartState, dispatch } = useCartContext();
  const navigate = useNavigate();

  let amount = 0;
  cartState.forEach((element) => {
    amount += element.quantity * element.price;
  });

  
  const handlePayment = async () => {
    
    const stripe = await loadStripe(publishable_key);
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ product: cartState }),
    });

    const session = await res.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    } else {
    }
  };
  return (
    <div className="cart-page">
      <h1>Cart Page</h1>
      {cartState.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartState.map((item) => (
            <li key={item._id} className="cart-item">
              <img
                src={item.image}
                alt={item.title}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h2>{item.title}</h2>
                <p>{item.quantity}</p>
                <p>${item.price.toFixed(2) * item.quantity}</p>
                <button
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: {
                        _id: item._id,
                      },
                    })
                  }
                  className="remove-button"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
          <button
            className="payment-btn"
            style={{ marginBottom: 20 }}
            onClick={() =>
              dispatch({
                type: "CANCEL_ALL_ITEMS",
              })
            }
          >
            Clear Cart
          </button>
          <button className="payment-btn" onClick={handlePayment}>
            Amount Payble ${amount}
          </button>
        </ul>
      )}
    </div>
  );
};

export default Cart;
