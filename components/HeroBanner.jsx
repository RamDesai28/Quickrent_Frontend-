import React from "react";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="content">
        <h1>Find Your Perfect Gadget Match</h1>
        <p>Explore rentals for laptops, cameras, gaming consoles, and more.</p>
        <button className="cta-btn">Explore Rentals</button>
      </div>
      <img src="/assets/hero-image.png" alt="Gadgets" className="hero-img" />
    </section>
  );
};

export default HeroBanner;
