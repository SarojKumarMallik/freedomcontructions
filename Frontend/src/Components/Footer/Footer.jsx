import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/img/logo.png";

// React Icons
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-middle">
        <div className="footer-container">
          <div className="footer-columns">
            {/* Column 1 - Brand + Contact + Social */}
            <div className="footer-column">
              {/* Social Media Section */}
              <div className="footer-social">
                <div className="social-logo-section">
                  <img src={logo} alt="BSP Logo" className="social-logo" />
                </div>

                {/* ✅ NEW TEXT BELOW LOGO */}
                <div className="footer-brand-text">
                  <h4 className="brand-title">Freedom Contructions</h4>
                  <p className="brand-description">
                    Delivering innovative solar energy solutions for homes,
                    businesses, and industries. Empowering a sustainable
                    tomorrow with reliable, efficient, and affordable renewable
                    energy systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div className="footer-column">
              <h3 className="footer-column-title">Quick Links</h3>
              <ul className="footer-menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                {/* <li>
                  <Link to="/blogs">Blog</Link>
                </li>
                <li>
                  <Link to="/career">Carrer</Link>
                </li> */}
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Categories */}
            <div className="footer-column">
              <h3 className="footer-column-title">Our Services</h3>
              <ul className="footer-categories">
                <li>
                  <Link to="/services/on-grid-solar-system">
                    On Grid Solar System
                  </Link>
                </li>
                <li>
                  <Link to="/services/hybrid-solar-system">
                    Hybrid Solar System
                  </Link>
                </li>
                <li>
                  <Link to="/services/off-grid-solar-system">
                    Off-Grid Solar System
                  </Link>
                </li>
                <li>
                  <Link to="/services/solar-amc">Solar AMC</Link>
                </li>
                <li>
                  <Link to="/projects/residential-home-solar-system-installation">
                    Home & Residential
                  </Link>
                </li>
                <li>
                  <Link to="/projects/commercial-industrial-solar-system">
                    Commercial & Industrial
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 - Map & Store Info */}
            <div className="footer-column">
              <h3 className="footer-column-title">Visit Our Store</h3>
              <div className="map-container">
                <div className="map-wrapper">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3107.6398830977528!2d86.47729027525746!3d21.058673780598138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDAzJzMxLjIiTiA4NsKwMjgnNDcuNSJF!5e1!3m2!1sen!2sin!4v1780827328697!5m2!1sen!2sin"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                  
                </div>
                <div className="map-overlay">
                  <p>
                    <a
                      href="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3107.6398830977528!2d86.47729027525746!3d21.058673780598138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDAzJzMxLjIiTiA4NsKwMjgnNDcuNSJF!5e1!3m2!1sen!2sin!4v1780827328697!5m2!1sen!2sin"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <FaMapMarkerAlt /> Charigharia,Bhadrak,Odisha
                    </a>
                  </p>

                  <p>
                    <a
                      href="tel:+918280152685"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <FaPhone
                        style={{
                          transform: "rotate(90deg)",
                          display: "inline-block",
                          marginRight: "6px",
                        }}
                      />
                      +91 8280152685
                    </a>
                  </p>

                  <p>
                    <a
                      href="mailto:freedom.bhadrak@gmail.com"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <FaEnvelope /> freedom.bhadrak@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>
                &copy; {new Date().getFullYear()}{" "}
                <strong>Freedom Contructions</strong>. All rights reserved.
              </p>
            </div>

            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaTwitter />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaYoutube />
              </a>
              <a
                href="https://wa.me/918280152685?text=Hello%20Freedom%20Constructions,%20I%20am%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div className="footer-credit">
            <p>
              Designed with ❤️ by{" "}
              <a
                href="https://www.instagram.com/creovatetechnologies/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Creovate Technologies
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
