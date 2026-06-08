import React from "react";
import "./Homeenergyservice.css";

const Homeenergyservice = () => {
  return (
    <section className="energy-section">
      <div className="energy-container">
        {/* LEFT CONTENT */}
        <div className="energy-left">
          <span className="energy-tag">ENERGY</span>

          <h2 className="energy-title">
            Clean <br /> Power
          </h2>

          <p className="energy-desc">
            Powering the future with clean, renewable solar energy.
            <br />
            Join us for a brighter, sustainable tomorrow.
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="energy-right">
          <p className="energy-intro">
            Join ENERGI to lead the future of renewable energy with innovative
            solar solutions. Contribute to sustainability and professional
            growth.
          </p>

          <div className="energy-stats">
            <div className="stat-box">
              <h3>85%</h3>
              <span>FINANCIAL RETURNS</span>
            </div>

            <div className="stat-box">
              <h3>95%</h3>
              <span>SYSTEM PERFORMANCE</span>
            </div>

            <div className="stat-box">
              <h3>75%</h3>
              <span>ADOPTION RATES</span>
            </div>

            <div className="stat-box">
              <h3>65%</h3>
              <span>CUSTOMER GROWTH</span>
            </div>
          </div>

          <button className="energy-btn">
            Get in Touch <span>↗</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Homeenergyservice;
