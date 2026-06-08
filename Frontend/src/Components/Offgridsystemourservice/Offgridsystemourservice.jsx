import React from "react";
import { Link } from "react-router-dom";
import {
  FaSolarPanel,
  FaBatteryFull,
  FaBolt,
  FaHome,
  FaIndustry,
  FaTools
} from "react-icons/fa";
import "./Offgridsystemourservice.css";

const Offgridsystemourservice = () => {
  const services = [
    { name: "On Grid Solar System", icon: <FaSolarPanel />, link: "/services/on-grid-solar-system" },
    { name: "Off Grid Solar System", icon: <FaBatteryFull />, link: "/services/off-grid-solar-system", active: true },
    { name: "Hybrid Solar System", icon: <FaBolt />, link: "/services/hybrid-solar-system" },
    { name: "Residential", icon: <FaHome />, link: "/services/residential" },
    { name: "Industrial", icon: <FaIndustry />, link: "/services/industrial" },
    { name: "Solar AMC", icon: <FaTools />, link: "/services/solar-amc" }
  ];

  const tableData = [
    { capacity: "1 kW", daily: "4–5 Units", yearly: "1,460–1,800 Units" },
    { capacity: "2 kW", daily: "8–10 Units", yearly: "2,920–3,600 Units" },
    { capacity: "3 kW", daily: "12–15 Units", yearly: "4,380–5,400 Units" },
    { capacity: "4 kW", daily: "16–20 Units", yearly: "5,840–7,200 Units" },
    { capacity: "5 kW", daily: "20–25 Units", yearly: "7,300–9,000 Units" },
    { capacity: "6 kW", daily: "24–30 Units", yearly: "8,760–10,800 Units" },
    { capacity: "8 kW", daily: "32–40 Units", yearly: "10,220–14,400 Units" },
    { capacity: "10 kW", daily: "40–50 Units", yearly: "14,600–18,000 Units" }
  ];

  return (
    <section className="Offgridsystemourservice-wrapper">
      <div className="Offgridsystemourservice-container">

        {/* LEFT SIDE */}
        <div className="Offgridsystemourservice-left">
          

          <h2 className="Offgridsystemourservice-title">
            Solar Solutions
          </h2>

          <div className="Offgridsystemourservice-services">
            {services.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className={`Offgridsystemourservice-service ${
                  item.active ? "Offgridsystemourservice-active" : ""
                }`}
              >
                <span className="Offgridsystemourservice-icon">
                  {item.icon}
                </span>

                <span className="Offgridsystemourservice-name">
                  {item.name}
                </span>

                <span className="Offgridsystemourservice-arrow">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="Offgridsystemourservice-right">

          <h2 className="Offgridsystemourservice-main-title">
            Off-Grid Solar System Electricity <br />
            <span>Generation Calculation</span>
          </h2>

          <p className="Offgridsystemourservice-intro">
            Follow this table to know about the energy production by different off-grid solar systems:
          </p>

          <div className="Offgridsystemourservice-table-wrapper">
            <table className="Offgridsystemourservice-table">
              <thead>
                <tr>
                  <th>Off Grid Solar Capacity</th>
                  <th>Daily Energy Generation</th>
                  <th>Yearly Energy Generation</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.capacity}</td>
                    <td>{row.daily}</td>
                    <td>{row.yearly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          

        </div>

      </div>
    </section>
  );
};

export default Offgridsystemourservice;