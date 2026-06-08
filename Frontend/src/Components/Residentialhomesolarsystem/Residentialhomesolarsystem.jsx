import React from "react";
import "./Residentialhomesolarsystem.css";

const Residentialhomesolarsystem = () => {
  const solarData = [
    {
      area: "100 – 200",
      modules: "4 × 550Wp",
      pcu: "2 kVA",
      batteries: "2 × 12V / 150Ah",
      generation: "3,600 Units"
    },
    {
      area: "200 – 300",
      modules: "6 × 550Wp",
      pcu: "3.75 kVA",
      batteries: "4 × 12V / 150Ah",
      generation: "6,700 Units"
    },
    {
      area: "300 – 500",
      modules: "12 × 550Wp",
      pcu: "6.25 kVA",
      batteries: "8 × 12V / 150Ah",
      generation: "11,250 Units"
    },
    {
      area: "500 – 700",
      modules: "14 × 550Wp",
      pcu: "7.5 kVA",
      batteries: "10 × 12V / 150Ah",
      generation: "13,500 Units"
    }
  ];

  return (
    <section className="Residentialhome-section-wrapper">
      <div className="Residentialhome-container">

        {/* HEADER */}
        <div className="Residentialhome-header">
          <span className="Residentialhome-label">HOME SOLAR SOLUTIONS</span>

          <h2 className="Residentialhome-heading">
            Different Types of <span>Home Solar System</span> We Install
          </h2>

          <p className="Residentialhome-description">
            We provide premium rooftop solar systems including On-Grid,
            Off-Grid and Hybrid solutions designed for maximum savings,
            efficiency and long-term reliability.
          </p>
        </div>

        {/* ON GRID */}
        <div className="Residentialhome-block">
          <h3>On-Grid Solar Energy Plant For Home</h3>
          <div className="Residentialhome-grid">
            {solarData.map((item, index) => (
              <div className="Residentialhome-card" key={index}>
                <h4>{item.area} Sq.Ft.</h4>
                <ul>
                  <li><strong>Modules:</strong> {item.modules}</li>
                  <li><strong>PCU:</strong> {item.pcu}</li>
                  <li><strong>Batteries:</strong> {item.batteries}</li>
                  <li><strong>Annual Generation:</strong> {item.generation}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* OFF GRID */}
        <div className="Residentialhome-block">
          <h3>Off-Grid Solar Energy Plant For Home</h3>
          <div className="Residentialhome-grid">
            {solarData.map((item, index) => (
              <div className="Residentialhome-card" key={index}>
                <h4>{item.area} Sq.Ft.</h4>
                <ul>
                  <li><strong>Modules:</strong> {item.modules}</li>
                  <li><strong>PCU:</strong> {item.pcu}</li>
                  <li><strong>Batteries:</strong> {item.batteries}</li>
                  <li><strong>Annual Generation:</strong> {item.generation}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* HYBRID */}
        <div className="Residentialhome-block">
          <h3>Hybrid Solar Energy Plant For Home</h3>
          <p className="Residentialhome-hybrid-text">
            Hybrid systems combine the benefits of on-grid and off-grid
            technology. Reduce electricity bills while ensuring uninterrupted
            power backup during outages.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Residentialhomesolarsystem;