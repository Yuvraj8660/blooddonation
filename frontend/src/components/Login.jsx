import React, { useState } from "react";
import "./Login.css";
import { login } from "../services/operations/login";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/slices/authSlice";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(formData, setLoading, navigate, dispatch);

    // sync token with redux after login
    dispatch(setToken(localStorage.getItem("token")));
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="auth-input"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="auth-input"
        />

        {/* Forgot Password */}
        <p
          className="auth-forgot"
          onClick={() => navigate("/send/otp/forgot-password")}
        >
          Forgot Password?
        </p>

        <button type="submit" className="auth-button">
          {loading ? "Logging..." : "Login"}
        </button>

        <p className="auth-footer">
          Do not have an account?{" "}
          <span
            className="auth-link"
            onClick={() => navigate("/signup")}
          >
            Go to signup
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;