import React from "react";
import "./GadgetListing.css";

const GadgetListing = () => {
  const gadgets = [
    {
      id: 1,
      name: "MacBook Pro",
      price: "$50/day",
      features: "16GB RAM, 512GB SSD",
      img: "/assets/macbook.jpg",
    },
    {
      id: 2,
      name: "Canon DSLR",
      price: "$30/day",
      features: "24MP, 4K Video",
      img: "/assets/camera.jpg",
    },
    {
      id: 3,
      name: "PS5 Console",
      price: "$40/day",
      features: "Ultra HD Graphics, 1TB Storage",
      img: "/assets/ps5.jpg",
    },
  ];

  return (
    <section id="gadgets" className="gadget-listing">
      <h2>Available Gadgets for Rent</h2>
      <div className="gadget-grid">
        {gadgets.map((gadget) => (
          <div key={gadget.id} className="gadget-card">
            <img src={gadget.img} alt={gadget.name} />
            <h3>{gadget.name}</h3>
            <p>{gadget.features}</p>
            <p className="price">{gadget.price}</p>
            <button className="rent-btn">Rent Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GadgetListing;
