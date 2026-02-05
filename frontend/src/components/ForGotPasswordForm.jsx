import { useState } from "react";
import "./SignUp.css"; // reuse same auth css
import { useNavigate } from "react-router-dom";
import { resetPasswordService } from "../services/operations/ResetPassword";

const ForGotPasswordForm = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      atoert("Password and Confirm Password do not match");
      return;
    }

   
    await resetPasswordService(formData, setLoading, navigate);
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Reset Password</h2>

        <input
          type="email"
          name="email"
          placeholder="Registered Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="auth-input"
        />

        <input
          type="text"
          name="otp"
          placeholder="Enter OTP"
          value={formData.otp}
          onChange={handleChange}
          required
          className="auth-input"
        />

        <input
          type="password"
          name="password"
          placeholder="New Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="auth-input"
        />

        <input
          type="password"
          name="confirm_password"
          placeholder="Confirm New Password"
          value={formData.confirm_password}
          onChange={handleChange}
          required
          className="auth-input"
        />

        <button type="submit" className="auth-button">
          {loading ? "Resetting..." : "Reset Password"}
        </button>

        <p className="auth-footer">
          Back to{" "}
          <span className="auth-link" onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default ForGotPasswordForm;