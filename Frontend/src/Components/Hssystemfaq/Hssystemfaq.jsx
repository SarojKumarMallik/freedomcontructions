import React, { useState, useRef } from "react";
import "./Hssystemfaq.css";
import { FaPlus } from "react-icons/fa";

const Hssystemfaq = () => {
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
      question: "Are hybrid solar systems worth it?",
      answer:
        "Hybrid solar is worth it if you want to save money by feeding excess energy into the grid and storing energy for power cuts. It allows you to maximize the use of solar energy."
    },
    {
      question: "How long does a hybrid solar system last?",
      answer:
        "Solar panels last 25–30 years. Solar batteries last approximately 5–10 years. Solar inverters typically last 10–12 years depending on usage and maintenance."
    },
    {
      question: "Which is better hybrid or on-grid solar system?",
      answer:
        "Both systems reduce electricity bills. However, on-grid systems do not work during power cuts, while hybrid systems provide backup power using stored energy. It depends on your requirements."
    },
    {
      question: "What is the cost of a hybrid solar system?",
      answer:
        "Exact pricing depends on site conditions. Contact us for a site visit and price finalization. Without inspection, it is not possible to provide the exact installation cost."
    }
  ];

  return (
    <section className="bsp-faq-section">
      <div className="bsp-faq-container">

        {/* HEADER */}
        <div className="bsp-faq-header">
          
          <h2>
            Frequently Asked <span>Questions</span>
          </h2>
          <p>
            Everything you need to know about hybrid solar systems.
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

export default Hssystemfaq;