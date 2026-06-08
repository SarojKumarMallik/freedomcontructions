import React from "react";
import "./Pmsuryaghar.css";
import {
  FaSolarPanel,
  FaBolt,
  FaHandHoldingUsd,
  FaCalendarAlt,
} from "react-icons/fa";
import pmsuryaghar from "../../assets/img/pmsuryaghar.webp";

const Pmsuryaghar = () => {
  return (
    <section className="pmsuryaghar">
      <div className="pmsuryaghar-container">
        {/* Header Section */}
        <div className="pmsuryaghar-header">
          <div className="gov-badge">
            <span>GOVERNMENT SUBSIDY SCHEME</span>
          </div>

          <h1 className="pmsuryaghar-title">
            PM Surya Ghar <span className="suryagharhighlight">Muft Bijli</span>
          </h1>

          <p className="pmsuryaghar-description">
            Freedom Contructions assists customers in availing benefits under
            the PM Surya Ghar scheme, including documentation, application
            processing, and coordination.
          </p>
        </div>

        {/* Main Content */}
        <div className="pmsuryaghar-content">
          {/* Image Section */}
          <div className="pmsuryaghar-image">
            <div className="image-wrapper">
              <img
                src={pmsuryaghar}
                alt="Solar Panel Installation"
              />
            </div>

            {/* ===== PREMIUM SUBSIDY STATS ===== */}
            <div className="subsidy-stats">
              <div className="stat-card">
                <div className="stat-icon">
                  <FaSolarPanel />
                </div>
                <div className="stat-value">3 KW</div>
                <div className="stat-label">SYSTEM CAPACITY</div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <FaBolt />
                </div>
                <div className="stat-value">Free</div>
                <div className="stat-label">ELECTRICITY</div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <FaHandHoldingUsd />
                </div>
                <div className="stat-value">Up to ₹78K</div>
                <div className="stat-label">SUBSIDY BENEFIT</div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <FaCalendarAlt />
                </div>
                <div className="stat-value">8+ Years</div>
                <div className="stat-label">SAVINGS PERIOD</div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
<div className="pmsuryaghar-benefits">
  <div className="benefits-header">
    <div className="benefits-icon">🌞</div>
    <div>
      <h3>PM Surya Ghar Subsidy Support</h3>
      <p>Government-supported rooftop solar scheme in Odisha</p>
    </div>
  </div>

  <div className="benefits-list">

    <div className="benefit">
      <div className="benefit-check">✓</div>
      <div className="benefit-text">
        <h4>We Handle Complete Documentation</h4>
        <p>End-to-end paperwork & DISCOM approval support</p>
      </div>
    </div>

    <div className="benefit">
      <div className="benefit-check">✓</div>
      <div className="benefit-text">
        <h4>Transparent Subsidy Processing</h4>
        <p>Clear tracking & regular updates on your application</p>
      </div>
    </div>

    <div className="benefit">
      <div className="benefit-check">✓</div>
      <div className="benefit-text">
        <h4>Fast Net Metering Approval</h4>
        <p>Quick coordination with local electricity department</p>
      </div>
    </div>

    <div className="benefit">
      <div className="benefit-check">✓</div>
      <div className="benefit-text">
        <h4>Maximum Government Subsidy Assistance</h4>
        <p>Get eligible rooftop solar subsidy under PM Surya Ghar Yojana</p>
      </div>
    </div>

    <div className="benefit">
      <div className="benefit-check">✓</div>
      <div className="benefit-text">
        <h4>Free Site Inspection & System Design</h4>
        <p>Customized solar capacity planning for your home</p>
      </div>
    </div>

    <div className="benefit">
      <div className="benefit-check">✓</div>
      <div className="benefit-text">
        <h4>Hassle-Free Installation Process</h4>
        <p>Certified engineers ensure safe & compliant installation</p>
      </div>
    </div>

    <div className="benefit">
      <div className="benefit-check">✓</div>
      <div className="benefit-text">
        <h4>Long-Term Warranty & Maintenance</h4>
        <p>Performance guarantee with after-installation support</p>
      </div>
    </div>
    <div className="benefit">
  <div className="benefit-check">✓</div>
  <div className="benefit-text">
    <h4>Significant Reduction in Electricity Bills</h4>
    <p>Save up to 80% on monthly power costs with rooftop solar installation</p>
  </div>
</div>

  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Pmsuryaghar;
