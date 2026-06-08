import React, { useState, useRef } from "react";
import "./Solaramcfaq.css";
import { FaPlus } from "react-icons/fa";

const Solaramcfaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How often the maintenance of solar power plants is required?",
      answer:
        "Generally, solar plants require minimal maintenance and for that reason, it is the best source of renewable energy. However, cleaning the solar panels at least thrice per year is recommended. If the solar panels are dirty, their efficiency may go down by up to 30%."
    },
    {
      question: "Can homeowners clean their solar panels themselves?",
      answer:
        "Yes, you can clear the solar panels of your home on your own by using a brush, water and mild soap. It would be better if you could book solar maintenance services from a solar company like ours. We have trained and experienced professionals who follow all the manufacturer’s precautions/guidelines while performing the solar panel maintenance service."
    },
    {
      question: "What are the solar maintenance options?",
      answer:
        "There are two options for any annual maintenance contract for a solar power plant. 1. Contact the original solar installer for cleaning & repairs. This option is best for residential solar power plants. 2. Hire a solar O&M (operations & maintenance) company. Hiring a solar O&M company is beneficial for commercial & industrial solar plants."
    },
    {
      question: "What are Solar Operations and Maintenance Companies?",
      answer:
        "Solar operations and maintenance (O&M) companies offer servicing solar systems. These companies mainly handle large projects but are not very essential for most households or small solar systems."
    },
    {
      question: "Why is Continuous Solar Maintenance and Operation Important?",
      answer:
        "Solar panel maintenance services are important even though everyone says it is hassle-free after installation. The maintenance cost is low but extremely important to prevent any major or minor issues during 25–30 years of lifespan. Freedom Contructions helps you get annual maintenance contracts for solar power plants by connecting you with experienced O&M or solar AMC companies."
    }
  ];

  return (
    <section className="Solaramcfaq-section">
      <div className="Solaramcfaq-container">

        <div className="Solaramcfaq-header">
          <h2>
            FAQs on <span>Solar Annual Maintenance Contract (AMC)</span>
          </h2>
        </div>

        <div className="Solaramcfaq-wrapper">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`Solaramcfaq-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <button
                className="Solaramcfaq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <FaPlus
                  className={`Solaramcfaq-icon ${
                    activeIndex === index ? "rotate" : ""
                  }`}
                />
              </button>

              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className="Solaramcfaq-answer"
                style={{
                  maxHeight:
                    activeIndex === index
                      ? contentRefs.current[index]?.scrollHeight + "px"
                      : "0px"
                }}
              >
                <div className="Solaramcfaq-answer-inner">
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

export default Solaramcfaq;