import React from 'react';
import { Link } from 'react-router-dom';
import './PaymentFailed.css';

const PaymentFailed = () => {
  return (
    <div className="payment-failed-page">
      <h1>Payment Failed</h1>
      <p>Unfortunately, your payment was not successful. Please try again.</p>
      <Link to="/cart" className="retry-link">Retry Payment</Link>
    </div>
  );
};

export default PaymentFailed;
