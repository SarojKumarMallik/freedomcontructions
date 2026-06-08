import React from "react";
import {
  FaSolarPanel,
  FaTools,
  FaDraftingCompass,
  FaLightbulb,
  FaMoneyCheckAlt,
  FaSearchLocation,
} from "react-icons/fa";
import "./Homeservice.css";

const Homeservice = () => {
  const services = [
    {
      icon: FaSolarPanel,
      title: "Installation",
      description:
        "Setting up solar panels and related equipment at residential, commercial, and industrial locations.",
    },
    {
      icon: FaTools,
      title: "Maintenance",
      description:
        "Regular upkeep and repair of solar systems to ensure optimal performance and longevity.",
    },
    {
      icon: FaDraftingCompass,
      title: "System Design",
      description:
        "Customizing solar solutions based on energy needs, site conditions, and efficiency goals.",
    },
    {
      icon: FaLightbulb,
      title: "Energy Consulting",
      description:
        "Advising on energy usage, savings, and how solar fits into overall energy strategies.",
    },
    {
      icon: FaMoneyCheckAlt,
      title: "Financing",
      description:
        "Providing funding options for solar installations, including loans, leases, and power purchase agreements (PPAs).",
    },
    {
      icon: FaSearchLocation,
      title: "Feasibility Analysis",
      description:
        "Analyzing site viability including sunlight exposure, roof orientation, and system potential.",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">

        {/* LEFT CONTENT */}
        <div className="services-left">
          <span className="services-tag">SERVICES</span>
          <h2>
            Reliable Solar <br /> Services
          </h2>
          <p>
            Our solar energy company offers installation, maintenance,
            consultation, financing, monitoring, energy storage, grid
            integration, and performance optimization tailored for homes,
            businesses, and industries.
          </p>
        </div>

        {/* RIGHT GRID */}
        <div className="services-right">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div className="service-card" key={index}>
                <div className="service-icon-wrapper">
                  <IconComponent className="service-icon" />
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <div className="service-card-border"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Homeservice;
