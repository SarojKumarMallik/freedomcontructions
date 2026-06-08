import React, { useState, useRef } from "react";
import "./Residentialfaq.css";
import { FaPlus } from "react-icons/fa";

const Residentialfaq = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How much does it cost to set up a solar power plant for home?",
      answer:
        "The cost of a solar installation in home mainly depends on the system capacity and the different types of solar panel. For instance, you have to pay around Rs.90,000 – Rs.1,30,000 for a 1 kW home solar system. For a 2 kW home solar system, you have to pay Rs.1,40,000 – Rs.1,80,000. For a 3 kW system, your total cost will be around Rs.1,90,000 – Rs.2,30,000. The actual price will depend on the type of solar panel, components, location, etc."
    },
    {
      question: "What is the cost of a 3kW home solar system?",
      answer:
        "The cost of a 3 kW system will be around Rs.1,90,000 – Rs.2,30,000. To know the actual price, you must contact a solar plant installer for home solar solutions."
    },
    {
      question: "Which solar system is best for a home?",
      answer:
        "The best solar system for your home will depend on your particular demand. If you want to save your electricity bill, choose an on-grid home solar system. If you want power backup during shutdown, go with an off-grid system. A hybrid solar system is ideal for both savings and backup."
    },
    {
      question: "How many years does household solar panels last?",
      answer:
        "In general, household solar panels last up to 25 years from installation. However, regular maintenance is required to maintain optimal efficiency."
    }
  ];

  return (
    <section className="bsp-faq-section">
      <div className="bsp-faq-container">

        {/* HEADER */}
        <div className="bsp-faq-header">
          <h2>
            FAQs About <span>Individual Homes Solar Panel System</span>
          </h2>
          <p>
            Everything you need to know about residential solar systems.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="bsp-faq-wrapper">
          {faqs.map((item, index) => {
            const isOpen = openIndexes.includes(index);
            const contentRef = useRef(null);

            return (
              <div
                key={index}
                className={`bsp-faq-item ${isOpen ? "active" : ""}`}
              >
                <div
                  className="bsp-faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3>{item.question}</h3>
                  <span className={`bsp-faq-icon ${isOpen ? "rotate" : ""}`}>
                    <FaPlus />
                  </span>
                </div>

                <div
                  ref={contentRef}
                  className="bsp-faq-answer"
                  style={{
                    maxHeight: isOpen
                      ? contentRef.current?.scrollHeight + "px"
                      : "0px"
                  }}
                >
                  <div className="bsp-faq-answer-inner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Residentialfaq;