import React, { useState, useRef } from "react";
import { FaPlus } from "react-icons/fa";
import "./Offgridsystemfaq.css";

const Offgridsystemfaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const faqs = [
    {
      question: "Can off grid solar system work without batteries?",
      answer:
        "No, off-grid solar systems cannot run without batteries as there will be no other way to store electricity for times when the sun is not available."
    },
    {
      question: "How off grid solar system works at night?",
      answer:
        "Off-grid solar systems include battery storage that stores solar energy during the day and supplies power at night when sunlight is not available."
    },
    {
      question:
        "How to choose the best equipment for an off-grid solar system?",
      answer:
        "Always choose high-quality solar panels, inverters, and batteries from trusted providers. Proper system sizing and professional installation ensure long-term performance."
    },
    {
      question:
        "What is the right spot for off-grid solar panel installation?",
      answer:
        "The installation area should be shadow-free between 9 AM and 5 PM. A professional site inspection ensures maximum sunlight exposure and optimal efficiency."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="Offgridsystemfaq-section">
      <div className="Offgridsystemfaq-container">

        <div className="Offgridsystemfaq-header">
          <h2>
            Frequently Asked <span>Questions</span>
          </h2>
          <p>
            Everything you need to know about Off-Grid Solar Installation with Freedom Contructions.
          </p>
        </div>

        <div className="Offgridsystemfaq-wrapper">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`Offgridsystemfaq-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <button
                className="Offgridsystemfaq-question"
                onClick={() => toggleFAQ(index)}
              >
                <h4>{faq.question}</h4>
                <span className="Offgridsystemfaq-icon">
                  <FaPlus />
                </span>
              </button>

              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className="Offgridsystemfaq-answer"
                style={{
                  maxHeight:
                    activeIndex === index
                      ? contentRefs.current[index]?.scrollHeight + "px"
                      : "0px"
                }}
              >
                <div className="Offgridsystemfaq-answer-inner">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Offgridsystemfaq;