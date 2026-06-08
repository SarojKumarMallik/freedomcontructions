import React from "react";
import {
  FaFileInvoice,
  FaUserTie,
  FaMapMarkedAlt,
  FaSolarPanel,
  FaPlug
} from "react-icons/fa";
import "./Howtoinstall.css";

const Howtoinstall = () => {
  const steps = [
  {
    icon: <FaFileInvoice />,
    title: "Request Your On-Grid Solar Quotation",
    description:
      "Start your solar journey with Freedom Contructions by clicking on 'Get Quote' and submitting your details. Share your name, contact number, location, and monthly electricity consumption. Our team reviews your requirement and prepares a customized on-grid solar system quotation tailored to your energy needs."
  },
  {
    icon: <FaUserTie />,
    title: "Consult With Our Solar Energy Expert",
    description:
      "Our experienced energy advisor from Freedom Contructions will connect with you to understand your power usage and answer all your questions related to rooftop solar installation, net metering, system capacity, and government subsidy. You can also schedule a site visit during this discussion."
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Site Inspection & Final Proposal",
    description:
      "Our technical team conducts a detailed site inspection to assess rooftop space, shadow analysis, and structural safety. Based on the visit, Freedom Contructions provides a final quotation along with a proper system design and performance estimation for your on-grid solar power system."
  },
  {
    icon: <FaSolarPanel />,
    title: "Professional Solar Installation",
    description:
      "Once you confirm the proposal, our certified installation partners begin the on-grid solar system installation process. We ensure high-quality solar panels, branded inverters, and MNRE-compliant setup for maximum efficiency and long-term reliability."
  },
  {
    icon: <FaPlug />,
    title: "Net Metering & Grid Connection",
    description:
      "After installation, final safety checks are completed and required documentation is provided for solar subsidy and net metering approval. DISCOM officials verify the system and connect your rooftop solar system to the electricity grid, allowing you to start saving on your power bills immediately."
  }
];
  return (
    <section className="Howtoinstall-section">
      <div className="Howtoinstall-container">

        <div className="Howtoinstall-header">
          <span className="Howtoinstall-badge">INSTALLATION PROCESS</span>
          <h2 className="Howtoinstall-heading">
            How To Install an On-Grid Solar System With{" "}
            <span>Freedom Contructions?</span>
          </h2>
          <p className="Howtoinstall-subtext">
            With Freedom Contructions, your grid-connected solar PV system installation process becomes much easier.
            Here is the step-by-step installation process:
          </p>
        </div>

        <div className="Howtoinstall-timeline">
          {steps.map((step, index) => (
            <div className="Howtoinstall-step" key={index}>
              <div className="Howtoinstall-icon">
                <span className="Howtoinstall-step-number">
                  {index + 1}
                </span>
                {step.icon}
              </div>
              <div className="Howtoinstall-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Howtoinstall;