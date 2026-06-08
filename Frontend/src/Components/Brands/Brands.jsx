import React, { useEffect, useState } from "react";
import "./Brands.css";

import luminous from "../../assets/img/luminous.png";
import waree from "../../assets/img/waree.png";
import tata from "../../assets/img/tata.png";
import havells from "../../assets/img/havells.png";

import adani from "../../assets/img/adani.png";
import eastman from "../../assets/img/eastman.png";
import sunbound from "../../assets/img/sunbound.png";

const brands = [

  { name: "Eastman Solar", logo: eastman },
  { name: "Sunbond Energy", logo: sunbound },
  { name: "Luminous", logo: luminous },
  { name: "Tata Power Solar", logo: tata },
  { name: "Waaree", logo: waree },
  { name: "Havells", logo: havells },
  { name: "Adani Solar", logo: adani },
  
];

const getVisibleCount = () => {
  if (window.innerWidth > 992) return 5;   // Desktop
  if (window.innerWidth > 600) return 3;   // Tablet
  return 2;                                // Mobile (✅ 2 logos)
};

const Brands = () => {
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const [index, setIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);

  // clone for seamless looping
  const sliderData = [...brands, ...brands.slice(0, visibleCount)];

  useEffect(() => {
    const onResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === brands.length) {
      setTimeout(() => {
        setEnableTransition(false);
        setIndex(0);
      }, 700);
    } else {
      setEnableTransition(true);
    }
  }, [index]);

  return (
    <section className="brands-section">
      <div className="brands-container">
        <h2 className="brands-title">
          Trusted Solar Brands We Work With
        </h2>

        <div className="brands-slider">
          <div
            className="brands-track"
            style={{
              transform: `translateX(-${index * (100 / visibleCount)}%)`,
              transition: enableTransition
                ? "transform 0.7s ease-in-out"
                : "none"
            }}
          >
            {sliderData.map((brand, i) => (
              <div className="brand-card" key={i}>
                <img src={brand.logo} alt={brand.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
