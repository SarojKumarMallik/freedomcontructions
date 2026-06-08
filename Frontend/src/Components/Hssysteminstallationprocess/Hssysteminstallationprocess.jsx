import React from "react";
import "./Hssysteminstallationprocess.css";

const Hssysteminstallationprocess = () => {
  const steps = [
    {
      title: "Application at Freedom Contructions",
      content:
        "Fill in our hybrid solar system installation application form with your monthly energy requirement and other details such as name, contact number, monthly electricity bill, etc. Check your inputs carefully before submission."
    },
    {
      title: "Talk With our Hybrid Solar Advisor",
      content:
        "After getting your details, our energy advisor will contact you within the next few working days. If you have any questions or doubts, you can ask. After hearing your requirement, we will arrange a site visit with the eligible & nearest installation partner."
    },
    {
      title: "Final Quotation & Order Confirmation",
      content:
        "After the site visit, our installation partner will send you a final quotation for your hybrid solar solutions including 3D design/planning, pricing details, product details and warranty info. Then you confirm the installation."
    },
    {
      title: "Completion of Hybrid Solar Panel System Installation",
      content:
        "After confirmation, our solar installation partner starts the installation process. They deliver the complete hybrid solar solution along with all accessories and complete the installation professionally."
    },
    {
      title: "Final Checks and Grid Connection",
      content:
        "After installation, final checks are done and required documents for solar subsidy are provided. DISCOM officials verify and connect the system to the power grid."
    }
  ];

  return (
    <section className="bsp-install-section">
      <div className="bsp-container">

        {/* HEADER */}
        <div className="bsp-header">
          <span className="bsp-badge">Freedom Contructions INSTALLATION PROCESS</span>
          <h2>
            Hybrid Solar Installation <span>Process Flow</span>
          </h2>
          <p>
            A structured, transparent and professional step-by-step installation approach.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="bsp-timeline">
          {steps.map((step, index) => (
            <div className="bsp-step" key={index}>
              <div className="bsp-left">
                <div className="bsp-circle">{index + 1}</div>
                {index !== steps.length - 1 && <div className="bsp-line"></div>}
              </div>

              <div className="bsp-card">
                <h3>{step.title}</h3>
                <p>{step.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bsp-cta">
          <a href="/contact" className="bsp-btn">
            Contact Freedom Contructions Experts →
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hssysteminstallationprocess;