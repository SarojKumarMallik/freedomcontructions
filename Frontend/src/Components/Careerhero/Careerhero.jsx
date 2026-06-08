import React, { useState, useRef } from "react";
import {
  FaShieldAlt,
  FaRocket,
  FaUsers,
  FaPlus
} from "react-icons/fa";
import "./Careerhero.css";

const Careerhero = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const faqs = [
    {
      question: "How does BSP support learning and growth?",
      answer:
        "We promote continuous learning through live renewable projects, mentorship programs, and professional development opportunities."
    },
    {
      question: "What makes BSP's work culture unique?",
      answer:
        "Our culture is built on trust, collaboration, innovation, and long-term vision in the renewable energy sector."
    },
    {
      question: "What impact can I create at BSP?",
      answer:
        "You contribute directly to India's sustainable energy future while building meaningful professional growth."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="careerhero-section">
      <div className="careerhero-container">

        {/* LEFT */}
        <div className="careerhero-left">

          <span className="careerhero-badge">
            Empowering Careers in Renewable Energy
          </span>

          <h1>
            Build Your Career at <br />
            <span>Freedom Contructions Pvt Ltd</span>
          </h1>

          <p className="careerhero-description">
            We combine trust, innovation, and sustainability to create
            meaningful careers. Join a company shaping the future of solar energy.
          </p>

          <div className="careerhero-values">

            <div className="careerhero-value">
              <div className="careerhero-icon">
                <FaShieldAlt />
              </div>
              <div>
                <h4>Trust & Integrity</h4>
                <p>Transparent relationships and long-term partnerships.</p>
              </div>
            </div>

            <div className="careerhero-value">
              <div className="careerhero-icon">
                <FaRocket />
              </div>
              <div>
                <h4>Innovation Driven</h4>
                <p>Future-ready solar solutions powered by technology.</p>
              </div>
            </div>

            <div className="careerhero-value">
              <div className="careerhero-icon">
                <FaUsers />
              </div>
              <div>
                <h4>People First</h4>
                <p>Empowering individuals to grow and create impact.</p>
              </div>
            </div>

          </div>

          
        </div>

        {/* RIGHT */}
        <div className="careerhero-right">

          <div className="careerhero-card">

            <h2>Your Future with BSP</h2>

            <p>
              Join a professional team driving India's renewable transformation.
              We create an environment where ideas flourish and careers grow.
            </p>

            <div className="careerhero-faq">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`careerhero-faq-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  <button
                    className="careerhero-faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                    <span className="faq-icon">
                      <FaPlus />
                    </span>
                  </button>

                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    className="careerhero-faq-answer"
                    style={{
                      maxHeight:
                        activeIndex === index
                          ? `${contentRefs.current[index]?.scrollHeight}px`
                          : "0px"
                    }}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Careerhero;