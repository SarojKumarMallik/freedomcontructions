import React, { useState, useEffect } from 'react';
import "./Heropopup.css";

// Import your image - choose the correct path for your project
import pmsuryaghar from '../../assets/img/pmsuryaghar.webp';
// Alternative paths if needed:
// import pmsuryaghar from '/src/assets/img/pmsuryaghar.webp';
// import pmsuryaghar from './assets/img/pmsuryaghar.webp';

// For testing with a placeholder image (uncomment if your image is not loading)
// const pmsuryaghar = "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=600&fit=crop";

const Heropopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 297,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Show popup when component mounts
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 500);

    // Set end date (297 days from today)
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 297);
    endDate.setHours(23, 59, 59, 999);

    // Countdown timer
    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance < 0) {
        clearInterval(countdownInterval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdownInterval);
    };
  }, []);

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  const handleApplyNow = () => {
    console.log('Apply now clicked');
    window.location.href = '/contact';
  };

  const handleImageError = () => {
    console.error('Image failed to load:', pmsuryaghar);
    setImageError(true);
  };

  if (!isPopupOpen) return null;

  return (
    <>
      <div className="popup-overlay" onClick={handleOverlayClick}>
        <div className="popup-container">
          <button className="popup-close" onClick={closePopup}>
            &times;
          </button>
          
          <div className="popup-content">
            {/* LEFT SIDE - IMAGE ONLY */}
            <div className="popup-image-section">
              {!imageError ? (
                <img
                  src={pmsuryaghar}
                  alt="PM Surya Ghar Solar Subsidy"
                  className="popup-image"
                  onError={handleImageError}
                  loading="eager"
                />
              ) : (
                <div className="fallback-image">
                  <svg width="100%" height="100%" viewBox="0 0 400 500" preserveAspectRatio="none">
                    <rect width="400" height="500" fill="linear-gradient(135deg, #FFD700, #FFA500)"/>
                    <text x="200" y="250" textAnchor="middle" fill="#fff" fontSize="24" fontWeight="bold">Solar Energy</text>
                    <text x="200" y="280" textAnchor="middle" fill="#fff" fontSize="16">Subsidy Offer</text>
                  </svg>
                </div>
              )}
            </div>

            {/* RIGHT SIDE - CONTENT ONLY (Reduced) */}
            <div className="popup-form-section">
              <div className="urgent-badge">
                ⚡ URGENT OPPORTUNITY
              </div>

              <h2 className="popup-title">
                Avail Your Solar Subsidy
                <span className="highlight"> Before It Ends!</span>
              </h2>

              <p className="popup-description">
                Save up to 40% on your solar installation with government subsidy.
              </p>

              {/* Countdown Timer */}
              <div className="countdown-timer">
                <div className="timer-block">
                  <div className="timer-number">{String(timeLeft.days).padStart(2, '0')}</div>
                  <div className="timer-label">Days</div>
                </div>
                <div className="timer-block">
                  <div className="timer-number">{String(timeLeft.hours).padStart(2, '0')}</div>
                  <div className="timer-label">Hours</div>
                </div>
                <div className="timer-block">
                  <div className="timer-number">{String(timeLeft.minutes).padStart(2, '0')}</div>
                  <div className="timer-label">Mins</div>
                </div>
                <div className="timer-block">
                  <div className="timer-number">{String(timeLeft.seconds).padStart(2, '0')}</div>
                  <div className="timer-label">Secs</div>
                </div>
              </div>

              {/* Reduced Benefits - Only 3 items */}
              <div className="benefits-list">
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span>Up to 40% Government Subsidy</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span>Free Installation & Maintenance</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span>25 Years Panel Warranty</span>
                </div>
              </div>

              {/* CTA Button */}
              <button onClick={handleApplyNow} className="apply-now-btn">
                Apply for Subsidy Now →
              </button>

              <p className="popup-footer">
                Limited slots available. Offer valid until subsidy ends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heropopup;