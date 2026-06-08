import React, { useState, useEffect, useRef } from "react";
import "./Testimonial.css";
import male from "../../assets/img/male.png";
import female from "../../assets/img/female.png";
const testimonials = [
  {
    text: `ଆମ ଘର ଛାତ ଉପରେ Freedom Construction Solar Panel ଲଗାଇଥିଲେ। ଏବେ ଦିନକୁ ଭଲ କରେ ବିଦ୍ୟୁତ ତିଆରି ହେଉଛି ଆଉ ବିଲ୍ ବହୁତ କମ୍ ଆସୁଛି। କାମଟା ସଫା ସୁଥା ଏବଂ ସମୟରେ ସରିଦେଲେ।`,
    name: "ରଞ୍ଜନ କୁମାର ସାହୁ",
    role: "ଭଦ୍ରକ",
    avatar: male,
    rating: 5,
    experienceMonths: 8,
  },
  {
    text: `ପ୍ରଥମେ Solar ଲଗାଇବାକୁ ଭାବି ଟିକେ ଡର ଲାଗୁଥିଲା। କିନ୍ତୁ Freedom Construction ସବୁ କଥା ବୁଝାଇଦେଲେ। ଏବେ ପ୍ରତି ମାସରେ ବିଦ୍ୟୁତ ବିଲ୍ ଦେଖି ବହୁତ ଖୁସି ଲାଗୁଛି।`,
    name: "ସୁଶାନ୍ତ ମଲ୍ଲିକ",
    role: "ବାଲେଶ୍ୱର",
    avatar: male,
    rating: 4,
    experienceMonths: 14,
  },
  {
    text: `PM Surya Ghar Yojana ରେ Solar ଲଗାଇଲୁ। Freedom Construction ସବୁ କାଗଜପତ୍ର ଓ Installation କାମ ଭଲ ଭାବରେ କରିଦେଲେ। ଏବେ ଘରର ଅଧିକାଂଶ ବିଦ୍ୟୁତ Solar ରୁ ହେଉଛି।`,
    name: "ଅଜୟ ଜେନା",

    role: "କେନ୍ଦୁଝର",
    avatar: male,
    rating: 4,
    experienceMonths: 10,
  },
  {
    text: `ଆମ ଅଞ୍ଚଳରେ ଅନେକ ଲୋକ Solar ଲଗାଇଛନ୍ତି, ସେମାନଙ୍କ କଥା ଶୁଣି Freedom Construction ସହ ଯୋଗାଯୋଗ କଲୁ। କାମର ଗୁଣବତ୍ତା ଓ ସେବା ଦେଖି ଆମେ ସମ୍ପୂର୍ଣ୍ଣ ସନ୍ତୁଷ୍ଟ।`,
    name: "ଦେବାଶିଷ ଦାସ",
    role: "ଯାଜପୁର",
    avatar: male,
    rating: 4,
    experienceMonths: 18,
  },
  {
    text: `Solar Panel ଲଗାଇବା ପରେ ଘରର ବିଦ୍ୟୁତ ଖର୍ଚ୍ଚ ବହୁତ କମିଯାଇଛି। Freedom Construction ର ଟିମ୍ ଭଲ ବ୍ୟବହାର କରନ୍ତି ଏବଂ କାମଟା ଖୁବ ସୁନ୍ଦର ଭାବରେ କରିଛନ୍ତି।`,
    name: "ବିଜୟ ନାୟକ",
    role: "ମୟୂରଭଞ୍ଜ",
    avatar: male,
    rating: 5,
    experienceMonths: 18,
  },
];

// Customer Video Testimonials - Real customer video stories
const customerVideos = [
  {
    id: "d_7ROk9PNFg",
    title: "Jennifer's Solar Journey",
    customerName: "Jennifer Dust",
    location: "California, USA",
    quote: "Our energy bills dropped by 75%!",
    thumbnail: "https://img.youtube.com/vi/d_7ROk9PNFg/maxresdefault.jpg",
  },
  {
    id: "Rwce5t8O7vE",
    title: "The Clark Family Story",
    customerName: "James & Family",
    location: "Texas, USA",
    quote: "Best investment for our future",
    thumbnail: "https://img.youtube.com/vi/Rwce5t8O7vE/maxresdefault.jpg",
  },
  {
    id: "xKxrkht7CpY",
    title: "Sophia's Sustainability",
    customerName: "Sophia Turner",
    location: "Florida, USA",
    quote: "Clean energy, happy life",
    thumbnail: "https://img.youtube.com/vi/xKxrkht7CpY/maxresdefault.jpg",
  },
  {
    id: "lK7p2e_3UzE",
    title: "Michael's Installation",
    customerName: "Michael Rodriguez",
    location: "New York, USA",
    quote: "Seamless & professional",
    thumbnail: "https://img.youtube.com/vi/lK7p2e_3UzE/maxresdefault.jpg",
  },
];

