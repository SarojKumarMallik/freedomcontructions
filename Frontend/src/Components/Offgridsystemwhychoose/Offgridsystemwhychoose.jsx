import React from "react";
import "./Offgridsystemwhychoose.css";
import {
  FaBolt,
  FaMoneyBillWave,
  FaMapMarkedAlt,
  FaPowerOff,
  FaChartLine,
  FaLeaf
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Offgridsystemwhychoose = () => {
  const features = [
    {
      icon: <FaBolt />,
      title: "Staying Energy Independent",
      description:
        "The off-grid solar system offers you complete freedom from the power grid. This means you will not remain connected to the power grids. You will become independent in terms of energy generation for your household."
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Stop Paying Electricity Bills",
      description:
        "Electricity bills are getting costly. After solar installation, your off grid solar power system will generate free electricity in the next 25 years. If you want to save money from high electricity bills, you can choose off-grid solar panel installation."
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Installation Flexibility",
      description:
        "You can choose off grid solar power system installation anywhere, irrespective of whether there is grid connectivity. Go for off-grid solar installation, if the location is shed-free from 9 AM to 5 PM."
    },
    {
      icon: <FaPowerOff />,
      title: "Avoid Power Outages",
      description:
        "An on-grid solar cannot work during a power outage but an off-grid solar can. Power cuts can happen anytime. So, if your area’s electricity connection is irregular, you can choose an off-grid solar set up."
    },
    {
      icon: <FaChartLine />,
      title: "Good Return on Investment",
      description:
        "Even if the off-grid solar requires a high initial investment, you will start generating free electricity from the first day. Your solar investment can bring 20% - 40% returns every year. You will get back your investment in the next 4 - 5 years. For the next 25 - 26 years, you will get continuous returns."
    },
    {
      icon: <FaLeaf />,
      title: "Environment Friendly",
      description:
        "Unlike fossil fuels, off-grid solar power systems do not release carbon or greenhouse gases to the environment. By choosing off-grid solar installation, you can contribute to a better environment for your future generation."
    }
  ];

  return (
    <section className="Offgridsystemwhychoose-section">
      <div className="Offgridsystemwhychoose-container">

        <div className="Offgridsystemwhychoose-header">
          <span className="Offgridsystemwhychoose-badge">
            Freedom Contructions
          </span>
          <h2>
            Why Choose <span>Off-Grid Solar Power</span> System Installation
          </h2>
          <p>
            The off-grid solar installation can be a really good alternative power source for remote regions with no electricity facility. Here are the major benefits of investing in off-grid solar power systems:
          </p>
        </div>

        <div className="Offgridsystemwhychoose-grid">
          {features.map((item, index) => (
            <div className="Offgridsystemwhychoose-card" key={index}>
              <div className="Offgridsystemwhychoose-icon">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="Offgridsystemwhychoose-cta">
          <Link to="/contact" className="Offgridsystemwhychoose-btn">
            Connect with Energy Advisors →
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Offgridsystemwhychoose;