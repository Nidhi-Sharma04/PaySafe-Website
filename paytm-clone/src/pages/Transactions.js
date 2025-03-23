import React from "react";
import "../styles/Transactions.css";

const Transactions = () => {
  return (
    <div className="transactions">
      <h2>Your Transactions</h2>
      <p>Current Balance: ₹5,000</p>
      <ul>
        <li>₹500 - Mobile Recharge</li>
        <li>₹1,200 - Electricity Bill</li>
        <li>₹2,000 - Online Shopping</li>
        <li>₹3,000 - Money Received</li>
      </ul>
    </div>
  );
};

export default Transactions;
