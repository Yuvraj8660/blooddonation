import React, { useState } from "react";
import "../components/Login.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { verifyAcc } from "../services/operations/VerifyAcc";
import "./VerifyAccount.css"
import { ResendOtp } from "../services/operations/ResendOtp";
const VerifyAccount = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: user?.user?.email || "",
    otp: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await verifyAcc(formData, setLoading, navigate);
  };

  const handleResendOtp = async () => {
    // yahan resend OTP API call aayegi
    await ResendOtp(formData,setLoading)
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Verify Account</h2>

        <input
          type="text"
          name="otp"
          placeholder="Enter OTP"
          value={formData.otp}
          onChange={handleChange}
          required
          className="auth-input"
        />

        <button
          type="submit"
          className="auth-button"
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify"}
        </button>

        <button
          type="button"
          className="auth-button secondary"
          onClick={handleResendOtp}
        >
          Resend OTP
        </button>

        <button
          type="button"
          className="auth-button link"
          onClick={() => navigate("/login")}
        >
          Back to Login
        </button>
      </form>
    </div>
  );
};

export default VerifyAccount;
