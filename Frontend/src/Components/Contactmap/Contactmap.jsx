import React from "react";
import "./Contactmap.css";

const Contactmap = () => {
  return (
    <section className="contactmap-section">
      <div className="contactmap-container">

        <div className="contactmap-header">
          <span className="contactmap-subtitle">OUR LOCATION</span>
          <h2 className="contactmap-title">
            Visit Freedom Contructions
          </h2>
          <p className="contactmap-description">
            We are located in Bhadrak, Odisha. Feel free to visit our office
            or reach out to us for solar and industrial solutions.
          </p>
        </div>

        <div className="contactmap-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3107.6398830977528!2d86.47729027525746!3d21.058673780598138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDAzJzMxLjIiTiA4NsKwMjgnNDcuNSJF!5e1!3m2!1sen!2sin!4v1780827328697!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Freedom Contructions Location"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Contactmap;
