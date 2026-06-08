import React, { useEffect, useState } from "react";
import "./Aboutcontent.css";

const imageList = [
  "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80",
];

const accordionData = [
  {
    title: "History",
    content:
      "Our journey began with a commitment to clean energy innovation, evolving from small solar installations into large-scale renewable energy projects across multiple sectors.",
  },
  {
    title: "Mission",
    content:
      "To deliver reliable, affordable, and sustainable solar solutions that empower communities while reducing environmental impact.",
  },
  {
    title: "Vision",
    content:
      "A future powered by renewable energy where sustainability, innovation, and growth coexist for generations to come.",
  },
];

const Aboutcontent = () => {
  const [frontIndex, setFrontIndex] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(0); // ✅ first open by default

  /* Rotate images every 6s */
  useEffect(() => {
    const interval = setInterval(() => {
      setFrontIndex((prev) => (prev + 1) % imageList.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const getImageClass = (index) => {
    const diff = (index - frontIndex + imageList.length) % imageList.length;

    if (diff === 0) return "front";
    if (diff === 1) return "middle";
    return "back";
  };

  const toggleAccordion = (index) => {
    setActiveAccordion((prev) => (prev === index ? null : index));
  };

  return (
    <section className="Aboutcontent_section">
      <div className="Aboutcontent_container">
        {/* LEFT IMAGE STACK */}
        <div className="Aboutcontent_imageStack">
          {imageList.map((img, index) => (
            <div
              key={index}
              className={`Aboutcontent_image ${getImageClass(index)}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className="Aboutcontent_right">
          <span className="Aboutcontent_label">ABOUT US</span>
          <h2 className="Aboutcontent_heading">Bright Tomorrow</h2>
          <p className="Aboutcontent_text">
            Discover how our innovative solar solutions can transform your
            energy usage, reduce costs, and promote environmental sustainability.
          </p>

          <div className="Aboutcontent_accordion">
            {accordionData.map((item, index) => (
              <div
                key={index}
                className={`Aboutcontent_item ${
                  activeAccordion === index ? "active" : ""
                }`}
              >
                <button
                  className="Aboutcontent_header"
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                  <span className="Aboutcontent_plus">
                    {activeAccordion === index ? "−" : "+"}
                  </span>
                </button>

                <div className="Aboutcontent_body">
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutcontent;