const Testimonial = () => {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Video carousel state
  const [activeVideo, setActiveVideo] = useState(0);
  const [isVideoTransitioning, setIsVideoTransitioning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoIntervalRef = useRef(null);

  // Helper function to format experience text
  const getExperienceText = (months) => {
    if (months >= 12) {
      const years = Math.floor(months / 12);
      const remainingMonths = months % 12;
      if (remainingMonths === 0) {
        return `${years} ${years === 1 ? 'Year' : 'Years'} Experience`;
      }
      return `${years} Year${years > 1 ? 's' : ''} ${remainingMonths} Month${remainingMonths > 1 ? 's' : ''} Experience`;
    }
    return `${months} ${months === 1 ? 'Month' : 'Months'} Experience`;
  };

  // Testimonial navigation
  const navigate = (direction) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    if (direction === 'next') {
      setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    } else {
      setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }
    
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === active) return;
    setIsTransitioning(true);
    setActive(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Video navigation
  const nextVideo = () => {
    if (isVideoTransitioning) return;
    setIsVideoTransitioning(true);
    setActiveVideo((prev) => (prev === customerVideos.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsVideoTransitioning(false), 400);
  };

  const prevVideo = () => {
    if (isVideoTransitioning) return;
    setIsVideoTransitioning(true);
    setActiveVideo((prev) => (prev === 0 ? customerVideos.length - 1 : prev - 1));
    setTimeout(() => setIsVideoTransitioning(false), 400);
  };

  const goToVideo = (index) => {
    if (isVideoTransitioning || index === activeVideo) return;
    setIsVideoTransitioning(true);
    setActiveVideo(index);
    setTimeout(() => setIsVideoTransitioning(false), 400);
  };

  // Auto rotate testimonials every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        navigate('next');
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [active, isTransitioning]);

  // Auto rotate videos every 8 seconds (only if playing)
  useEffect(() => {
    if (videoIntervalRef.current) {
      clearInterval(videoIntervalRef.current);
    }
    
    if (isPlaying) {
      videoIntervalRef.current = setInterval(() => {
        if (!isVideoTransitioning) {
          nextVideo();
        }
      }, 8000);
    }
    
    return () => {
      if (videoIntervalRef.current) {
        clearInterval(videoIntervalRef.current);
      }
    };
  }, [activeVideo, isVideoTransitioning, isPlaying]);

  // Toggle auto-play
  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  const currentTestimonial = testimonials[active];
  const experienceText = getExperienceText(currentTestimonial.experienceMonths);

  return (
    <section className="testimonial">
      {/* Background decorative elements */}
      <div className="testimonial_background">
        <div className="bg_glow_1"></div>
        <div className="bg_glow_2"></div>
        <div className="bg_grid"></div>
      </div>

      <div className="testimonial_container">
        {/* LEFT SECTION - Written Testimonials */}
        <div className="testimonial_left">
          <div className="testimonial_header">
            <div className="header_top">
              <span className="header_label">TESTIMONIALS</span>
              <div className="header_line"></div>
            </div>
            <h2 className="testimonial_title">What Our Customers Say</h2>
            <p className="testimonial_subtitle">
              Real experiences from homeowners who made the switch to solar energy
            </p>
          </div>

          <div className="testimonial_carousel">
            <button 
              className="carousel_arrow left" 
              onClick={() => navigate('prev')}
              aria-label="Previous testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className={`testimonial_card ${isTransitioning ? 'transitioning' : ''}`}>
              <div className="card_content">
                <div className="quote_mark">"</div>
                
                <div className="rating_display">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className={`star ${i < currentTestimonial.rating ? 'filled' : ''}`}
                    >
                      ★
                    </span>
                  ))}
                  <span className="rating_text">Excellent</span>
                </div>

                <p className="testimonial_text">{currentTestimonial.text}</p>

                <div className="user_info">
                  <div className="user_avatar">
                    <img src={currentTestimonial.avatar} alt={currentTestimonial.name} />
                    <div className="avatar_ring"></div>
                  </div>
                  <div className="user_details">
                    <h4 className="user_name">{currentTestimonial.name}</h4>
                    <span className="user_role">{currentTestimonial.role}</span>
                    <div className="user_stats">
                      <span className="stat">Verified Customer</span>
                      <span className="stat_divider">•</span>
                      <span className="stat">{experienceText}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button 
              className="carousel_arrow right" 
              onClick={() => navigate('next')}
              aria-label="Next testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="carousel_indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === active ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <div className="indicator_progress"></div>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION - Customer Video Testimonials */}
        <div className="testimonial_right">
          <div className="video_header">
            <div className="video_badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <polygon points="10,8 16,12 10,16" fill="currentColor" />
              </svg>
              CUSTOMER VIDEO STORIES
            </div>
            <h3>Watch Their <span className="video_highlight">Solar Journey</span></h3>
            <p>Real customers, real results — authentic video testimonials</p>
          </div>

          <div className="video_carousel">
            <button 
              className="video_arrow video_arrow_left" 
              onClick={prevVideo}
              aria-label="Previous video"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>

            <div className={`video_wrapper ${isVideoTransitioning ? 'video_transitioning' : ''}`}>
              <div className="video_container">
                <iframe
                  key={activeVideo}
                  src={`https://www.youtube.com/embed/${customerVideos[activeVideo].id}?autoplay=0&rel=0&modestbranding=1&cc_load_policy=1`}
                  title={customerVideos[activeVideo].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="video_play_badge">
                  <span>▶ Customer Story</span>
                </div>
              </div>
              <div className="video_info">
                <div className="video_title">{customerVideos[activeVideo].title}</div>
                <div className="video_customer">
                  <span className="customer_name">{customerVideos[activeVideo].customerName}</span>
                  <span className="customer_location">📍 {customerVideos[activeVideo].location}</span>
                </div>
                <div className="video_quote">"{customerVideos[activeVideo].quote}"</div>
              </div>
            </div>

            <button 
              className="video_arrow video_arrow_right" 
              onClick={nextVideo}
              aria-label="Next video"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>

          <div className="video_controls_bar">
            <div className="video_indicators">
              {customerVideos.map((video, index) => (
                <button
                  key={index}
                  className={`video_indicator ${index === activeVideo ? 'active' : ''}`}
                  onClick={() => goToVideo(index)}
                  aria-label={`Go to video ${index + 1}`}
                >
                  <div className="video_indicator_progress"></div>
                </button>
              ))}
            </div>
            
           
          </div>

        
        </div>
      </div>
    </section>
  );
};

export default Testimonial;