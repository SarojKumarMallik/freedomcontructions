import React from "react";
import "./Contactbreadcrum.css";
import about from "../../assets/img/contact_bread.webp";
import { Link } from "react-router-dom";

const Contactbreadcrum = () => {
  return (
    <section className="Contactbreadcrum">
    
      <img
        src={about}
        alt="Contact Background"
        className="Contactbreadcrum-bg"
        loading="eager"
        decoding="async"
        fetchpriority="high"
      />

      {/* Overlay */}
      <div className="Contactbreadcrum-overlay"></div>

      {/* Content */}
      <div className="Contactbreadcrum-content">
        <h1>Contact Us</h1>

        <div className="Contactbreadcrum-breadcrumb">
          <Link to="/" className="home">
            Home
          </Link>
          <span className="separator"> / </span>
          <span className="active">Contact Us</span>
        </div>
      </div>
    </section>
  );
};

export default Contactbreadcrum;
