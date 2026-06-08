import React from "react";
import { FaFileSignature, FaUserTie, FaMapMarkedAlt, FaSolarPanel } from "react-icons/fa";
import "./Offgridinstallationprocessbsp.css";

const Offgridinstallationprocessbsp = () => {
  const steps = [
    {
      number: "01",
      icon: <FaFileSignature />,
      title: "Applying for Quotations",
      content:
        "Click on the get quote option and fill out the form with the required details. Double-check your details before submitting the form."
    },
    {
      number: "02",
      icon: <FaUserTie />,
      title: "Discussion With Energy Expert",
      content:
        "Our off-grid solar advisor will contact you to discuss installation. You can request a site visit during the call."
    },
    {
      number: "03",
      icon: <FaMapMarkedAlt />,
      title: "Site Visit & Final Quotation",
      content:
        "Our installation partner visits your location and provides final quotation along with 3D system design."
    },
    {
      number: "04",
      icon: <FaSolarPanel />,
      title: "System Installation",
      content:
        "Once approved, your off-grid solar system will be installed and tested professionally."
    }
  ];

  return (
    <section className="Offgridinstallationprocessbsp-section">
      <div className="Offgridinstallationprocessbsp-container">

        <div className="Offgridinstallationprocessbsp-header">
          <span className="Offgridinstallationprocessbsp-badge">
            INSTALLATION PROCESS
          </span>
          <h2>
            Off Grid Solar Power System Installation With{" "}
            <span>Freedom Contructions</span>
          </h2>
          <p>
            A structured and professional approach ensuring seamless off-grid solar installation.
          </p>
        </div>

        <div className="Offgridinstallationprocessbsp-timeline">

          <div className="Offgridinstallationprocessbsp-line"></div>

          {steps.map((step, index) => (
            <div key={index} className="Offgridinstallationprocessbsp-step">

              <div className="Offgridinstallationprocessbsp-card">
                <div className="Offgridinstallationprocessbsp-icon">
                  {step.icon}
                </div>
                <h3>
                  {step.title}
                </h3>
                <p>{step.content}</p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Offgridinstallationprocessbsp;