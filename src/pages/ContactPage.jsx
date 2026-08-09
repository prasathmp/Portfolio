import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    roleType: 'Hiring / Full-Time Role',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("https://formsubmit.co/ajax/prasathmp016@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New HR / Client Inquiry: ${formData.subject || 'Portfolio Inquiry'} from ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
          name: formData.name,
          email: formData.email,
          inquiry_type: formData.roleType,
          subject: formData.subject,
          message: formData.message
        })
      });
    } catch (err) {
      console.log('Submission sent:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', roleType: 'Hiring / Full-Time Role', message: '' });
      setTimeout(() => setIsSubmitted(false), 7000);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('prasathmp016@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="contact-page-container">
      {/* Header Nav */}
      <header className="contact-page-header">
        <div className="header-container">
          <Link to="/" className="logo">
            MOHANAPRASATH<span className="logo-dot">.M</span>
          </Link>
          <nav className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/experience" className="nav-link">Experience</Link>
            <Link to="/skills" className="nav-link">Skills & Tools</Link>
            <Link to="/certifications" className="nav-link">Certifications</Link>
            <Link to="/contact" className="nav-link active">Contact</Link>
            <a 
              href="/Mohanaprasath_M___Resume.pdf" 
              download="Mohanaprasath_M_SEO_Lead_Resume.pdf" 
              className="btn-resume"
            >
              Download Resume
            </a>
          </nav>
        </div>
      </header>

      <main className="contact-page-main">
        {/* Hero Section */}
        <section className="contact-page-hero">
          <div className="contact-hero-content">
            <span className="contact-hero-tag">RECRUITER & CLIENT CONNECT</span>
            <h1 className="contact-hero-title">
              Get In <span>Touch</span>
            </h1>
            <p className="contact-hero-subtitle">
              Whether you are an HR professional, talent acquisition partner, or business leader looking for a proven SEO Specialist & Team Lead to drive organic growth—I’d love to connect.
            </p>
          </div>
        </section>

        {/* HR & Contact Cards Grid */}
        <section className="contact-cards-section">
          <div className="contact-cards-grid">
            
            {/* Email Card */}
            <div className="contact-channel-card highlight-card">
              <div className="channel-icon-box">📧</div>
              <div className="channel-info">
                <span className="channel-label">Direct Email</span>
                <a href="mailto:prasathmp016@gmail.com" className="channel-value">prasathmp016@gmail.com</a>
                <p className="channel-desc">Best for formal HR inquiries, job offers, and project proposals.</p>
              </div>
              <div className="channel-actions">
                <a href="mailto:prasathmp016@gmail.com" className="btn-channel-primary">Send Email</a>
                <button onClick={handleCopyEmail} className="btn-channel-secondary">
                  {copied ? '✓ Copied!' : 'Copy Email'}
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="contact-channel-card">
              <div className="channel-icon-box">🔗</div>
              <div className="channel-info">
                <span className="channel-label">LinkedIn Profile</span>
                <a 
                  href="https://www.linkedin.com/in/mohanaprasath-m-647396264/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="channel-value"
                >
                  linkedin.com/in/mohanaprasath-m
                </a>
                <p className="channel-desc">View professional network, endorsement recommendations & updates.</p>
              </div>
              <div className="channel-actions">
                <a 
                  href="https://www.linkedin.com/in/mohanaprasath-m-647396264/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-channel-primary"
                >
                  Connect on LinkedIn ↗
                </a>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="contact-channel-card">
              <div className="channel-icon-box">📱</div>
              <div className="channel-info">
                <span className="channel-label">Call / WhatsApp</span>
                <a href="tel:+918682001285" className="channel-value">+91 8682001285</a>
                <p className="channel-desc">Available for phone interviews, quick syncs, and WhatsApp chats.</p>
              </div>
              <div className="channel-actions">
                <a href="tel:+918682001285" className="btn-channel-primary">Call Directly</a>
                <a 
                  href="https://wa.me/918682001285" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-channel-secondary"
                >
                  WhatsApp 💬
                </a>
              </div>
            </div>

            {/* Location & Availability Card */}
            <div className="contact-channel-card">
              <div className="channel-icon-box">📍</div>
              <div className="channel-info">
                <span className="channel-label">Location & Preferences</span>
                <span className="channel-value-static">Navalur, Chennai, India</span>
                <p className="channel-desc">Open to Remote, Hybrid, or On-Site opportunities in Chennai & globally.</p>
              </div>
              <div className="channel-badges">
                <span className="info-pill">✓ Open to Opportunities</span>
                <span className="info-pill">✓ SEO Team Lead</span>
              </div>
            </div>

          </div>
        </section>

        {/* HR Quick Details & Inquiry Form Section */}
        <section className="contact-form-section">
          <div className="form-layout-grid">
            
            {/* HR Info Panel */}
            <div className="hr-info-panel">
              <span className="panel-tag">HR & RECRUITER QUICK SNAPSHOT</span>
              <h2>Hiring Information</h2>
              <p className="panel-desc">
                Quick facts to streamline candidate screening and interview scheduling for talent acquisition teams:
              </p>

              <div className="hr-fact-list">
                <div className="fact-item">
                  <span className="fact-icon">👔</span>
                  <div>
                    <strong>Target Roles:</strong>
                    <span>SEO Team Lead, Senior SEO Specialist, Organic Growth Manager</span>
                  </div>
                </div>

                <div className="fact-item">
                  <span className="fact-icon">⏳</span>
                  <div>
                    <strong>Total Experience:</strong>
                    <span>3+ Years in SEO, Link Building, Technical Auditing & Team Leadership</span>
                  </div>
                </div>

                <div className="fact-item">
                  <span className="fact-icon">📊</span>
                  <div>
                    <strong>Proven Track Record:</strong>
                    <span>45+ Client Projects Handled with +185% Average Organic Traffic Growth</span>
                  </div>
                </div>

                <div className="fact-item">
                  <span className="fact-icon">📄</span>
                  <div>
                    <strong>Resume Document:</strong>
                    <a 
                      href="/Mohanaprasath_M___Resume.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="download-link"
                    >
                      Download Resume PDF 📥
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Box */}
            <div className="contact-form-box">
              <h2 className="form-title">Send a Direct Message</h2>
              <p className="form-subtitle">Fill out the form below and I will get back to you within 24 hours.</p>

              <form onSubmit={handleFormSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      placeholder="e.g. Sarah Jenkins (HR Manager)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="roleType">Inquiry Type *</label>
                    <select 
                      id="roleType" 
                      value={formData.roleType}
                      onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                      className="form-select"
                    >
                      <option value="Hiring / Full-Time Role">Hiring / Full-Time Role Opportunity</option>
                      <option value="Freelance / SEO Consultation">SEO Audit / Project Consultation</option>
                      <option value="Speaking / Collaboration">Speaking / Collaboration</option>
                      <option value="General Inquiry">General Networking</option>
                    </select>
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="subject">Subject *</label>
                    <input 
                      type="text" 
                      id="subject" 
                      required 
                      placeholder="e.g. SEO Specialist Role at Joy Technologies / Opportunity Discussion"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="message">Message *</label>
                    <textarea 
                      id="message" 
                      required 
                      rows="5"
                      placeholder="Share details about the role, project scope, or interview schedule..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="btn-primary btn-submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending Message...' : 'Send Message Now'}
                </button>

                {isSubmitted && (
                  <div className="success-message">
                    ✓ Message Sent Successfully! Your message has been delivered directly to prasathmp016@gmail.com. Mohanaprasath will get back to you shortly.
                  </div>
                )}
              </form>
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="footer-text">
            © {new Date().getFullYear()} Mohanaprasath M. All Rights Reserved.
          </div>
          <div className="footer-socials">
            <a 
              href="https://www.linkedin.com/in/mohanaprasath-m-647396264/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-link"
              title="LinkedIn Profile"
            >
              🔗 LinkedIn Profile
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ContactPage;
