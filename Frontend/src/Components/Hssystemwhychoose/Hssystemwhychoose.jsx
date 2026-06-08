import React from "react";
import {
  FaFileInvoiceDollar,
  FaUserTie,
  FaCheckCircle,
  FaHeadset,
} from "react-icons/fa";
import "./Hssystemwhychoose.css";

const Hssystemwhychoose = () => {
  const reasons = [
    {
      title: "Hybrid Solar Quotation",
      description:
        "We provide a detailed hybrid solar quotation including component specifications, model names, warranty details, pricing, GST, and complete system transparency.",
      icon: <FaFileInvoiceDollar />,
    },
    {
      title: "Expert Guidance",
      description:
        "Freedom Contructions Private Limited assigns a dedicated energy advisor who provides unbiased and professional technical guidance.",
      icon: <FaUserTie />,
    },
    {
      title: "Verified & Trusted Installation Partner",
      description:
        "Our installation partners are experienced and internally regulated to ensure high-quality service and reliable execution.",
      icon: <FaCheckCircle />,
    },
    {
      title: "After-Sales Support",
      description:
        "Our support team ensures smooth post-installation service and long-term assistance whenever required.",
      icon: <FaHeadset />,
    },
  ];

  return (
    <section className="Hssystemwhychoose-wrapper">
      <div className="Hssystemwhychoose-container">

        <div className="Hssystemwhychoose-header">
          <span className="Hssystemwhychoose-badge">
            WHY Freedom Contructions
          </span>

          <h2>
            Why Choose <span>Freedom Contructions</span> for
            Hybrid Solar Installation?
          </h2>

          <p>
            Discover why homeowners and businesses trust Freedom Contructions
            Private Limited for reliable and high-performance hybrid solar systems.
          </p>
        </div>

        <div className="Hssystemwhychoose-grid">
          {reasons.map((item, index) => (
            <div key={index} className="Hssystemwhychoose-card">
              <div className="Hssystemwhychoose-icon">
                {item.icon}
              </div>
              <div className="Hssystemwhychoose-content">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="Hssystemwhychoose-cta">
          <a href="/contact">Contact Us →</a>
        </div>

      </div>
    </section>
  );
};

export default Hssystemwhychoose;