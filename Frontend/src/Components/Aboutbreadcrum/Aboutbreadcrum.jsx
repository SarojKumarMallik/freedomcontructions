import React from "react";
import "./Aboutbreadcrum.css";
import about from "../../assets/img/about.webp";
import { Link } from "react-router-dom";

const AboutBreadcrumb = () => {
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
           <h1>About Us</h1>
   
          <div className="Contactbreadcrum-breadcrumb">
     <Link to="/" className="home">Home</Link>
     <span className="separator"> / </span>
     <span className="active">About Us</span>
   </div>
   
         </div>
   
       </section>
  );
};

export default AboutBreadcrumb;
