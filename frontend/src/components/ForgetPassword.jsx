import { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { SendOtpPassword } from "../services/operations/SendOtpPassword";
const ForgetPassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await SendOtpPassword(email, setLoading, navigate);
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>

        <p style={{ fontSize: "14px", textAlign: "center", marginBottom: "10px" }}>
          Enter your registered email to receive OTP
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="auth-input"
        />

        <button type="submit" className="auth-button">
          {loading ? "Sending..." : "Send OTP"}
        </button>

        <p className="auth-footer">
          Remember your password?{" "}
          <span className="auth-link" onClick={() => navigate("/login")}>
            Go to Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default ForgetPassword;