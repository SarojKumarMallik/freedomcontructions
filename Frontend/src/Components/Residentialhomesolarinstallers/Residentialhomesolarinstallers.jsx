import React from "react";
import "./Residentialhomesolarinstallers.css";
import greenenergy from "../../assets/img/green-energy-systems.png";

const Residentialhomesolarinstallers = () => {
  return (
    <section className="InstallersLR-wrapper">
      <div className="InstallersLR-container">

        {/* LEFT CONTENT */}
        <div className="InstallersLR-content">
          <span className="InstallersLR-label">WHY CHOOSE US</span>

          <h2>
            How Freedom Contructions Is <span>Different</span> From
            Traditional Home Solar Installers?
          </h2>

          <p>
            In the traditional way of solar installation, customers visit or
            call installers one by one. It takes time and effort, and you get
            limited options to choose from.
          </p>

          <p>
            Often, there is no proper quality assurance, and some installers
            may push you to make quick decisions.
          </p>

          <p>
            Our platform saves your time, effort, and money. You can compare
            prices, brands, and components in one place without contacting
            multiple installers individually.
          </p>

          <p>
            Additionally, you can check real customer reviews and ensure only
            premium quality components are used in your home solar plant.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="InstallersLR-image">
          <img src={greenenergy} alt="Solar House Installation" />
        </div>

      </div>
    </section>
  );
};

export default Residentialhomesolarinstallers;