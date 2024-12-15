import React from "react";
import { FaLaptop, FaCamera, FaTruck } from "react-icons/fa";
import "./Features.css";

const Features = () => {
  return (
    <section id="features" className="features">
      <h2>Why Choose QuickRent?</h2>
      <div className="features-grid">
        <div className="feature-item">
          <FaLaptop size={40} color="var(--primary-color)" />
          <h3>Wide Variety</h3>
          <p>Choose from laptops, cameras, and gaming consoles.</p>
        </div>
        <div className="feature-item">
          <FaCamera size={40} color="var(--primary-color)" />
          <h3>Affordable Pricing</h3>
          <p>Rent gadgets at competitive rates.</p>
        </div>
        <div className="feature-item">
          <FaTruck size={40} color="var(--primary-color)" />
          <h3>Quick Delivery</h3>
          <p>Get your gadgets delivered in no time.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
