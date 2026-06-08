import React from "react";
import { Link } from "react-router-dom";
import { FaBolt, FaBatteryFull, FaSolarPanel } from "react-icons/fa";
import offgrid from "../../assets/img/Off-Grid.png";
import logo from "../../assets/img/logo.png";
import "./Offgridsystemhero.css";

const Offgridsystemhero = () => {
  return (
    <section className="bsp-hero">
      <div className="bsp-hero-container">

        {/* LEFT SIDE CONTENT */}
        <div className="bsp-hero-content">

          <span className="bsp-badge">
            <FaSolarPanel /> OFF-GRID SOLAR SYSTEM
          </span>

          <h1>
            Complete Energy <span>Independence</span>
          </h1>

          <p>
            Freedom Contructions delivers advanced off-grid solar systems
            designed for uninterrupted power supply with high-performance
            battery backup and intelligent inverter technology.
          </p>

          <div className="bsp-hero-features">
            <div>
              <FaBolt /> 24/7 Power Backup
            </div>
            <div>
              <FaBatteryFull /> Advanced Battery Bank
            </div>
          </div>

          <div className="bsp-hero-buttons">
            <Link to="/contact" className="bsp-primary-btn">
              Get Consultation
            </Link>
            
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="bsp-hero-image">
          <img src={offgrid} alt="Off Grid Solar System" />
        </div>

      </div>
    </section>
  );
};

export default Offgridsystemhero;