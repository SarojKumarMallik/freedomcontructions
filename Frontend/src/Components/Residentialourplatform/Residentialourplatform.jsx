import React from "react";
import {
  FaFileAlt,
  FaComments,
  FaMapMarkedAlt,
  FaSolarPanel,
  FaCheckCircle
} from "react-icons/fa";
import "./Residentialourplatform.css";

const Residentialourplatform = () => {
  const steps = [
    {
      icon: <FaFileAlt />,
      title: "Apply For Residential Solar Quotation",
      desc: "Fill up the enquiry form with your details like name, mobile number, electricity bill amount, address and residence type."
    },
    {
      icon: <FaComments />,
      title: "Discuss With Our Energy Advisor",
      desc: "Our energy advisor will contact you to discuss your solar system requirements and clarify all your questions."
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Site Visit & Final Quotation",
      desc: "We arrange a technical site visit and provide a 3D design plan along with the final quotation."
    },
    {
      icon: <FaSolarPanel />,
      title: "Solar Panel Installation on Rooftop",
      desc: "After confirmation, our certified team completes the rooftop solar installation professionally."
    },
    {
      icon: <FaCheckCircle />,
      title: "Final System Evaluation",
      desc: "Our engineers test the system thoroughly to ensure smooth performance before final handover."
    }
  ];

  return (
    <section className="platform-section">
      <div className="platform-container">

        <div className="platform-header">
          <span className="platform-label">INSTALLATION PROCESS</span>
          <h2>
            How to Complete a <span>Home Solar Installation</span> From Our Platform?
          </h2>
          <p>
            Book your home solar system easily and enjoy a seamless,
            professional installation experience.
          </p>
        </div>

        <div className="timeline">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-content">
                <div className="timeline-icon">{step.icon}</div>
                <h4>Step {index + 1}</h4>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Residentialourplatform;