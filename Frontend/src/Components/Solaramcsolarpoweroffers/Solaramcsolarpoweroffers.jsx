import React from "react";
import {
  FaSolarPanel,
  FaTools,
  FaBolt,
  FaTree,
  FaChartLine,
  FaCogs,
  FaShieldAlt
} from "react-icons/fa";
import "./Solaramcsolarpoweroffers.css";

const Solaramcsolarpoweroffers = () => {

  const services = [
    {
      icon: <FaSolarPanel />,
      title: "Panel Cleaning",
      desc: "Cleaning of solar panels at regular intervals to maintain peak performance."
    },
    {
      icon: <FaTools />,
      title: "Technical Inspection",
      desc: "Identifying loose connections, inverter performance & electrical checks."
    },
    {
      icon: <FaShieldAlt />,
      title: "Repairs & Safety",
      desc: "Repairing both non-critical and critical system conditions."
    },
    {
      icon: <FaTree />,
      title: "Shade Management",
      desc: "Removing obstacles like vegetation or trees that block sunlight."
    },
    {
      icon: <FaChartLine />,
      title: "Performance Monitoring",
      desc: "Online monitoring of daily energy generation for your solar system."
    },
    {
      icon: <FaBolt />,
      title: "Efficiency Optimization",
      desc: "Technical insights & recommendations to improve system efficiency."
    },
    {
      icon: <FaCogs />,
      title: "Component Upgrades",
      desc: "Upgrading essential components in your solar plant when required."
    }
  ];

  return (
    <section className="Solaramcsolarpoweroffers-wrapper">
      <div className="Solaramcsolarpoweroffers-container">

        {/* TOP HEADING */}
        <div className="Solaramcsolarpoweroffers-header">
          <span className="Solaramcsolarpoweroffers-badge">
            Solar Maintenance Excellence
          </span>

          <h2 className="Solaramcsolarpoweroffers-title">
            What Freedom Contructions Offers with Solar Maintenance Services
          </h2>

          <p className="Solaramcsolarpoweroffers-subtitle">
            Our Annual Maintenance Contract ensures comprehensive servicing,
            proactive monitoring, and long-term efficiency for your solar power plant.
          </p>

          <div className="Solaramcsolarpoweroffers-accent-line"></div>
        </div>

        {/* CARD GRID */}
        <div className="Solaramcsolarpoweroffers-grid">
          {services.map((service, index) => (
            <div className="Solaramcsolarpoweroffers-card" key={index}>
              <div className="Solaramcsolarpoweroffers-icon">
                {service.icon}
              </div>
              <h4>{service.title}</h4>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>

        {/* NOTE */}
        <p className="Solaramcsolarpoweroffers-note">
          *All services are provided by installation partners.
          Availability depends on respective partner support.
        </p>

      </div>
    </section>
  );
};

export default Solaramcsolarpoweroffers;