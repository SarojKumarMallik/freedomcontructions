import React from "react";
import { Link } from "react-router-dom";
import {
  FaSolarPanel,
  FaBatteryFull,
  FaBolt,
  FaHome,
  FaIndustry,
  FaTools,
  FaClock,
  FaChartLine,
  FaLeaf
} from "react-icons/fa";
import "./Hssystemwhy.css";

const Hssystemwhy = () => {
  const services = [
    { name: "On Grid Solar System", icon: <FaSolarPanel />, link: "/" },
    { name: "Off Grid Solar System", icon: <FaBatteryFull />, link: "/" },
    { name: "Hybrid Solar System", icon: <FaBolt />, link: "/hybrid", active: true },
    { name: "Residential", icon: <FaHome />, link: "/" },
    { name: "Industrial", icon: <FaIndustry />, link: "/" },
    { name: "Solar AMC", icon: <FaTools />, link: "/" },
  ];

  const reasons = [
    {
      title: "24 x 7 Power Supply",
      description:
        "Hybrid systems store solar energy in batteries and supply electricity during outages while exporting excess energy to the grid.",
      icon: <FaClock />,
    },
    {
      title: "High Return on Investment",
      description:
        "Earn 20%–40% returns over 25–30 years with a payback period of just 4–5 years.",
      icon: <FaChartLine />,
    },
    {
      title: "Best Utilisation of Renewable Energy",
      description:
        "Stored solar energy reduces dependency on grid power and ensures supply even during power cuts.",
      icon: <FaBolt />,
    },
    {
      title: "Environmental Benefits",
      description:
        "Reduce CO2 emissions. Installing 1kW solar equals planting 40 trees for a greener future.",
      icon: <FaLeaf />,
    },
  ];

  return (
    <section className="Hssystemwhy-wrapper">
      <div className="Hssystemwhy-container">

        {/* LEFT SIDE */}
        <div className="Hssystemwhy-left">
          
          <h2 className="Hssystemwhy-title">Solar Solutions</h2>

          <div className="Hssystemwhy-services">
            {services.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className={`Hssystemwhy-service ${
                  item.active ? "Hssystemwhy-active" : ""
                }`}
              >
                <span className="Hssystemwhy-icon">{item.icon}</span>
                <span className="Hssystemwhy-name">{item.name}</span>
                <span className="Hssystemwhy-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="Hssystemwhy-right">
          <h2 className="Hssystemwhy-main-title">
            Why Install a <span>Hybrid Solar System?</span>
          </h2>

          <p className="Hssystemwhy-intro">
            Discover the key advantages of choosing hybrid solar energy solutions.
          </p>

          <div className="Hssystemwhy-reasons">
            {reasons.map((item, index) => (
              <div key={index} className="Hssystemwhy-reason">
                <div className="Hssystemwhy-reason-icon">
                  {item.icon}
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hssystemwhy;