import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Function to validate email and password
  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!emailRegex.test(email)) {
      setMessage("Invalid email address");
      return false;
    }

    if (!passwordRegex.test(password)) {
      setMessage(
        "Password must be at least 8 characters and include letters and numbers"
      );
      return false;
    }

    setMessage("Login successful!");
    return true;
  };

  const handleSubmit = () => {
    validate();
  };

  return (
    <div className="container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </div>
        {message && (
          <p
            style={{
              color: message === "Login successful!" ? "green" : "red",
              fontSize: "14px",
              marginTop: "10px",
            }}
          >
            {message}
          </p>
        )}
        <div>
          <button
            type="button"
            className="submit-button"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
        <div className="redirect-link">
          <Link to="/dashboard" className="link-button">
            Go to Dashboard
          </Link>
        </div>
      </form>
      <div className="redirect-link">
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="link-button">
            Signup
          </Link>
        </p>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Login;
