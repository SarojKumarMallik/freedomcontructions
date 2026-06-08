import React, { useEffect, useRef } from "react";
import "./Homeimageslider.css";

// images
import imageslider1 from "../../assets/img/1.webp";
import imageslider2 from "../../assets/img/2.webp";
import imageslider3 from "../../assets/img/3.webp";
import imageslider4 from "../../assets/img/4.webp";
import imageslider5 from "../../assets/img/5.webp";
import imageslider6 from "../../assets/img/6.webp";
import imageslider7 from "../../assets/img/7.webp";
import imageslider8 from "../../assets/img/8.webp";
import imageslider9 from "../../assets/img/9.webp";

const images = [
  imageslider1,
  imageslider2,
  imageslider3,
  imageslider4,
  imageslider5,
  imageslider6,
  imageslider7,
  imageslider8,
  imageslider9,
];

const Homeimageslider = () => {
  const sliderRef = useRef(null);
  const indexRef = useRef(1);
  const intervalRef = useRef(null);

  /* ================= POSITION SETTER ================= */
  const setSliderPosition = () => {
    const slider = sliderRef.current;
    if (!slider || !slider.children.length) return;

    const slideWidth = slider.children[0].getBoundingClientRect().width;
    slider.style.transition = "none";
    slider.style.transform = `translateX(-${slideWidth}px)`;
  };

  /* ================= AUTO SLIDE ================= */
  const startAutoSlide = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const slideWidth = slider.children[0].getBoundingClientRect().width;

      indexRef.current++;
      slider.style.transition = "transform 0.8s ease-in-out";
      slider.style.transform = `translateX(-${
        indexRef.current * slideWidth
      }px)`;
    }, 3000);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const imgs = slider.querySelectorAll("img");
    let loadedCount = 0;

    /* ================= IMAGE LOAD HANDLER ================= */
    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === imgs.length) {
        setSliderPosition();
        startAutoSlide();
      }
    };

    imgs.forEach((img) => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener("load", handleImageLoad);
      }
    });

    /* ================= LOOP FIX ================= */
    const handleTransitionEnd = () => {
      const slideWidth = slider.children[0].getBoundingClientRect().width;

      if (indexRef.current === images.length + 1) {
        slider.style.transition = "none";
        indexRef.current = 1;
        slider.style.transform = `translateX(-${slideWidth}px)`;
      }
    };

    slider.addEventListener("transitionend", handleTransitionEnd);
    window.addEventListener("resize", setSliderPosition);

    return () => {
      clearInterval(intervalRef.current);
      slider.removeEventListener("transitionend", handleTransitionEnd);
      window.removeEventListener("resize", setSliderPosition);
      imgs.forEach((img) =>
        img.removeEventListener("load", handleImageLoad)
      );
    };
  }, []);

  return (
    <section className="Homeimageslider_section">
      <div className="Homeimageslider_wrapper">
        <div className="Homeimageslider_track" ref={sliderRef}>
          {/* clone last */}
          <div className="Homeimageslider_slide">
            <img src={images[images.length - 1]} alt="clone-last" />
          </div>

          {/* real slides */}
          {images.map((img, i) => (
            <div className="Homeimageslider_slide" key={i}>
              <img src={img} alt={`slide-${i}`} />
            </div>
          ))}

          {/* clone first */}
          <div className="Homeimageslider_slide">
            <img src={images[0]} alt="clone-first" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homeimageslider;
