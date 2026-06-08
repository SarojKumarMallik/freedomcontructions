import React from "react";
import { Link } from "react-router-dom";
import {
  FaSolarPanel,
  FaBatteryFull,
  FaBolt,
  FaHome,
  FaIndustry,
  FaTools,
  FaBuilding,
  FaCheckCircle
} from "react-icons/fa";
import "./Commercialservice.css";

const Commercialservice = () => {

  const services = [
    { name: "On Grid Solar System", icon: <FaSolarPanel />, link: "/services/on-grid-solar-system" },
    { name: "Off Grid Solar System", icon: <FaBatteryFull />, link: "/services/off-grid-solar-system" },
    { name: "Hybrid Solar System", icon: <FaBolt />, link: "/services/hybrid-solar-system" },
    { name: "Residential", icon: <FaHome />, link: "/services/residential" },
    
    { name: "Industrial", icon: <FaIndustry />, link: "/services/industrial",active: true },
    { name: "Solar AMC", icon: <FaTools />, link: "/services/solar-amc" }
  ];

  const points = [
    "We provide a reliable solar quotation platform where you can get professional and experienced commercial and industrial solar panel installers.",
    "Compare multiple verified and trusted solar installation partners to get the best quotations from different installers.",
    "Our energy advisors provide expert guidance to help you make informed decisions with detailed and unbiased recommendations.",
    "We ensure only high-quality and branded solar components are used with proper mounting structures that offer long-term durability.",
    "Save time and effort by choosing the right installer easily. We ensure zero intrusive calls from salespersons or installers."
  ];

  return (
    <section className="Commercialservice-wrapper">
      <div className="Commercialservice-container">

        {/* LEFT SIDE */}
        <div className="Commercialservice-left">
          <h2 className="Commercialservice-title">
            Solar Solutions
          </h2>

          <div className="Commercialservice-services">
            {services.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className={`Commercialservice-service ${
                  item.active ? "Commercialservice-active" : ""
                }`}
              >
                <span className="Commercialservice-icon">
                  {item.icon}
                </span>

                <span className="Commercialservice-name">
                  {item.name}
                </span>

                <span className="Commercialservice-arrow">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="Commercialservice-right">

          <h2 className="Commercialservice-main-title">
            Why Choose Our Solar Power for <br />
            <span>Commercial & Industrial Installation?</span>
          </h2>

          <p className="Commercialservice-subtitle">
            Get the best commercial solar quotations and expert guidance for factory roofs,
            warehouses, offices, hospitals, malls, and industrial premises.
          </p>

          <div className="Commercialservice-points">
            {points.map((point, index) => (
              <div key={index} className="Commercialservice-point">
                <FaCheckCircle className="Commercialservice-check" />
                <p>{point}</p>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
};

export default Commercialservice;