import React from "react";
import "./Commercialindustrialhero.css";
import Commercialindustrialheroimg from "../../assets/img/commercial-solar.jpg";

const Commercialindustrialhero = () => {
  return (
    <section className="Commercialindustrialhero-section">
      <div className="Commercialindustrialhero-container">

        {/* LEFT CONTENT */}
        <div className="Commercialindustrialhero-content">

          <h1 className="Commercialindustrialhero-title">
            Commercial Solar System <span>Installation</span>
          </h1>

          <p>
            Did you know? 99% of the rooftop spaces of commercial buildings
            remain unutilized in India. If you have a large rooftop in your
            business building, you can use it profitably with commercial solar installation.
          </p>

          <p>
            Commercial solar systems can save up to 75% of your electricity bills.
            For example, a 250 kW commercial solar plant can generate up to
            1000 – 1250 units of electricity daily. This solar plant can generate
            electricity worth Rs. 63,00,000 annually (assuming tariff is Rs. 15/unit).
            It’s a huge saving for your business.
          </p>

          <p>
            Why not save this bill by installing a commercial solar system?
            Book your solar installation for your commercial space and install
            the system at the best price.
          </p>

          <a href="/contact" className="Commercialindustrialhero-btn">
            Request A Quote
          </a>

        </div>

        {/* RIGHT IMAGE */}
        <div className="Commercialindustrialhero-image">
          <img src={Commercialindustrialheroimg} alt="Commercial Solar Plant" />
        </div>

      </div>
    </section>
  );
};

export default Commercialindustrialhero;