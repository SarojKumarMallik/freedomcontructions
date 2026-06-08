import React from "react";
import {
  FaPhoneAlt,
  FaUsers,
  FaFileInvoiceDollar,
  FaSolarPanel
} from "react-icons/fa";
import "./Bookcommercialsolar.css";

const Bookcommercialsolar = () => {

  const steps = [
    {
      icon: <FaPhoneAlt />,
      title: "Book Our Free Consultation",
      description:
        "Fill out the Contact Us form on our website and submit your details. Our expert energy advisor will connect with you shortly."
    },
    {
      icon: <FaUsers />,
      title: "Talk with Our Team",
      description:
        "Discuss system size, costing, financing options, subsidy eligibility, and technical feasibility with our solar consultant."
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: "Preview & Order Confirmation",
      description:
        "Receive a detailed proposal including plant design, generation estimate, and pricing. Confirm to proceed further."
    },
    {
      icon: <FaSolarPanel />,
      title: "Installation of Your Solar Plant",
      description:
        "Our commercial solar installer completes installation on time with net-metering support and post-installation assistance."
    }
  ];

  return (
    <section className="Bookcommercialsolar-wrapper">
      <div className="Bookcommercialsolar-container">

        {/* Premium Heading */}
        <div className="Bookcommercialsolar-header">
          <span className="Bookcommercialsolar-label">
            Commercial Solar Booking Process
          </span>

          <h2 className="Bookcommercialsolar-title">
            How to Book Commercial Solar <br />
            <span>Installers in India?</span>
          </h2>

          <p className="Bookcommercialsolar-subtitle">
            A transparent, structured and professional 4-step workflow designed
            for commercial & industrial solar installations.
          </p>
        </div>

        {/* Timeline */}
        <div className="Bookcommercialsolar-timeline">

          <div className="Bookcommercialsolar-connector"></div>

          {steps.map((step, index) => (
            <div key={index} className="Bookcommercialsolar-step">

              <div className="Bookcommercialsolar-circle">
                {step.icon}
              </div>

              <h3>{step.title}</h3>
              <p>{step.description}</p>

              

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Bookcommercialsolar;