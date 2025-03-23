import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="auth-container">
      <h2>Login</h2>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
      <p>Don't have an account? <Link to="/register">Register here</Link></p>
    </div>
  );
};

export default Login;
