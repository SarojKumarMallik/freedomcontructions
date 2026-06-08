import React from "react";
import "./Solaramcsolarpanels.css";

const Solaramcsolarpanels = () => {
  return (
    <section className="Solaramcsolarpanels-wrapper">
      <div className="Solaramcsolarpanels-container">

        <h2 className="Solaramcsolarpanels-title">
          What Can Go Wrong If Solar Panels Are Not Maintained?
        </h2>

        <p className="Solaramcsolarpanels-subtitle">
          Here is a detailed comparison which can help you understand the scenario 
          if the solar panels are not maintained:
        </p>

        <div className="Solaramcsolarpanels-table-wrapper">
          <table className="Solaramcsolarpanels-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Non-AMC</th>
                <th className="highlight-head">Solar AMC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Aspect">Maintenance</td>
                <td data-label="Non-AMC">
                  The serious issues may go unnoticed due to no regular maintenance
                </td>
                <td data-label="Solar AMC" className="highlight">
                  Regular maintenance of the solar plant (bi-monthly/monthly/quarterly) especially to find unnoticed issues
                </td>
              </tr>

              <tr>
                <td data-label="Aspect">Cleaning</td>
                <td data-label="Non-AMC">
                  With negligence, the system’s efficiency may drop up to 30%.
                </td>
                <td data-label="Solar AMC" className="highlight">
                  With regular cleaning, the chances of efficiency loss are very low.
                </td>
              </tr>

              <tr>
                <td data-label="Aspect">Monitoring</td>
                <td data-label="Non-AMC">
                  Without a monitoring system, there can be undetected issues.
                </td>
                <td data-label="Solar AMC" className="highlight">
                  Continuous monitoring helps to track any issue at the earliest.
                </td>
              </tr>

              <tr>
                <td data-label="Aspect">Support</td>
                <td data-label="Non-AMC">
                  No direct support from professionals or limited guidance.
                </td>
                <td data-label="Solar AMC" className="highlight">
                  Trained technicians are always ready to serve you.
                </td>
              </tr>

              <tr>
                <td data-label="Aspect">Cost</td>
                <td data-label="Non-AMC">
                  Huge and unexpected repair costs can arise at times.
                </td>
                <td data-label="Solar AMC" className="highlight">
                  Timely maintenance reduces the chances of major problems or damages in the solar power plant.
                </td>
              </tr>

              <tr>
                <td data-label="Aspect">Warranty</td>
                <td data-label="Non-AMC">
                  No assurance of guidance during warranty claims.
                </td>
                <td data-label="Solar AMC" className="highlight">
                  Get free repair service and help during warranty claims.
                </td>
              </tr>

              <tr>
                <td data-label="Aspect">Response</td>
                <td data-label="Non-AMC">
                  Unprofessional and delayed responses may lead to extended downtime of your solar system.
                </td>
                <td data-label="Solar AMC" className="highlight">
                  Guaranteed quick response within 48 hours of reporting.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default Solaramcsolarpanels;