import React from "react";
import "./Whybspproject.css";
import {
  FiCheckCircle,
  FiFileText,
  FiAward,
  FiZap,
  FiTool,
  FiMapPin,
} from "react-icons/fi";

const features = [
  {
    title: "End-to-End Solutions",
    desc: "Complete solar execution from survey to commissioning with zero hassle.",
    icon: <FiCheckCircle />,
  },
  {
    title: "Transparent Process",
    desc: "Clear pricing, approvals, and documentation with full visibility.",
    icon: <FiFileText />,
  },
  {
    title: "Tier-1 Components",
    desc: "High-efficiency panels and inverters with proven reliability.",
    icon: <FiAward />,
  },
  {
    title: "Net-Metering Support",
    desc: "End-to-end coordination with DISCOMs for approvals.",
    icon: <FiZap />,
  },
  {
    title: "Long-Term AMC",
    desc: "Performance monitoring and preventive maintenance support.",
    icon: <FiTool />,
  },
  {
    title: "Pan-Odisha Presence",
    desc: "Strong service coverage across all major districts.",
    icon: <FiMapPin />,
  },
];

const Whybspproject = () => {
  return (
    <section className="bspwhy">
      <div className="bspwhy_container">

        {/* HEADER */}
        <div className="bspwhy_header">
          
          <h2>Why Choose Freedom Contructions</h2>
          <p>
            A future-ready solar partner delivering quality, transparency,
            and long-term performance you can trust.
          </p>
        </div>

        

        {/* CARDS */}
        <div className="bspwhy_grid">
          {features.map((item, index) => (
            <div className="bspwhy_card" key={index}>
              <div className="bspwhy_icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Whybspproject;
