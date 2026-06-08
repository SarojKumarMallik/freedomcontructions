import React, { useState, useRef } from "react";
import "./Commercialfaq.css";
import { FaPlus } from "react-icons/fa";

const Commercialfaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Can I reduce my electricity bill with a commercial solar system?",
      answer:
        "Yes. With on-grid commercial solar solutions, you can significantly reduce your electricity bills. Additionally, you can save on your bills even if there is a tariff hike in your region."
    },
    {
      question: "Is there any loan facility available for commercial solar system installation?",
      answer:
        "Various banks and financial institutions offer low-interest loans for commercial solar systems. To know more about it, you can contact us and our energy advisor will guide you further."
    },
    {
      question: "What is the payback period of a commercial solar plant?",
      answer:
        "Generally, the payback period of a commercial solar power plant is around 3–4 years. After this time, you can get guaranteed returns from your solar plant for up to the next 21–26 years in terms of free electricity."
    },
    {
      question: "How much rooftop area is required for commercial rooftop installation?",
      answer:
        "The required rooftop area depends on your solar capacity. Generally, 100 square feet of shadow-free area is required for every 1kW of solar panel installation. For exact details, we arrange a site visit with our installation partners."
    },
    {
      question: "Is a commercial solar system expensive?",
      answer:
        "Commercial solar system installation is gradually becoming more affordable as the price of solar panels is decreasing and more commercial solar installers are entering the market."
    }
  ];

  return (
    <section className="Commercialfaq-wrapper">
      <div className="Commercialfaq-container">

        <div className="Commercialfaq-header">
          
          <h2>
            Questions Answered on <span>Commercial Solar System</span>
          </h2>
        </div>

        <div className="Commercialfaq-accordion">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className={`Commercialfaq-item ${isActive ? "active" : ""}`}
              >
                <div
                  className="Commercialfaq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <h4>{faq.question}</h4>
                  <span
                    className={`Commercialfaq-icon ${
                      isActive ? "rotate" : ""
                    }`}
                  >
                    <FaPlus />
                  </span>
                </div>

                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="Commercialfaq-answer"
                  style={{
                    height: isActive
                      ? contentRefs.current[index]?.scrollHeight + "px"
                      : "0px"
                  }}
                >
                  <div className="Commercialfaq-answer-inner">
                    <p>{faq.answer}</p>
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

export default Commercialfaq;