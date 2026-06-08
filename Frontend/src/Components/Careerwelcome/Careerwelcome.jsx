import React, { useState } from "react";
import "./Careerwelcome.css";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaClock,
  FaChevronDown,
  FaChevronUp,
  FaCheckCircle
} from "react-icons/fa";

const Careerwelcome = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const jobs = [
    {
      title: "Senior Solar Design Engineer",
      location: "Bhubaneswar, Odisha",
      type: "Full Time",
      experience: "3 – 5 Years",
      description:
        "Lead the design and optimization of solar PV systems for commercial and industrial projects. Ensure technical compliance and cost efficiency.",
      responsibilities: [
        "Design solar PV layouts using AutoCAD & PVsyst",
        "Perform load calculations and system sizing",
        "Coordinate with project & installation teams",
        "Ensure MNRE and safety compliance"
      ],
      requirements: [
        "B.Tech / Diploma in Electrical Engineering",
        "3+ years experience in solar projects",
        "Strong knowledge of PV system standards"
      ]
    },
    {
      title: "Business Development Manager",
      location: "Cuttack, Odisha",
      type: "Full Time",
      experience: "4+ Years",
      description:
        "Drive business growth by identifying new opportunities in rooftop and commercial solar projects.",
      responsibilities: [
        "Generate leads and close solar projects",
        "Build long-term client relationships",
        "Prepare proposals and quotations",
        "Achieve monthly revenue targets"
      ],
      requirements: [
        "MBA / Marketing background preferred",
        "Experience in renewable energy sales",
        "Excellent communication skills"
      ]
    }
  ];

  return (
    <section className="Careerwelcome-section">
      <div className="Careerwelcome-container">

        <div className="Careerwelcome-header">
          <span className="Careerwelcome-label">CAREERS AT BSP</span>
          <h2 className="Careerwelcome-heading">
            Explore Our <span>Recent Openings</span>
          </h2>
          <p className="Careerwelcome-description">
            Join BSP Production Solutions and power the renewable future.
          </p>
        </div>

        <div className="Careerwelcome-joblist">
          {jobs.map((job, index) => (
            <div
              className={`Careerwelcome-jobcard ${
                activeIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <div
                className="Careerwelcome-jobheader"
                onClick={() => toggleCard(index)}
              >
                <div>
                  <h3>{job.title}</h3>
                  <div className="Careerwelcome-meta">
                    <span><FaMapMarkerAlt /> {job.location}</span>
                    <span><FaBriefcase /> {job.type}</span>
                    <span><FaClock /> {job.experience}</span>
                  </div>
                </div>
                <div className="Careerwelcome-toggle">
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>

              {activeIndex === index && (
                <div className="Careerwelcome-jobcontent">

                  <div className="Careerwelcome-sectionblock">
                    <h4>Job Description</h4>
                    <p>{job.description}</p>
                  </div>

                  <div className="Careerwelcome-sectionblock">
                    <h4>Responsibilities</h4>
                    <ul>
                      {job.responsibilities.map((item, i) => (
                        <li key={i}><FaCheckCircle /> {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="Careerwelcome-sectionblock">
                    <h4>Requirements</h4>
                    <ul>
                      {job.requirements.map((item, i) => (
                        <li key={i}><FaCheckCircle /> {item}</li>
                      ))}
                    </ul>
                  </div>

                  <button className="Careerwelcome-applybtn">
                    Apply Now
                  </button>

                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Careerwelcome;