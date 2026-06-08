import React from "react";
import "./Additionalsupport.css";
import {
  FiCheckCircle,
  FiClipboard,
  FiUserCheck,
  FiShuffle,
  FiActivity,
} from "react-icons/fi";

const services = [
  { title: "Free Site Survey", icon: <FiCheckCircle /> },
  { title: "System Design", icon: <FiClipboard /> },
  { title: "Portal Registration", icon: <FiUserCheck /> },
  { title: "Grid Coordination", icon: <FiShuffle /> },
  { title: "Performance Monitoring", icon: <FiActivity /> },
];

const Additionalsupport = () => {
  return (
    <section className="addsupport">
      <div className="addsupport_container">

        {/* TITLE */}
        <h3 className="addsupport_title">Additional Support Services</h3>

        {/* SERVICES */}
        <div className="addsupport_list">
          {services.map((item, index) => (
            <div className="addsupport_item" key={index}>
              <span className="addsupport_icon">{item.icon}</span>
              <span className="addsupport_text">{item.title}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Additionalsupport;
