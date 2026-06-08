import React from "react";
import { Link } from "react-router-dom";
import {
  FiZap,
  FiBatteryCharging,
  FiPower,
  FiTool,
  FiArrowRight
} from "react-icons/fi";
import "./Solarservices.css";

const services = [
  {
    icon: <FiZap />,
    title: "On Grid Solar System",
    desc: "A grid-connected solar solution that allows you to generate electricity and feed excess power back to the utility grid, reducing electricity bills and maximizing savings.",
    link: "/services/on-grid-solar-system"
  },
  {
    icon: <FiBatteryCharging />,
    title: "Hybrid Solar System",
    desc: "An advanced solar setup with battery backup that stores excess energy for later use, ensuring uninterrupted power supply during outages.",
    link: "/services/hybrid-solar-system"
  },
  {
    icon: <FiPower />,
    title: "Off Grid Solar System",
    desc: "A completely independent solar power solution designed for remote areas without grid access, powered by battery storage systems.",
    link: "/services/off-grid-solar-system"
  },
  {
    icon: <FiTool />,
    title: "Solar AMC",
    desc: "Comprehensive Annual Maintenance Contract services to ensure peak performance, system safety, and long-term efficiency of your solar installation.",
    link: "/services/solar-amc"
  }
];

const Solarservices = () => {
  return (
    <section className="Solarservices">
      <div className="Solarservices_container">

        <div className="Solarservices_header">
          <span className="Solarservices_tag">OUR SOLAR SOLUTIONS</span>
          <h2 className="Solarservices_title">
            Reliable & Smart <span>Solar Services</span>
          </h2>
          <p className="Solarservices_subtitle">
            We deliver high-performance solar solutions tailored for residential,
            commercial, and industrial energy needs across Odisha.
          </p>
        </div>

        <div className="Solarservices_grid">
          {services.map((item, index) => (
            <div className="Solarservices_card" key={index}>

              <div className="Solarservices_iconWrap">
                <div className="Solarservices_icon">
                  {item.icon}
                </div>
              </div>

              <h4 className="Solarservices_cardTitle">{item.title}</h4>
              <p className="Solarservices_cardDesc">{item.desc}</p>

              <Link to={item.link} className="Solarservices_btn">
                Read More <FiArrowRight />
              </Link>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Solarservices;