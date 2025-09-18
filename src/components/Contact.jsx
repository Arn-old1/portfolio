import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  // form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // validation + submit states
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // clear error for that field as user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  // validate fields
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    setSubmitMessage("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitMessage(
        "Message sent successfully! I'll get back to you soon."
      );
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // helper buttons
  const copyEmail = () => {
    navigator.clipboard.writeText("agift2728@gmail.com");
    alert("Email copied to clipboard!");
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/256707883114", "_blank");
  };

  const openEmailClient = () => {
    window.open(
      "mailto:agift2728@gmail.com?subject=Project Inquiry&body=Hi Kirabo, I would like to discuss a project with you.",
      "_blank"
    );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-badge">
            <span className="contact-dot"></span>
            CONTACT
          </div>

          <h2 className="contact-title">Let's build something great.</h2>
          <p className="contact-subtitle">I usually reply within 24h.</p>

          <div className="contact-details">
            <div className="contact-item">
              <h3>EMAIL</h3>
              <div className="contact-value">
                <span>agift2728@gmail.com</span>
                <button className="copy-btn" onClick={copyEmail}>
                  Copy
                </button>
              </div>
            </div>

            <div className="contact-item">
              <h3>PHONE</h3>
              <div className="contact-value">
                <span>+256707883114</span>
                <button className="whatsapp-btn" onClick={openWhatsApp}>
                  WhatsApp
                </button>
              </div>
            </div>

            <div className="contact-item">
              <h3>LOCATION</h3>
              <div className="contact-value">
                <span>Uganda, Kampala</span>
              </div>
            </div>
          </div>

          <p className="contact-note">
            Prefer email? Use the form or click the address to open your mail
            app.
          </p>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={errors.name ? "error" : ""}
                placeholder="Kirabo Arnold"
              />
              {errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? "error" : ""}
                placeholder="you@example.com"
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleInputChange}
                className={errors.message ? "error" : ""}
                placeholder="Tell me about your project..."
              ></textarea>
              {errors.message && (
                <span className="error-message">{errors.message}</span>
              )}
            </div>

            <div className="form-actions">
              <button
                type="submit"
                className="send-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              <button
                type="button"
                className="hire-btn"
                onClick={openEmailClient}
              >
                Hire Me via Email
              </button>
            </div>

            {submitMessage && (
              <div
                className={`submit-message ${
                  submitMessage.includes("successfully") ? "success" : "error"
                }`}
              >
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;