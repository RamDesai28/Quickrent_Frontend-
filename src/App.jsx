import React from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import Features from "./components/Features";
import GadgetListing from "./components/GadgetListing";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import "/styles/global.css";
import "./A.css"



const App = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <Features />
      <GadgetListing />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;
