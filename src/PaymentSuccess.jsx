import React from 'react';
import { Link } from 'react-router-dom';
import './paymentsuccess.css';

const PaymentSuccess = () => {
  return (
    <div className="payment-success-page">
      <h1>Payment Successful</h1>
      <p>Thank you for your purchase! Your payment was successful.</p>
      <Link to="/" className="home-link">Go to Home</Link>
    </div>
  );
};

export default PaymentSuccess;
