import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

import {
  FaFacebookF,
  FaYoutube,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaChevronDown,
  FaPhoneAlt,
  FaEnvelope,
  FaSolarPanel,
  FaBolt,
  FaBatteryFull,
  FaTools,
  FaHome,
  FaBuilding,
  FaNewspaper,
  FaInfoCircle,
  FaEnvelope as FaContact,
  FaTimes,
  FaBars,
  FaTwitter,  
} from "react-icons/fa";

import logo from "../../assets/img/logo.png";
import pmsurya from "../../assets/img/PMSG+logo.png";
import tatapower from "../../assets/img/Tata+Power+logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // ✅ NEW STATE FOR MOBILE DROPDOWN
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? "hidden" : "auto";
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleDropdownHover = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  return (
    <>
      {/* ================= PREMIUM TOPBAR ================= */}
      <div className="Navbar-topbar">
        <div className="Navbar-topbar-container">
          <div className="Navbar-top-left">
           <div className="Navbar-contact-item">
  <FaPhoneAlt className="Navbar-contact-icon" />
  
  <a 
    href="tel:+918280152685" 
    className="Navbar-contact-link"
  >
    +91 8280152685
  </a>
</div>
            <div className="Navbar-contact-item">
  <FaEnvelope className="Navbar-contact-icon" />
  <a
    href="mailto:freedom.bhadrak@gmail.com"
    className="Navbar-contact-link"
  >
    freedom.bhadrak@gmail.com
  </a>
</div>
          </div>

         
          <div className="Navbar-top-right">
            <a href="#" className="Navbar-social-link">
              <FaFacebookF />
            </a>
            <a href="#" className="Navbar-social-link">
              <FaYoutube />
            </a>
           
            <a href="#" className="Navbar-social-link">
              <FaInstagram />
            </a>
            <a href="#" className="Navbar-social-link">
              <FaTwitter />
            </a>
           
            <a href="https://wa.me/918280152685?text=Hello%20Freedom%20Constructions,%20I%20am%20interested%20in%20your%20services." className="Navbar-social-link">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logo} alt="Freedom Contructions" />
          </NavLink>

          {/* DESKTOP MENU (UNCHANGED) */}
          <nav className="navbar-menu">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              About Us
            </NavLink>

            {/* SERVICES DESKTOP */}
            <div
              className="nav-item dropdown"
              onMouseEnter={() => handleDropdownHover("services")}
              onMouseLeave={() => handleDropdownHover(null)}
            >
              <span className="dropdown-trigger">
                Services
                <FaChevronDown
                  className={`arrow ${activeDropdown === "services" ? "rotated" : ""}`}
                />
              </span>

              <div
                className={`dropdown-menu ${activeDropdown === "services" ? "show" : ""}`}
              >
                <NavLink to="/services/on-grid-solar-system">
                  <FaBolt className="dropdown-icon" />
                  <div className="dropdown-text">
                    <span className="dropdown-title">On Grid Solar System</span>
                    <span className="dropdown-desc">
                      Grid-connected solution
                    </span>
                  </div>
                </NavLink>

                <NavLink to="/services/hybrid-solar-system">
                  <FaSolarPanel className="dropdown-icon" />
                  <div className="dropdown-text">
                    <span className="dropdown-title">Hybrid Solar System</span>
                    <span className="dropdown-desc">With battery backup</span>
                  </div>
                </NavLink>

                <NavLink to="/services/off-grid-solar-system">
                  <FaBatteryFull className="dropdown-icon" />
                  <div className="dropdown-text">
                    <span className="dropdown-title">Off Grid Solar</span>
                    <span className="dropdown-desc">Independent power</span>
                  </div>
                </NavLink>

                <NavLink to="/services/solar-amc">
                  <FaTools className="dropdown-icon" />
                  <div className="dropdown-text">
                    <span className="dropdown-title">Solar AMC</span>
                    <span className="dropdown-desc">Maintenance Support</span>
                  </div>
                </NavLink>
              </div>
            </div>

            {/* PROJECTS DESKTOP */}
            <div
              className="nav-item dropdown"
              onMouseEnter={() => handleDropdownHover("projects")}
              onMouseLeave={() => handleDropdownHover(null)}
            >
              <span className="dropdown-trigger">
                Projects
                <FaChevronDown
                  className={`arrow ${activeDropdown === "projects" ? "rotated" : ""}`}
                />
              </span>

              <div
                className={`dropdown-menu ${activeDropdown === "projects" ? "show" : ""}`}
              >
                <NavLink to="/projects/residential-home-solar-system-installation">
                  <FaHome className="dropdown-icon" />
                  <div className="dropdown-text">
                    <span className="dropdown-title">Homes & Residential</span>
                  </div>
                </NavLink>

                <NavLink to="/projects/commercial-industrial-solar-system">
                  <FaBuilding className="dropdown-icon" />
                  <div className="dropdown-text">
                    <span className="dropdown-title">
                      Commercial & Industrial
                    </span>
                  </div>
                </NavLink>
              </div>
            </div>

            {/* <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/career"
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              Career
            </NavLink> */}

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              Contact Us
            </NavLink>
          </nav>

          <div className="navbar-actions">
            <div className="enquiry-btn">
              <NavLink to="/contact" className="enquiry-link">
                Enquiry Now <FaBolt />
              </NavLink>
            </div>

            <button className="mobile-toggle" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <NavLink to="/" className="mobile-logo" onClick={closeMobileMenu}>
            <img src={logo} alt="Freedom Contructions" />
          </NavLink>
          <button className="close-menu" onClick={closeMobileMenu}>
            <FaTimes />
          </button>
        </div>

        <nav className="mobile-nav">
          <NavLink to="/" className="mobile-nav-item" onClick={closeMobileMenu}>
            <FaHome /> Home
          </NavLink>

          <NavLink
            to="/about"
            className="mobile-nav-item"
            onClick={closeMobileMenu}
          >
            <FaInfoCircle /> About
          </NavLink>

          {/* ✅ SERVICES MOBILE DROPDOWN */}
          <div>
            <div
              className="mobile-nav-item"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              style={{ cursor: "pointer" }}
            >
              <FaInfoCircle /> Services{" "}
              <FaChevronDown style={{ marginLeft: "auto" }} />
            </div>

            {mobileServicesOpen && (
              <div className="mobile-dropdown-menu">
                <NavLink
                  to="/services/on-grid-solar-system"
                  onClick={closeMobileMenu}
                >
                  On Grid Solar
                </NavLink>
                <NavLink
                  to="/services/hybrid-solar-system"
                  onClick={closeMobileMenu}
                >
                  Hybrid Solar
                </NavLink>
                <NavLink to="/services/off-grid" onClick={closeMobileMenu}>
                  Off Grid Solar
                </NavLink>
                <NavLink to="/services/solar-amc" onClick={closeMobileMenu}>
                  Solar AMC
                </NavLink>
              </div>
            )}
          </div>

          {/* ✅ PROJECTS MOBILE DROPDOWN */}
          <div>
            <div
              className="mobile-nav-item"
              onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
              style={{ cursor: "pointer" }}
            >
              <FaBuilding /> Projects{" "}
              <FaChevronDown style={{ marginLeft: "auto" }} />
            </div>

            {mobileProjectsOpen && (
              <div className="mobile-dropdown-menu">
                <NavLink
                  to="/projects/residential-home-solar-system-installation"
                  onClick={closeMobileMenu}
                >
                  Residential
                </NavLink>
                <NavLink
                  to="/projects/commercial-industrial-solar-system"
                  onClick={closeMobileMenu}
                >
                  Commercial
                </NavLink>
              </div>
            )}
          </div>

          {/* <NavLink
            to="/blogs"
            className="mobile-nav-item"
            onClick={closeMobileMenu}
          >
            <FaNewspaper /> Blog
          </NavLink>
          <NavLink
            to="/career"
            className="mobile-nav-item"
            onClick={closeMobileMenu}
          >
            <FaNewspaper /> Career
          </NavLink> */}

          <NavLink
            to="/contact"
            className="mobile-nav-item"
            onClick={closeMobileMenu}
          >
            <FaContact /> Contact
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
