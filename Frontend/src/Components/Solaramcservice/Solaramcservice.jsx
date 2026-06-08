import React from "react";
import { Link } from "react-router-dom";
import {
  FaSolarPanel,
  FaBatteryFull,
  FaBolt,
  FaHome,
  FaIndustry,
  FaTools,
  FaCheckCircle
} from "react-icons/fa";
import "./Solaramcservice.css";

const Solaramcservice = () => {

  const services = [
    { name: "On Grid Solar System", icon: <FaSolarPanel />, link: "/services/on-grid-solar-system" },
    { name: "Off Grid Solar System", icon: <FaBatteryFull />, link: "/services/off-grid-solar-system" },
    { name: "Hybrid Solar System", icon: <FaBolt />, link: "/services/hybrid-solar-system" },
    { name: "Residential", icon: <FaHome />, link: "/services/residential" },
    { name: "Industrial", icon: <FaIndustry />, link: "/services/industrial" },
    { name: "Solar AMC", icon: <FaTools />, link: "/services/solar-amc", active: true }
  ];

  return (
    <section className="Solaramcservice-wrapper">
      <div className="Solaramcservice-container">

        {/* LEFT PANEL */}
        <div className="Solaramcservice-left">

          <h2 className="Solaramcservice-title">
            Solar Solutions
          </h2>

          <div className="Solaramcservice-services">
            {services.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className={`Solaramcservice-service ${
                  item.active ? "Solaramcservice-active" : ""
                }`}
              >
                <span className="Solaramcservice-icon">
                  {item.icon}
                </span>

                <span className="Solaramcservice-name">
                  {item.name}
                </span>

                <span className="Solaramcservice-arrow">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="Solaramcservice-right">

          <h2 className="Solaramcservice-main-title">
            What is Solar AMC?
          </h2>

          <p className="Solaramcservice-text">
            A Solar AMC or solar panel maintenance service is an agreement between you, and a solar service company. 
            This contract outlines the terms and conditions of service, including the price, expectations for servicing, 
            the service timeline, etc.
          </p>

          <p className="Solaramcservice-text">
            With solar AMC, you can hand over the responsibility of regular checks, repairs and maintenance services 
            of your solar plant to a solar company.
          </p>

          <h2 className="Solaramcservice-subtitle">
            Why Should You Buy Solar AMC?
          </h2>

          <p className="Solaramcservice-text">
            Here are the top reasons to buy solar AMC services for your solar system:
          </p>

          <ul className="Solaramcservice-list">
            <li>
              <FaCheckCircle className="Solaramcservice-check" />
              Solar maintenance contracts usually include regular cleaning of your solar panel to remove dust, leaves, etc., which helps retain system efficiency.
            </li>

            <li>
              <FaCheckCircle className="Solaramcservice-check" />
              Regular maintenance services help in identifying and addressing potential equipment issues before they become major problems.
            </li>

            <li>
              <FaCheckCircle className="Solaramcservice-check" />
              Trained professionals & experts will take care of your solar plant. So, you can stay without worry.
            </li>

            <li>
              <FaCheckCircle className="Solaramcservice-check" />
              The AMC provides 360° care and protection of your solar plant that ensures a lifespan of up to 25–30 years.
            </li>
          </ul>

          {/* <Link to="/contact" className="Solaramcservice-cta">
            Connect with Energy Advisors
          </Link> */}

        </div>

      </div>
    </section>
  );
};

export default Solaramcservice;