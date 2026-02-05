import {useState } from "react";
import "./SignUp.css";

import { SignupService } from "../services/operations/Singup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupSuccess } from "../redux/slices/authSlice";
const Signup = () => {
  const { user } = useSelector((state) => state.auth)

  console.log("this data is coming from redux", user);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    await SignupService(formData, setLoading, navigate)
    dispatch(signupSuccess({
      user: formData
    }))
    console.log("this data is coming from redux", user);

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
    })
    console.log(formData);



  };


  return (
<div className="auth-container">
  <form className="auth-form" onSubmit={handleSubmit}>
    <h2>Sign Up</h2>

    <input
      type="text"
      name="name"
      placeholder="Full Name"
      value={formData.name}
      onChange={handleChange}
      required
      className="auth-input"
    />

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

    <input
      type="password"
      name="confirmPassword"
      placeholder="Confirm Password"
      value={formData.confirmPassword}
      onChange={handleChange}
      required
      className="auth-input"
    />

    <select
      name="role"
      value={formData.role}
      onChange={handleChange}
      required
      className="auth-input"
    >
      <option value="">Select User Type</option>
      <option value="Donor"> Donor</option>
      <option value="Doctor">Doctor</option>
    </select>

    <button type="submit" className="auth-button">
      {loading ? "Signing..." : "Sign Up"}
    </button>

    {/* 👇 Go to Login */}
    <p className="auth-footer">
      Already have an account?{" "}
      <span
        className="auth-link"
        onClick={() => navigate("/login")}
      >
        Go to Login
      </span>
    </p>
  </form>
</div>

  );
};

export default Signup;
