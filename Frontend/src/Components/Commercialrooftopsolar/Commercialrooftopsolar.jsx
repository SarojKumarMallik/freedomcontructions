import React from "react";
import {
  FaCheckCircle,
  FaSolarPanel,
  FaLeaf,
  FaShieldAlt,
  FaChartLine,
  FaBolt,
  FaToolbox,
  FaBuilding,
} from "react-icons/fa";
import "./Commercialrooftopsolar.css";

const Commercialrooftopsolar = () => {
  const benefits = [
    {
      title: "Electricity Bill Savings for the Owner",
      desc: "Commercial electricity tariff is around Rs. 12 – Rs. 16 per unit in India. With commercial solar systems, customers can reduce around 75% of their electricity costs.",
      icon: <FaSolarPanel />,
    },
    {
      title: "Enjoy Tax Saving",
      desc: "You can recover your initial investment within the next 3 – 4 years through free electricity generation.",
      icon: <FaLeaf />,
    },
    {
      title: "Get Payback in 4 Years",
      desc: "Your solar investment can be recovered within approximately 4 years from installation. After that, electricity generated becomes pure profit.",
      icon: <FaChartLine />,
    },
    {
      title: "Protection Against Electricity Price Hike",
      desc: "Solar plants generate free electricity for 25–30 years. Even if electricity prices increase, your energy cost remains protected.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Enjoy Cooler Roof",
      desc: "Solar panels block direct sunlight from hitting your rooftop, reducing heat and keeping your commercial space cooler.",
      icon: <FaSolarPanel />,
    },
    {
      title: "Reduce the Risks of Power Outage",
      desc: "With battery backup integration, your commercial activities can continue even during power cuts.",
      icon: <FaBolt />,
    },
    {
      title: "Lower Installation and Maintenance Cost",
      desc: "Commercial solar installation costs are optimized compared to long-term grid electricity usage.",
      icon: <FaToolbox />,
    },
    {
      title: "Improved Business Image",
      desc: "Adopting renewable energy enhances brand value and establishes a positive business image.",
      icon: <FaBuilding />,
    },
  ];

  return (
    <section className="Commercialrooftopsolar-section">
      {/* Premium floating background elements */}
      <div className="Commercialrooftopsolar-bg-shape shape-1"></div>
      <div className="Commercialrooftopsolar-bg-shape shape-2"></div>
      <div className="Commercialrooftopsolar-bg-shape shape-3"></div>

      <div className="Commercialrooftopsolar-container">
        <div className="Commercialrooftopsolar-header">
         
          <h2>
            Why Should You Install{" "}
            <span className="gradient-text">Commercial Rooftop Solar</span>{" "}
            System?
          </h2>
          <p>
            Check out the benefits you can get by installing commercial rooftop
            solar panels in India in 2025:
          </p>
        </div>

        <div className="Commercialrooftopsolar-grid">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="Commercialrooftopsolar-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="Commercialrooftopsolar-icon-wrapper">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="Commercialrooftopsolar-card-shine"></div>
            </div>
          ))}
        </div>

        <div className="Commercialrooftopsolar-cta">
          <a href="/contact" className="premium-cta">
            <span>Connect with Energy Advisors</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.16666 10H15.8333M15.8333 10L11.6667 5.83331M15.8333 10L11.6667 14.1667"
                stroke="currentColor"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Commercialrooftopsolar;