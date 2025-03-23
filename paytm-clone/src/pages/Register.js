import React from "react";
import "../styles/Register.css";

const Register = () => {
  return (
    <div className="register-container">
      <h2>Create an Account</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="#">Login here</a></p>
    </div>
  );
};

export default Register;
