import React from "react";
import "./Aboutceo.css";
import ceo from "../../assets/img/ceo.jpeg";

const Aboutceo = () => {
  // YouTube video ID - CEO introduction video
  const videoId = "9bZkp7q19f0"; // Replace with your actual CEO video ID

  return (
    <section className="aboutceo-section">
      {/* Background decorative elements */}
      <div className="aboutceo-bg-elements">
        <div className="bg-glow-1"></div>
        <div className="bg-glow-2"></div>
        <div className="bg-grid"></div>
      </div>

      <div className="aboutceo-container">
        {/* LEFT SIDE - CEO Image with Premium Badge */}
        <div className="aboutceo-image">
          <div className="aboutceo-image-wrapper">
            <div className="aboutceo-badge">
              <span>Founder & CEO</span>
            </div>
            <img
              src={ceo}
              alt="Rudranarayan Panda - CEO"
              className="aboutceo-img"
            />
            <div className="aboutceo-image-overlay">
              <div className="aboutceo-quote">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 11h-4v-4h4v4zm8 0h-4v-4h4v4z" fill="#FFD700"/>
                  <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" stroke="#FFD700" fill="none"/>
                </svg>
                <p>"Empowering India with sustainable energy solutions since 2014"</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Company Info with Video */}
        <div className="aboutceo-content">
          <div className="aboutceo-company-header">
            <span className="company-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              ABOUT THE COMPANY
            </span>
            <h2 className="company-title">Welcome to <span className="highlight">Freedom Constructions</span></h2>
          </div>

          {/* Company Description */}
          <div className="company-description">
            <p className="description-text">
              A leading <strong>MNRE-approved vendor</strong> specializing in rooftop solar installations. 
              Owned by <strong>Mr. Rudranarayan Panda</strong>, our company is committed to providing 
              top-quality solar solutions, ensuring energy efficiency and sustainability for homes and businesses.
            </p>
            <p className="description-text">
              With a strong focus on customer satisfaction and innovation, we take pride in being 
              one of the best companies in the renewable energy sector, helping you harness the 
              power of the sun for a greener future.
            </p>
          </div>

          {/* Key Highlights */}
          <div className="company-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <span>MNRE Approved</span>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
              <span>Rooftop Specialists</span>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v4M12 22v-4M4 12H2M22 12h-2M19.07 4.93l-2.83 2.83M7.76 16.24l-2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <span>Eco-Friendly</span>
            </div>
          </div>

          {/* CEO Video Section */}
          <div className="aboutceo-video-section">
            <div className="video-header">
              <span className="video-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <polygon points="10,8 16,12 10,16" fill="currentColor" />
                </svg>
                MESSAGE FROM CEO
              </span>
              <h4>Hear from Our Founder</h4>
            </div>
            
            <div className="aboutceo-video-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1&showinfo=0`}
                title="CEO Rudranarayan Panda Message"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="aboutceo-iframe"
              ></iframe>
              <div className="video-overlay-glow"></div>
            </div>
            
            
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default Aboutceo;