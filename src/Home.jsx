import React from "react";
import Card from "./Card";
import product from "./data";
import "./card.css";
import { useCartContext } from "./CartContext";


const Home = () => {
    const {cartState} = useCartContext();
    console.log('rendring from cart state => ',cartState );
  return (
      <div className="product-list">
          
      {product.map((product, ind) => (
        <Card key={product._id} product={product}  />
      ))}
    </div>
  );
};

export default Home;
