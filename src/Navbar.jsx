import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { useCartContext } from './CartContext';

const Navbar = () => {
    const { cartState } = useCartContext();
    console.log(cartState)
    let count = 0;
    cartState.forEach(element => {
        count += element.quantity;
    });
    console.log(count);
  return (
    <nav className="navbar">
      <h1 className="navbar-brand">My Shop</h1>
      <div className="cart">
        <Link to="/cart" className="cart-link">
          <img src="/cart-image.png" alt="Cart" className="cart-icon" />
          <span className="cart-count">{count}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
