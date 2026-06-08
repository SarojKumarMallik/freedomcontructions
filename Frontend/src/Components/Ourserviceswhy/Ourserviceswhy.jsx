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
import "./Ourserviceswhy.css";

const Ourserviceswhy = () => {

  const services = [
    {
      name: "On Grid Solar System",
      icon: <FaSolarPanel />,
      link: "/services/on-grid-solar-system",
      active: true   // ✅ ACTIVE
    },
    {
      name: "Off Grid Solar System",
      icon: <FaBatteryFull />,
      link: "/services/off-grid-solar-system"
    },
    {
      name: "Hybrid Solar System",
      icon: <FaBolt />,
      link: "/services/hybrid-solar-system"
    },
    {
      name: "Residential",
      icon: <FaHome />,
      link: "/services/residential"
    },
    {
      name: "Industrial",
      icon: <FaIndustry />,
      link: "/services/industrial"
    },
    {
      name: "Solar AMC",
      icon: <FaTools />,
      link: "/services/solar-amc"
    }
  ];

  const reasons = [
  {
    title: "Transparent On-Grid Solar Quotation",
    desc: "At Freedom Contructions, we provide a detailed and transparent on-grid solar quotation before installation. You receive complete clarity on system cost, solar panel specifications, inverter details, warranty coverage, and expected savings — so you can make an informed investment decision."
  },
  {
    title: "Experienced & Certified Installation Partners",
    desc: "Freedom Contructions works with experienced and trusted on-grid solar installation partners to ensure high-quality workmanship, MNRE-compliant systems, and long-term performance. Our expert team ensures safe and professional rooftop solar installation."
  },
  {
    title: "Hassle-Free & Time-Saving Process",
    desc: "With Freedom Contructions, you don’t need to contact multiple solar companies separately. We handle everything from site assessment and system design to net metering documentation and final installation — saving you valuable time and effort."
  },
  {
    title: "24/7 After-Sales Support",
    desc: "When you choose Freedom Contructions, you receive reliable 24/7 after-sales support. Our experienced solar energy advisors are always available to guide you regarding system performance, maintenance, and subsidy assistance."
  },
  {
    title: "No Spam Calls — Complete Privacy",
    desc: "Unlike many solar platforms, Freedom Contructions respects your privacy. We do not make repeated promotional calls. Our approach is simple — professional consultation, honest pricing, and customer-first service."
  }
];

  return (
    <section className="Ourserviceswhy-wrapper">
      <div className="Ourserviceswhy-container">

        {/* LEFT PANEL */}
        <div className="Ourserviceswhy-left">

          <h2 className="Ourserviceswhy-title">
            Solar Solutions
          </h2>

          <div className="Ourserviceswhy-services">
            {services.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className={`Ourserviceswhy-service ${
                  item.active ? "Ourserviceswhy-active" : ""
                }`}
              >
                <span className="Ourserviceswhy-icon">
                  {item.icon}
                </span>

                <span className="Ourserviceswhy-name">
                  {item.name}
                </span>

                <span className="Ourserviceswhy-arrow">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="Ourserviceswhy-right">

          <h2 className="Ourserviceswhy-main-title">
            Why Should You Choose Freedom Contructions for <br />
            <span>On-Grid Solar Installation?</span>
          </h2>

          <p className="Ourserviceswhy-intro">
            Here are the top reasons to contact Freedom Contructions for your on-grid solar system installation:
          </p>

          <div className="Ourserviceswhy-reasons">
            {reasons.map((item, index) => (
              <div key={index} className="Ourserviceswhy-reason">
                <FaCheckCircle className="Ourserviceswhy-check" />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Ourserviceswhy;