import React from "react";
import "./Ourteam.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ceo from "../../assets/img/ceo.jpeg";
import maleavtar from "../../assets/img/male-avtar.png";

const teamMembers = [
  {
    name: "Rudranarayan Panda",
    role: "CEO & Founder",
    img: ceo,
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Jagabandhu Das",
  role: "Solar Engineer",
    img: maleavtar,
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Ratikant Pradhan",
  role: "Technical Executive",
    img: maleavtar,
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Saroj Kumar Mallik",
    role: "Energy Consultant",
    img: maleavtar,
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];

const Ourteam = () => {
  return (
    <section className="ourteam">
      <div className="ourteam_container">

        {/* HEADING */}
        <div className="ourteam_heading">
          <span>OUR TEAM</span>
          <h2>Meet Our Experts</h2>
          <p>
Dedicated professionals driving innovation, quality, and excellence in every project we undertake.          </p>
        </div>

        {/* GRID */}
        <div className="ourteam_grid">
          {teamMembers.map((member, index) => (
            <div className="team_item" key={index}>
              <img src={member.img} alt={member.name} />

              <div className="team_info">
                <h4>{member.name}</h4>
                <div className="team_role">{member.role}</div>

                <div className="team_socials">
                  <a href={member.socials.instagram} aria-label="Instagram">
                    <FaInstagram />
                  </a>
                  <a href={member.socials.facebook} aria-label="Facebook">
                    <FaFacebookF />
                  </a>
                  <a href={member.socials.twitter} aria-label="X">
                    <FaXTwitter />
                  </a>
                  <a href={member.socials.linkedin} aria-label="LinkedIn">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Ourteam;
