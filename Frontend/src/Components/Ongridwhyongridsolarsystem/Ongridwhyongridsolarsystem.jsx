import React from "react";
import "./Ongridwhyongridsolarsystem.css";
import {
  FaMoneyBillWave,
  FaChartLine,
  FaPiggyBank,
  FaTools,
  FaLeaf,
} from "react-icons/fa";

const Ongridwhyongridsolarsystem = () => {
  const services = [
  {
    icon: <FaMoneyBillWave />,
    title: "Save Your Electricity Bills",
    description:
      "An on-grid solar system sends the electricity generated from your solar panels directly to the utility grid through net metering. At the end of each month, you only pay for the net units consumed (import minus export). This smart energy solution can help you reduce up to 95% of your monthly electricity bills.",
  },
  {
    icon: <FaChartLine />,
    title: "Get High Returns on Your Investment",
    description:
      "Once installed, an on-grid solar power system can generate clean electricity for 25–30 years. Your savings on electricity bills act as long-term financial returns, offering an estimated 20%–40% annual return on investment while protecting you from rising power tariffs.",
  },
  {
    icon: <FaPiggyBank />,
    title: "Avail Solar Subsidy",
    description:
      "Under the Central Government solar subsidy scheme, eligible homeowners can receive financial assistance of up to ₹78,000 for installing an on-grid solar system. The government has allocated significant funds to promote rooftop solar adoption and support 1 crore households across India.",
  },
  {
    icon: <FaTools />,
    title: "Low Maintenance & Easy Installation",
    description:
      "Grid-connected solar systems are simple to install and require minimal maintenance. With no batteries involved, the upkeep cost is very low — typically around 1%–2% of the total installation cost annually, making it a hassle-free energy solution.",
  },
  {
    icon: <FaLeaf />,
    title: "Reduce Carbon Emissions",
    description:
      "Solar energy is one of the cleanest and most sustainable renewable energy sources available. It produces zero greenhouse gas emissions. A 3kW on-grid solar system can reduce up to 2.5 tons of CO₂ annually — equivalent to avoiding the carbon emissions from driving a car for nearly 8,000 kilometers each year.",
  },
];

  return (
    <section className="Ongridwhyongridsolarsystem-section">
      <div className="Ongridwhyongridsolarsystem-container">
        <div className="Ongridwhyongridsolarsystem-header">
          <div className="Ongridwhyongridsolarsystem-header-top">
            <span className="Ongridwhyongridsolarsystem-section-badge">
              ✦ ON-GRID SOLAR ✦
            </span>
          </div>

          <h2 className="Ongridwhyongridsolarsystem-title">
            Why{" "}
            <span className="Ongridwhyongridsolarsystem-title-gradient">
              On-Grid
            </span>{" "}
            Solar System?
          </h2>

          <p className="Ongridwhyongridsolarsystem-subtitle">
            These are the reasons to choose grid-connected solar PV system
            installation:
          </p>

          <div className="Ongridwhyongridsolarsystem-header-divider">
            <span className="Ongridwhyongridsolarsystem-divider-line"></span>
            
            
          </div>
        </div>

        <div className="Ongridwhyongridsolarsystem-grid">
          {services.map((item, index) => (
            <div key={index} className="Ongridwhyongridsolarsystem-card">
              <div className="Ongridwhyongridsolarsystem-card-top">
                <div className="Ongridwhyongridsolarsystem-card-icon">
                  {item.icon}
                </div>
              </div>

              <h3 className="Ongridwhyongridsolarsystem-card-title">
                {item.title}
              </h3>
              <p className="Ongridwhyongridsolarsystem-card-description">
                {item.description}
              </p>

              <div className="Ongridwhyongridsolarsystem-card-bottom">
                <span className="Ongridwhyongridsolarsystem-card-dot"></span>
                <span className="Ongridwhyongridsolarsystem-card-dot"></span>
                <span className="Ongridwhyongridsolarsystem-card-dot"></span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Ongridwhyongridsolarsystem;