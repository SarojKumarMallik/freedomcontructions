import React from "react";
import "./Commercialsystemsize.css";

const Commercialsystemsize = () => {
  const data = [
    {
      size: "50 – 75 kW",
      ideal: "Clinic and Retail Outlets, etc."
    },
    {
      size: "75 – 100 kW",
      ideal: "Warehouse, Colleges & Universities and Farm, etc."
    },
    {
      size: "150 – 350 kW",
      ideal: "Hospital and Nursing Homes"
    },
    {
      size: "400 – 1000 kW",
      ideal: "Medium to Large Factories"
    }
  ];

  return (
    <section className="Commercialsystemsize-wrapper">
      <div className="Commercialsystemsize-container">
        
        {/* Header */}
        <div className="Commercialsystemsize-header">
          <h2>
            How to choose the <span>commercial solar system size?</span>
          </h2>
          <p>
            The ideal solar system size of a commercial solar system depends
            on the type of commercial space. Follow this table to get an idea:
          </p>
        </div>

        {/* Table */}
        <div className="Commercialsystemsize-table">
          <div className="Commercialsystemsize-table-head">
            <div>Commercial solar system size</div>
            <div>Ideal for</div>
          </div>

          {data.map((item, index) => (
            <div key={index} className="Commercialsystemsize-table-row">
              <div className="Commercialsystemsize-size">
                {item.size}
              </div>
              <div className="Commercialsystemsize-ideal">
                {item.ideal}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="Commercialsystemsize-note">
          <strong>Note:</strong> Other than these, the installation of commercial solar panels
          for office buildings and business premises involves many other minor components.
        </div>

      </div>
    </section>
  );
};

export default Commercialsystemsize;