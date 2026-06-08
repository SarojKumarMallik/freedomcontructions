import React, { useState } from "react";
import "./Floatingcontact.css";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Floatingcontact = () => {
  const [open, setOpen] = useState(true);

  const whatsappNumber = "8280152685";
  const callNumber = "8280152685";

  const message =
    "Hello! I am interested in installing a solar system. Please guide me.";

  return (
    <div className="floating-container">

      <div className="floating-stack">
        
        {/* Arrow Toggle - TOP */}
        <div
          className="floating-toggle-btn"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoIosArrowForward /> : <IoIosArrowBack />}
        </div>

        {/* Contact Buttons */}
        <div className={`floating-contact-wrapper ${open ? "open" : "closed"}`}>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-btn whatsapp"
          >
            <FaWhatsapp />
          </a>

          {/* Call */}
          <a
            href={`tel:${callNumber}`}
            className="floating-btn call"
          >
            <FaPhoneAlt />
          </a>

        </div>

      </div>

    </div>
  );
};

export default Floatingcontact;