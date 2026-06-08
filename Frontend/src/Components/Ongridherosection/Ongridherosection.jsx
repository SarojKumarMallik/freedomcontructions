import React from "react";
import "./Ongridherosection.css";
import ongridimg from "../../assets/img/ongrid.png";
import { FaBolt, FaSolarPanel, FaMoneyBillWave } from "react-icons/fa";

const Ongridherosection = () => {
  return (
    <section className="ongrid-hero">
      <div className="ongrid-container">
        {/* LEFT CONTENT */}
        <div className="ongrid-content">
          <h1>
            On Grid <span>Solar System Installation in Odisha</span>
          </h1>

          <p className="ongrid-description">
            At <strong>Freedom Contructions</strong>, we deliver end-to-end
            on-grid solar system installation across India as per MNRE
            standards. Get your grid-connected solar power system installed at
            an affordable cost and cut down up to 95% of your monthly
            electricity bills.
          </p>
          <p className="ongrid-description">
  Serving Bhadrak, Balasore, Mayurbhanj, Jajpur, and Keonjhar across Odisha.
</p>

          <div className="ongrid-benefits">
            <div className="benefit-item">
              <FaSolarPanel className="benefit-icon" />
              <span>MNRE Approved Installation</span>
            </div>

            <div className="benefit-item">
              <FaBolt className="benefit-icon" />
              <span>Net Metering Support</span>
            </div>

            <div className="benefit-item">
              <FaMoneyBillWave className="benefit-icon" />
              <span>Save Up To 95% Electricity Bill</span>
            </div>
          </div>

          <div className="ongrid-buttons">
            <a href="/contact" className="primary-btn">
              Get Free Consultation
            </a>

            <a href="tel:+91" className="secondary-btn">
              Call Now
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="ongrid-image">
          <img src={ongridimg} alt="On Grid Solar System Diagram" />
        </div>
      </div>
    </section>
  );
};

export default Ongridherosection;
