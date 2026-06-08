import React from "react";
import "./Ongridsolarsavings.css";

const Ongridsolarsavings = () => {
  return (
    <section className="solar-savings-section">
      <div className="solar-container">

        <div className="solar-header">
          <span className="section-badge">✦ SAVINGS CALCULATOR ✦</span>
          <h2 className="solar-heading">
            On-Grid Solar <span className="heading-gradient">Savings Calculation</span>
          </h2>
          <p className="solar-subtext">
            Not getting a subsidy? Don't worry, here is a table for calculation table you:
          </p>
          <div className="header-divider">
            <span className="divider-line"></span>
            
            <span className="divider-line"></span>
          </div>
        </div>

        <div className="table-wrapper">
          <table className="solar-table">
            <thead>
              <tr>
                <th>Solar Capacity</th>
                <th>Installation Cost</th>
                <th>Savings/Year*</th>
                <th>Lifetime Savings (25 Years)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="capacity-cell">2 kW</td>
                <td>
                  <span className="cost-range">Rs. 1,40,000</span> to <span className="cost-range">Rs.1,80,000</span>
                </td>
                <td className="savings-cell">Rs. 28,800</td>
                <td className="lifetime-cell">Rs. 7,20,000</td>
              </tr>
              <tr>
                <td className="capacity-cell">3 kW</td>
                <td>
                  <span className="cost-range">Rs. 1,90,000</span> to <span className="cost-range">Rs.2,30,000</span>
                </td>
                <td className="savings-cell">Rs. 43,200</td>
                <td className="lifetime-cell">Rs. 10,80,000</td>
              </tr>
              <tr>
                <td className="capacity-cell">4 kW</td>
                <td>
                  <span className="cost-range">Rs. 2,40,000</span> to <span className="cost-range">Rs.2,80,000</span>
                </td>
                <td className="savings-cell">Rs. 57,600</td>
                <td className="lifetime-cell">Rs. 14,40,000</td>
              </tr>
              <tr>
                <td className="capacity-cell">5 kW</td>
                <td>
                  <span className="cost-range">Rs. 2,90,000</span> to <span className="cost-range">Rs.3,30,000</span>
                </td>
                <td className="savings-cell">Rs. 72,000</td>
                <td className="lifetime-cell">Rs. 18,00,000</td>
              </tr>
              <tr>
                <td className="capacity-cell">6 kW</td>
                <td>
                  <span className="cost-range">Rs. 3,40,000</span> to <span className="cost-range">Rs.3,80,000</span>
                </td>
                <td className="savings-cell">Rs. 86,400</td>
                <td className="lifetime-cell">Rs. 21,60,000</td>
              </tr>
              <tr>
                <td className="capacity-cell">8 kW</td>
                <td>
                  <span className="cost-range">Rs. 4,40,000</span> to <span className="cost-range">Rs.4,80,000</span>
                </td>
                <td className="savings-cell">Rs. 1,15,200</td>
                <td className="lifetime-cell">Rs. 28,80,000</td>
              </tr>
              <tr>
                <td className="capacity-cell">10 kW</td>
                <td>
                  <span className="cost-range">Rs. 5,40,000</span> to <span className="cost-range">Rs.5,80,000</span>
                </td>
                <td className="savings-cell">Rs. 1,44,000</td>
                <td className="lifetime-cell">Rs. 36,00,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="solar-note-wrapper">
          <div className="note-icon">⚡</div>
          <p className="solar-note">
            *Here we have considered average per day electricity generation = 5 units/kW 
            and 1 unit electricity cost = Rs. 8/-
          </p>
        </div>

      </div>
    </section>
  );
};

export default Ongridsolarsavings;