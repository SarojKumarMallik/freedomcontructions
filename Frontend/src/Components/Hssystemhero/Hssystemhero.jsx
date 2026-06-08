import React from "react";
import "./Hssystemhero.css";
import hybrid from "../../assets/img/hybrid-solar-system.png";

const Hssystemhero = () => {
  return (
    <section className="Hssystemhero-section">
      <div className="Hssystemhero-container">

        {/* Left Content */}
        <div className="Hssystemhero-content">
          <span className="Hssystemhero-badge">
            ⚡ HYBRID SOLAR SYSTEM
          </span>

          <h1 className="Hssystemhero-title">
            Advanced <span>Hybrid Solar</span> <br />
            Energy System
          </h1>

          <p className="Hssystemhero-description">
            Combine solar panels, battery backup, and utility grid to create 
            a powerful and intelligent energy system. Store excess power and 
            enjoy uninterrupted electricity with maximum efficiency.
          </p>

          <div className="Hssystemhero-buttons">
            <a href="/contact" className="Hssystemhero-btn primary">
              Get Free Consultation →
            </a>
           
          </div>
        </div>

        {/* Right Image */}
        <div className="Hssystemhero-image-wrapper">
          <img src={hybrid} alt="Hybrid Solar System Diagram" />
        </div>

      </div>
    </section>
  );
};

export default Hssystemhero;