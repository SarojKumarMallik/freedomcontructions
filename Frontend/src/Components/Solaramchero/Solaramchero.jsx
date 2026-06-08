import React from "react";
import "./Solaramchero.css";
import solaramc from "../../assets/img/solar-amc-001.jpg";
import { FaShieldAlt, FaArrowRight, FaSolarPanel, FaBolt } from "react-icons/fa";

const Solaramchero = () => {
  return (
    <section className="solaramc-hero">
      <div className="solaramc-container">

        {/* LEFT CONTENT */}
        <div className="solaramc-content">

          <div className="solaramc-badge">
            <FaShieldAlt /> Commercial & Industrial Solar AMC
          </div>

          <h1 className="solaramc-heading">
            Why Solar AMC is a <span>Must</span> for Commercial
            & Industrial Solar Plants?
          </h1>

          <p className="solaramc-text">
            Don’t have a solar AMC for your C&I plant or is it expiring soon?
            Without proper maintenance, you risk financial loss, system
            breakdowns, and unexpected shutdowns.
          </p>

          <p className="solaramc-text">
            A 200kW C&I solar plant can include 400+ panels and complex
            electrical circuits. Regular inspections and preventive
            maintenance are essential to avoid short circuits, fire risks,
            and production loss.
          </p>

          {/* Highlight Cards */}
          <div className="solaramc-highlights">

            <div className="solaramc-card">
              <FaSolarPanel className="icon" />
              <h4>400+ Panels</h4>
              <p>Large-scale complex installations</p>
            </div>

            <div className="solaramc-card">
              <FaBolt className="icon" />
              <h4>200kW+ Systems</h4>
              <p>High power commercial plants</p>
            </div>

            <div className="solaramc-card">
              <FaShieldAlt className="icon" />
              <h4>Risk Prevention</h4>
              <p>Avoid breakdowns & fire hazards</p>
            </div>

          </div>

          {/* CTA Buttons */}
          <div className="solaramc-buttons">
            <a href="/contact" className="solaramc-btn primary">
              Get AMC Quote <FaArrowRight />
            </a>
            
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="solaramc-image">
          <img src={solaramc} alt="Solar AMC Maintenance" />
        </div>

      </div>

      <div className="solaramc-glow"></div>
    </section>
  );
};

export default Solaramchero;