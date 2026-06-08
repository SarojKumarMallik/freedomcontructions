import React from "react";
import { FiSun, FiZap, FiActivity, FiArrowUpRight } from "react-icons/fi";
import "./RenergyInnovation.css";

const RenergyInnovation = () => {
  return (
    <section className="renergy">
      <div className="renergy_container">

        {/* HEADER */}
        <div className="renergy_header">
          <h2>
            Renergy <span>Innovation</span>
          </h2>
          <p>
            A next-generation clean energy workflow designed for
            efficiency, sustainability, and long-term performance.
          </p>

          
        </div>

        {/* PROCESS */}
        <div className="renergy_process">

          {/* ENERGY LINE */}
          <div className="energy_line"></div>

          {/* STEP 1 */}
          <div className="energy_step left">
            <div className="energy_icon sun">
              <FiSun />
            </div>
            <div className="energy_card">
              <h4>Sunlight Collection</h4>
              <p>
                High-efficiency photovoltaic panels capture sunlight
                from rooftops and open spaces throughout the day.
              </p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="energy_step right">
            <div className="energy_icon photon">
              <FiZap />
            </div>
            <div className="energy_card">
              <h4>Photon Absorption</h4>
              <p>
                Incoming photons energize semiconductor materials,
                initiating the solar energy conversion process.
              </p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="energy_step left">
            <div className="energy_icon electron">
              <FiActivity />
            </div>
            <div className="energy_card">
              <h4>Electron Movement</h4>
              <p>
                Excited electrons flow through the circuit,
                producing usable, clean electrical power.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RenergyInnovation;
