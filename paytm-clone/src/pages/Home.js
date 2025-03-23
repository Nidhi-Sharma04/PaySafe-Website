import React from "react";
import "../styles/Home.css";
import billImage from "../assets/payment-illustration.png"; 

const Home = ({ scrollToSection, transactionsRef }) => {
  return (
    <div className="home">
      

      <div className="content">
        <div className="text-section">
          <h1><span className="highlight">Pay Bills</span> by SAFEPAY</h1>
          <p>
            safe and secure payments are the priotity of safepay.
            also get exiting rewards after each payment 
          </p>
          <button className="transactions-button" onClick={() => scrollToSection(transactionsRef)}>Transactions</button>
        </div>

        <div className="image-section">
          <img src={billImage} alt="Pay Bills Online" />
        </div>
      </div>
    </div>
  );
};

export default Home;
