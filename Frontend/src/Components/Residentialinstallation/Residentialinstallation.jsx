import React from "react";
import "./Residentialinstallation.css";
import Residentialinstallationimg from "../../assets/img/home-and-residential-solar-panel-installation001.png";

const Residentialinstallation = () => {
  return (
    <section className="Residentialinstallation-section">
      <div className="Residentialinstallation-glow"></div>

      <div className="Residentialinstallation-container">

        {/* LEFT IMAGE */}
        <div className="Residentialinstallation-image">
          <img
            src={Residentialinstallationimg}
            alt="Home Solar Installation Benefits"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="Residentialinstallation-content">

          <h2 className="Residentialinstallation-title">
            Why Should You Choose Solar <br />
            <span>Installation in Home?</span>
          </h2>

          <p className="Residentialinstallation-subtext">
            Installing solar energy at home has multiple benefits such as:
          </p>

          <div className="Residentialinstallation-grid">

            <div className="Residentialinstallation-card">
              <h4>Electricity Bill Savings:</h4>
              <p>
                With on-grid home solar system installation, you can reduce your monthly electricity bills by up to 95%.
              </p>
            </div>

            <div className="Residentialinstallation-card">
              <h4>Payback Period:</h4>
              <p>
                Don’t worry about a high initial investment, you will get it back within the next 3 – 4 years from your house solar plant as free electricity.
              </p>
            </div>

            <div className="Residentialinstallation-card">
              <h4>Get Protection Against Price Hike:</h4>
              <p>
                After solar power installation at home, you can safeguard yourself for the next 25–30 years from electricity cost inflation.
              </p>
            </div>

            <div className="Residentialinstallation-card">
              <h4>Solar Subsidy:</h4>
              <p>
                You can get up to Rs. 78,000 subsidy from the central government scheme with a solar power plant at home.
              </p>
            </div>

            <div className="Residentialinstallation-card">
              <h4>Environmental Benefits:</h4>
              <p>
                Solar energy for home is an eco-friendly way to generate electricity as it has no carbon or greenhouse gas emissions into the environment.
              </p>
            </div>

            <div className="Residentialinstallation-card">
              <h4>Return on Investment:</h4>
              <p>
                The one-time investment in solar system for home gives you returns for up to 25 years in terms of electricity generation.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Residentialinstallation;