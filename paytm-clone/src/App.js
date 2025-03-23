import React, { useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import Wallet from "./pages/Wallet";
// import Contact from "./pages/Contact";
import Register from "./pages/Register"; 
import "./styles/App.css";

export default function App() {
  const homeRef = useRef(null);
  const transactionsRef = useRef(null);
  const walletRef = useRef(null);
  const contactRef = useRef(null);
  const registerRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <Navbar scrollToSection={scrollToSection} homeRef={homeRef} transactionsRef={transactionsRef} walletRef={walletRef} contactRef={contactRef} registerRef={registerRef} />
      <div className="scroll-container">
        <section ref={homeRef} className="full-page"><Home /></section>
        <section ref={transactionsRef} className="full-page"><Transactions /></section>
        <section ref={walletRef} className="full-page"><Wallet /></section>
        {/* <section ref={contactRef} className="full-page"><Contact /></section> */}
        <section ref={registerRef} className="full-page"><Register /></section>
      </div>
    </Router>
  );
}
