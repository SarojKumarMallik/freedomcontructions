import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./Ongridfaq.css";

const Ongridfaq = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
  {
    question: "Which solar company is best for on-grid solar installation?",
    answer:
      "Freedom Contructions is a trusted solar company offering MNRE-approved on-grid solar system installation across India. We provide high-quality solar panels, professional installation, net metering support, and transparent pricing for residential and commercial projects."
  },
  {
    question:
      "How can I connect with Freedom Contructions for on-grid solar installation?",
    answer:
      "You can click on the 'Get Quote' button and submit your details. Our solar energy advisor will contact you to understand your electricity consumption, suggest the right system capacity, and guide you through the complete on-grid solar installation process."
  },
  {
    question:
      "What types of solar panels are available for on-grid solar installation?",
    answer:
      "Freedom Contructions offers high-efficiency Mono PERC, Bifacial, and Tier-1 solar panels with long-term performance warranties. Our experts recommend the best panel type based on your rooftop space, budget, and energy requirements."
  },
  {
    question:
      "Are there government subsidies available for installing an on-grid solar system in India?",
    answer:
      "Yes, the Government of India provides financial assistance under the PM Surya Ghar Yojana scheme for eligible residential consumers. Freedom Contructions assists customers with subsidy documentation and net metering approval."
  },
  {
    question: "Can I use an on-grid solar system during power outages?",
    answer:
      "Standard on-grid solar systems automatically shut down during power cuts for safety reasons. However, you can integrate a hybrid system or battery backup if you require power during outages."
  },
  {
    question: "How long does a grid-connected solar system last?",
    answer:
      "An on-grid solar system typically lasts 25–30 years. Solar panels come with long-term performance warranties, and the system requires minimal maintenance for reliable energy generation."
  },
  {
    question: "Do on-grid solar systems require batteries?",
    answer:
      "No, standard on-grid solar systems do not require batteries. They are directly connected to the electricity grid and operate using net metering, which makes them more cost-effective and low-maintenance."
  },
  {
    question:
      "How much electricity can an on-grid solar system generate daily?",
    answer:
      "Electricity generation depends on system capacity and sunlight availability. For example, a 3kW on-grid solar system can generate approximately 12–15 units of electricity per day under normal Indian weather conditions."
  },
  {
    question: "How much does an on-grid solar system cost in India?",
    answer:
      "The cost of an on-grid solar system depends on system size (kW), panel type, inverter quality, and installation requirements. Contact Freedom Contructions for a customized quotation and accurate price estimate."
  }
];

  return (
    <section className="Ongridfaq-section">
      <div className="Ongridfaq-container">
        
        <div className="Ongridfaq-header">
          <span className="Ongridfaq-badge">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="Ongridfaq-heading">
            On-Grid Solar <span>FAQ</span>
          </h2>
        </div>

        <div className="Ongridfaq-wrapper">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`Ongridfaq-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div
                className="Ongridfaq-question"
                onClick={() => toggleFAQ(index)}
              >
                <h3>{item.question}</h3>
                <span className="Ongridfaq-icon">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </div>

              <div className="Ongridfaq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Ongridfaq;