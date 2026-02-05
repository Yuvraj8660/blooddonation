import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo / Brand */}
        <div className="footer-brand">
          <h2>KhoonDo</h2>
          <p>Saving lives, one drop at a time.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/donate">Donate Khoon</Link></li>
            <li><Link to="/collect">Collect Khoon</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: info@khoondo.com</p>
          <p>Phone: +91 12345 67890</p>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noreferrer">Facebook</a> | 
            <a href="#" target="_blank" rel="noreferrer">Twitter</a> | 
            <a href="#" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2026 KhoonDo. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
