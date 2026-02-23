import React from "react";
import "./Contact.css";

function Contact() {
  const contactInfo = [
    {
      title: "Email",
      detail: "ar2665@njit.edu",
      link: "mailto:ar2665@njit.edu",
      icon: "📧",
    },
    {
      title: "Phone",
      detail: "+1(848)265-0949",
      link: "tel:+18482650949",
      icon: "📱",
    },
    {
      title: "Location",
      detail: "Edison, NJ",
      link: null,
      icon: "📍",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h3 className="info-title">Contact Information</h3>
          {contactInfo.map((info, index) => (
            <div key={index} className="contact-card">
              <span className="contact-icon">{info.icon}</span>
              {info.link ? (
                <span>
                  <strong>{info.title}:</strong>{" "}
                  <a href={info.link} className="contact-value">
                    {info.detail}
                  </a>
                </span>
              ) : (
                <span>
                  <strong>{info.title}:</strong>{" "}
                  <span className="contact-value">{info.detail}</span>
                </span>
              )}
            </div>
          ))}

          <div className="social-media">
            <h4 className="social-title">Follow Me</h4>
            <div className="social-links">
              <a
                href="http://github.com/AnirudhKRamkumar/"
                className="social-link github"
              >
                <span className="social-icon">🐙</span> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/anirudh-ramkumar/"
                className="social-link linkedin"
              >
                <span className="social-icon">💼</span> LinkedIn
              </a>
              <a
                href="https://www.instagram.com/anirudh.ramkumar/"
                className="social-link instagram"
              >
                <span className="social-icon">📸</span> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
