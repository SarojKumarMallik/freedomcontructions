import React from "react";
import "./Solaramcservices.css";
import {
  FaBroom,
  FaSyncAlt,
  FaTools,
  FaChartLine,
  FaShieldAlt,
  FaBolt
} from "react-icons/fa";

const Solaramcservices = () => {
  return (
    <section className="Solaramcservices-section">
      <div className="Solaramcservices-glow"></div>

      <div className="Solaramcservices-container">

        {/* Header */}
        <div className="Solaramcservices-header">
          <span className="Solaramcservices-badge">
            Solar AMC Maintenance Program
          </span>

          <h2>
            Why <span>Freedom Contructions</span> for Solar AMC Services?
          </h2>

          <p>
            If you are looking for reliable solar panel maintenance services,
            Freedom Contructions ensures professional support, preventive care,
            and long-term system efficiency for residential, commercial and
            industrial solar plants.
          </p>
        </div>

        {/* Description */}
        <div className="Solaramcservices-description">
          <p>
            We assign only trained and experienced technicians to deliver
            premium quality service. Our AMC plans are flexible and can be
            customised according to your system capacity and operational needs.
          </p>
        </div>

        {/* Features */}
        <div className="Solaramcservices-features">

          <div className="Solaramcservices-card">
            <FaBroom className="Solaramcservices-icon" />
            <h4>Specialised Cleaning</h4>
            <p>Complete solar module cleaning throughout the year.</p>
          </div>

          <div className="Solaramcservices-card">
            <FaSyncAlt className="Solaramcservices-icon" />
            <h4>Preventive Maintenance</h4>
            <p>Scheduled inspection visits to maintain peak performance.</p>
          </div>

          <div className="Solaramcservices-card">
            <FaTools className="Solaramcservices-icon" />
            <h4>Spare Replacement</h4>
            <p>Consumable change and installation of necessary spare parts.</p>
          </div>

          <div className="Solaramcservices-card">
            <FaChartLine className="Solaramcservices-icon" />
            <h4>Performance Reports</h4>
            <p>Monthly performance analysis with detailed reporting.</p>
          </div>

          <div className="Solaramcservices-card">
            <FaShieldAlt className="Solaramcservices-icon" />
            <h4>Insurance Support</h4>
            <p>Solar system insurance options for added protection.</p>
          </div>

          <div className="Solaramcservices-card">
            <FaBolt className="Solaramcservices-icon" />
            <h4>Fast Breakdown Service</h4>
            <p>Quick technical support for urgent maintenance issues.</p>
          </div>

        </div>

        <p className="Solaramcservices-note">
          *All services are offered by our installation partners.
          Service availability may vary depending on agreement and location.
        </p>

      </div>
    </section>
  );
};

export default Solaramcservices;