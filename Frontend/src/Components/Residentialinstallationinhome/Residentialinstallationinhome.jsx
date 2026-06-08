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
import "./Residentialinstallationinhome.css";

const Residentialinstallationinhome = () => {

  const services = [
    { name: "On Grid Solar System", icon: <FaSolarPanel />, link: "/services/on-grid-solar-system" },
    { name: "Off Grid Solar System", icon: <FaBatteryFull />, link: "/services/off-grid-solar-system" },
    { name: "Hybrid Solar System", icon: <FaBolt />, link: "/services/hybrid-solar-system" },
    { name: "Residential", icon: <FaHome />, link: "/projects/residential-home-solar-system-installation", active: true },
    { name: "Industrial", icon: <FaIndustry />, link: "/services/industrial" },
    { name: "Solar AMC", icon: <FaTools />, link: "/services/solar-amc" }
  ];

  return (
    <section className="Residentialinstallationinhome-wrapper">
      <div className="Residentialinstallationinhome-container">

        {/* LEFT PANEL */}
        <div className="Residentialinstallationinhome-sidebar">

          <h2 className="Residentialinstallationinhome-sidebar-title">
            Solar Solutions
          </h2>

          <div className="Residentialinstallationinhome-sidebar-list">
            {services.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className={`Residentialinstallationinhome-sidebar-item ${
                  item.active
                    ? "Residentialinstallationinhome-sidebar-item-active"
                    : ""
                }`}
              >
                <span className="Residentialinstallationinhome-sidebar-icon">
                  {item.icon}
                </span>

                <span className="Residentialinstallationinhome-sidebar-name">
                  {item.name}
                </span>

                <span className="Residentialinstallationinhome-sidebar-arrow">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="Residentialinstallationinhome-content">

          <h2 className="Residentialinstallationinhome-heading">
            Why Choose Freedom Contructions for Solar Installation in Home?
          </h2>

          <p className="Residentialinstallationinhome-description">
            Our home solar installation quotation process helps you get genuine components at the best price. We are changing the traditional way of solar system installation process through our unique solutions such as:
          </p>

          <ul className="Residentialinstallationinhome-benefits">

            <li className="Residentialinstallationinhome-benefit-item">
              <FaCheckCircle className="Residentialinstallationinhome-benefit-icon" />
              <div>
                <strong>Expert Guidance:</strong>
                <p>
                  You will get advice from dedicated solar energy experts. We help you clear all your doubts before you choose our home solar solution.
                </p>
              </div>
            </li>

            <li className="Residentialinstallationinhome-benefit-item">
              <FaCheckCircle className="Residentialinstallationinhome-benefit-icon" />
              <div>
                <strong>Solar Quotations:</strong>
                <p>
                  We will send you solar quotations including the price and product details to help you ensure you are getting the best home solar installer.
                </p>
              </div>
            </li>

            <li className="Residentialinstallationinhome-benefit-item">
              <FaCheckCircle className="Residentialinstallationinhome-benefit-icon" />
              <div>
                <strong>Trusted Partners:</strong>
                <p>
                  Unlike an ordinary solar installation company, we only onboard experienced home solar system installation partners on our platform.
                </p>
              </div>
            </li>

            <li className="Residentialinstallationinhome-benefit-item">
              <FaCheckCircle className="Residentialinstallationinhome-benefit-icon" />
              <div>
                <strong>Solar Subsidy:</strong>
                <p>
                  We and our home solar installation partners follow all the MNRE guidelines to ensure you receive your solar installation subsidy on time.
                </p>
              </div>
            </li>

            <li className="Residentialinstallationinhome-benefit-item">
              <FaCheckCircle className="Residentialinstallationinhome-benefit-icon" />
              <div>
                <strong>No Spam Calls:</strong>
                <p>
                  We protect our residential solar system buyers from spam calls. However, you can call our energy advisor anytime for any required help.
                </p>
              </div>
            </li>

          </ul>

          

        </div>

      </div>
    </section>
  );
};

export default Residentialinstallationinhome;