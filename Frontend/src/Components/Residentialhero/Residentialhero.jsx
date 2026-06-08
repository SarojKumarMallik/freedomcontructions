import React from "react";
import "./Residentialhero.css";
import hero from "../../assets/img/home-residance001.png";

const Residentialhero = () => {
  return (
    <section className="Residentialhero-section">
      <div className="Residentialhero-container">

        {/* LEFT CONTENT */}
        <div className="Residentialhero-content">

          <h1 className="Residentialhero-title">
            Home & <span>Residential Solar</span> Installation
          </h1>

          <p className="Residentialhero-text">
            Want to get free electricity for your home? Choose ‘Solar installation in home’ and start generating electricity every day.
          </p>

          <p className="Residentialhero-text">
            For home solar system installation, it is very important to find the best solution at an affordable price. At Freedom Contructions, you can get the best solution for residential solar installation along with expert guidance, affordable EMI options, and much more.
          </p>

          <div className="Residentialhero-btn-wrapper">
            <a href="/contact" className="Residentialhero-btn">
              Request A Quote
            </a>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="Residentialhero-image">
          <img src={hero} alt="Residential Solar Installation" />
        </div>

      </div>
    </section>
  );
};

export default Residentialhero;