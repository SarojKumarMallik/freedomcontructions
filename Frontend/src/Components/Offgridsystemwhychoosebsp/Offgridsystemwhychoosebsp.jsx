import React from "react";
import "./Offgridsystemwhychoosebsp.css";
import {
  FaFileInvoiceDollar,
  FaUserCheck,
  FaClock,
  FaHeadset,
  FaPhoneSlash,
  FaArrowRight
} from "react-icons/fa";

const Offgridsystemwhychoosebsp = () => {
  const features = [
    {
      icon: <FaFileInvoiceDollar />,
      title: "Solar Quotation for Off-Grid Solar",
      description:
        "To help you in decision-making, we send detailed solar quotations including brand details, warranty information, pricing details, and system specifications."
    },
    {
      icon: <FaUserCheck />,
      title: "Verified & Trusted Installation Partners",
      description:
        "Our platform has verified, trusted and local installation partners to ensure high-quality off-grid solar installation across India."
    },
    {
      icon: <FaClock />,
      title: "Time-Saving Procedure",
      description:
        "By contacting us, you can get support from our off-grid solar experts who will resolve all your queries regarding solar PV installation."
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Customer Support",
      description:
        "Even after installation, you will receive 24/7 customer support for any assistance related to your off-grid solar setup."
    },
    {
      icon: <FaPhoneSlash />,
      title: "Zero Disturbing Calls",
      description:
        "To give you peace of mind, we never spam your number with unnecessary sales calls."
    }
  ];

  return (
    <section className="Offgridsystemwhychoosebsp-section">
      <div className="Offgridsystemwhychoosebsp-container">

        <div className="Offgridsystemwhychoosebsp-header">
          <span className="Offgridsystemwhychoosebsp-badge">
            WHY CHOOSE Freedom Contructions
          </span>

          <h2>
            Why Choose <span>Freedom Contructions</span> for
            Off-Grid Solar Power System Installation?
          </h2>

          <p>
            Here are the reasons to choose Freedom Contructions for reliable,
            secure and professional off-grid solar installation services.
          </p>
        </div>

        <div className="Offgridsystemwhychoosebsp-grid">
          {features.map((item, index) => (
            <div
              className="Offgridsystemwhychoosebsp-card"
              key={index}
            >
              <div className="Offgridsystemwhychoosebsp-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="Offgridsystemwhychoosebsp-ctaWrapper">
          <a
            href="/contact"
            className="Offgridsystemwhychoosebsp-btn"
          >
            Connect Us
            <FaArrowRight className="Offgridsystemwhychoosebsp-btnArrow" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Offgridsystemwhychoosebsp;