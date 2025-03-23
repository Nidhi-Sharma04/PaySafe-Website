import React from "react";
import "../styles/Navbar.css";

const Navbar = ({ scrollToSection, homeRef, transactionsRef, walletRef, contactRef, registerRef }) => {
  return (
    <nav className="navbar">
      <h2 className="logo">SAFEPAY❤️</h2>
      <div className="nav-links">
        <button onClick={() => scrollToSection(homeRef)}>Home</button>
        <button onClick={() => scrollToSection(transactionsRef)}>Transactions</button>
        <button onClick={() => scrollToSection(walletRef)}>Wallet</button>
        <button onClick={() => scrollToSection(contactRef)}>Contact</button>
        <button className="signup" onClick={() => scrollToSection(registerRef)}>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
