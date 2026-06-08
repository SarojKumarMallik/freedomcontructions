import React from 'react'
import about from "../../assets/img/about.webp";
import { Link } from "react-router-dom";
const Servicebreadcrum = () => {
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
        <h1>Services</h1>

       <div className="Contactbreadcrum-breadcrumb">
  <Link to="/" className="home">Home</Link>
  <span className="separator"> / </span>
  <span className="active">Services</span>
</div>

      </div>

    </section>
    
  )
}

export default Servicebreadcrum