import React from "react";
import "./Commercialsolarsystem.css";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Commercialsolarsystem = () => {
  const components = [
    { name: "Solar Panels", onGrid: true, offGrid: true },
    { name: "Solar Inverters", onGrid: true, offGrid: true },
    { name: "Monitoring System", onGrid: true, offGrid: true },
    { name: "Mounting Structure", onGrid: true, offGrid: true },
    { name: "Net Meter", onGrid: true, offGrid: false },
    { name: "Charge Controller", onGrid: false, offGrid: true },
    { name: "Solar Battery", onGrid: false, offGrid: true },
  ];

  return (
    <section className="Commercialsolarsystem-wrapper">
      <div className="Commercialsolarsystem-container">

        <div className="Commercialsolarsystem-header">
          <span className="Commercialsolarsystem-badge">
            System Components
          </span>
          <h2>
            Components of a <span>Commercial Solar System</span>
          </h2>
          <p>
            Here are the major commercial solar system components for On-Grid
            and Off-Grid installations.
          </p>
        </div>

        <div className="Commercialsolarsystem-table-wrapper">
          <table className="Commercialsolarsystem-table">
            <thead>
              <tr>
                <th>Component Name</th>
                <th>On-Grid System</th>
                <th>Off-Grid System</th>
              </tr>
            </thead>
            <tbody>
              {components.map((item, index) => (
                <tr key={index}>
                  <td className="Commercialsolarsystem-component">
                    {item.name}
                  </td>

                  <td className="Commercialsolarsystem-icon-cell">
                    {item.onGrid ? (
                      <FaCheckCircle className="Commercialsolarsystem-check" />
                    ) : (
                      <FaTimesCircle className="Commercialsolarsystem-cross" />
                    )}
                  </td>

                  <td className="Commercialsolarsystem-icon-cell">
                    {item.offGrid ? (
                      <FaCheckCircle className="Commercialsolarsystem-check" />
                    ) : (
                      <FaTimesCircle className="Commercialsolarsystem-cross" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="Commercialsolarsystem-note">
          Note: Apart from these components, installation for office buildings
          and business premises includes additional minor components.
        </p>

      </div>
    </section>
  );
};

export default Commercialsolarsystem;