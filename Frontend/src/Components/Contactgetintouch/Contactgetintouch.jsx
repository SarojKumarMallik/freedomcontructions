import React, { useRef, useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Contactgetintouch.css";

const Contactgetintouch = () => {

  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Auto hide success & error after 3 sec
  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setError(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  // Form Validation
  const validateForm = (data) => {
    const errors = {};

    if (!data.user_name || data.user_name.length < 3) {
      errors.user_name = "Name must be at least 3 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.user_email)) {
      errors.user_email = "Enter a valid email address";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (data.user_phone && !phoneRegex.test(data.user_phone)) {
      errors.user_phone = "Phone must be 10 digits";
    }

    if (!data.subject) {
      errors.subject = "Subject is required";
    }

    if (!data.message || data.message.length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    return errors;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = {
      user_name: form.current.user_name.value.trim(),
      user_email: form.current.user_email.value.trim(),
      user_phone: form.current.user_phone.value.trim(),
      subject: form.current.subject.value.trim(),
      message: form.current.message.value.trim(),
    };

    const errors = validateForm(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length !== 0) return;

    setLoading(true);
    setSuccess(false);
    setError(false);

    emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    )
    .then(() => {
      setLoading(false);
      setSuccess(true);
      form.current.reset();
      setFormErrors({});
    })
    .catch(() => {
      setLoading(false);
      setError(true);
    });
  };

  return (
    <section className="Contactgetintouch-section">
      <div className="Contactgetintouch-container">

        {/* LEFT SIDE */}
        <div className="Contactgetintouch-left">
          <span className="Contactgetintouch-subtitle">CONTACT US</span>

          <h2 className="Contactgetintouch-title">
            Let’s Discuss Your Project
          </h2>

          <p className="Contactgetintouch-description">
  We provide professional solar, electrical and industrial solutions tailored to your business needs. 
  Our expert team ensures quality installation
</p>


          <div className="Contactgetintouch-info-wrapper">
            <div className="Contactgetintouch-info-card">
              <div className="Contactgetintouch-icon">
                <FaPhoneAlt />
              </div>
              <div>
                <p>Call Us</p>
                <a href="tel:8280152685">+91 8280152685</a>
              </div>
            </div>

            <div className="Contactgetintouch-info-card">
              <div className="Contactgetintouch-icon">
                <FaEnvelope />
              </div>
              <div>
                <p>Email Us</p>
                <a href="mailto:freedom.bhadrak@gmail.com">
                  freedom.bhadrak@gmail.com
                </a>
              </div>
            </div>

           
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="Contactgetintouch-right">
          <form ref={form} onSubmit={sendEmail} className="Contactgetintouch-form">

            <div className="Contactgetintouch-grid">

              <div>
                <input type="text" name="user_name" placeholder="Full Name" />
                {formErrors.user_name && <small className="error">{formErrors.user_name}</small>}
              </div>

              <div>
                <input type="email" name="user_email" placeholder="Email Address" />
                {formErrors.user_email && <small className="error">{formErrors.user_email}</small>}
              </div>

              <div>
                <input type="text" name="user_phone" placeholder="Phone Number" />
                {formErrors.user_phone && <small className="error">{formErrors.user_phone}</small>}
              </div>

              <div>
                <input type="text" name="subject" placeholder="Subject" />
                {formErrors.subject && <small className="error">{formErrors.subject}</small>}
              </div>

            </div>

            <div>
              <textarea name="message" placeholder="Write your message..." rows="5"></textarea>
              {formErrors.message && <small className="error">{formErrors.message}</small>}
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message →"}
            </button>

            {success && (
              <p className="success-message">
                Message sent successfully
              </p>
            )}

            {error && (
              <p className="error-message">
                Failed to send message
              </p>
            )}

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contactgetintouch;
