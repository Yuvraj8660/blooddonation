import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Join the Life-Saving Blood Donation Camp</h1>
          <p>
            Donate blood and save lives. Your one donation can save up to three
            lives!
          </p>
          <a href="/signup" className="cta-button">
            Become a Donor
          </a>
        </div>
        <div className="hero-image">
          <img
            src="https://plus.unsplash.com/premium_vector-1722271727486-9e1ad66f6d97?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Blood donation"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Donate Blood?</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Save Lives</h3>
            <p>Your donation can save multiple lives in need.</p>
          </div>
          <div className="card">
            <h3>Health Benefits</h3>
            <p>Regular donation improves your cardiovascular health.</p>
          </div>
          <div className="card">
            <h3>Community Impact</h3>
            <p>Support your community by donating blood safely.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Make a Difference?</h2>
        <a href="/signup" className="cta-button">
          Sign Up Now
        </a>
      </section>
    </div>
  );
};

export default Home;
