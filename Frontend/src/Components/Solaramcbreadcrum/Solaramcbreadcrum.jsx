import React from 'react'
import "../Aboutbreadcrum/Aboutbreadcrum.css";
import about from "../../assets/img/solaramc_bread.webp";
import { Link } from "react-router-dom";
const Solaramcbreadcrum = () => {
  return (
     <section className="Contactbreadcrum">
              {/* Background Image */}
              <img
                src={about}
                alt="Contact Background"
                className="Contactbreadcrum-bg"
                loading="eager"
                decoding="async"
                fetchpriority="high"
              />
        
              {/* Overlay */}
              <div className="Contactbreadcrum-overlay"></div>
        
              {/* Content */}
              <div className="Contactbreadcrum-content">
                <h1>Solar AMC</h1>
        
                <div className="Contactbreadcrum-breadcrumb">
                  <Link to="/" className="home">
                    Home
                  </Link>
                  <span className="separator"> / </span>
                  <span style={{ color: "white" }}>Services</span>
                  <span className="separator"> / </span>
                  <span className="active">Solar AMC</span>
                </div>
              </div>
            </section>
  )
}

export default Solaramcbreadcrum