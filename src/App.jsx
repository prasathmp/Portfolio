import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ExperiencePage from './pages/ExperiencePage.jsx';
import SkillsPage from './pages/SkillsPage.jsx';
import CertificationsPage from './pages/CertificationsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import './App.css';

function HomePage() {
  const [activeSection, setActiveSection] = useState('about');
  
  // Contact form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Section observer for active state in nav bar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'skills', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Form submission handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <>
      {/* Header & Nav */}
      <header>
        <div className="header-container">
          <a href="#about" className="logo">
            MOHANAPRASATH<span className="logo-dot">.M</span>
          </a>
          <nav className="nav-links">
            <a 
              href="#about" 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            >
              About
            </a>
            <Link 
              to="/experience" 
              className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
            >
              Experience
            </Link>
            <Link 
              to="/skills" 
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            >
              Skills & Tools
            </Link>
            <Link 
              to="/certifications" 
              className={`nav-link ${activeSection === 'certifications' ? 'active' : ''}`}
            >
              Certifications
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            >
              Contact
            </Link>
            <a 
              href="/Mohanaprasath_M___Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-resume"
            >
              Download Resume
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero & Profile Description */}
        <section id="about" className="hero-section">
          <div className="hero-content">
            <div className="hero-tagline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
              SEO & Digital Marketing Specialist
            </div>
            <h1 className="hero-title">
              Boosting Organic Traffic <br />
              & <span>Qualified Leads</span>
            </h1>
            <p className="hero-desc">
              Results-driven SEO Specialist with 3+ years of experience in link building, technical SEO, and conversion rate optimization (CRO). Expert in backlink acquisition, keyword strategy, and driving high-intent organic traffic to scale client revenue.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">Get In Touch</a>
              <Link to="/experience" className="btn-secondary">View Full Experience Page</Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glow-bg"></div>
            <div className="seo-card-visual">
              <div className="seo-card-header">
                <span>Organic Search Growth</span>
                <span>42.5k Total Monthly Visits</span>
              </div>
              <div className="seo-chart-mock">
                <div className="chart-bar" style={{ height: '30%' }} data-val="8.5k"></div>
                <div className="chart-bar" style={{ height: '45%' }} data-val="15.2k"></div>
                <div className="chart-bar" style={{ height: '55%' }} data-val="24.8k"></div>
                <div className="chart-bar" style={{ height: '70%' }} data-val="33.1k"></div>
                <div className="chart-bar active" style={{ height: '95%' }} data-val="42.5k"></div>
              </div>
              <div className="seo-growth-rate">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
                +185% Organic Traffic Growth
              </div>
            </div>
          </div>
        </section>

        {/* Stats Summary */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-num">3<span>+</span></div>
            <div className="stat-label">Years of SEO Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">45<span>+</span></div>
            <div className="stat-label">Successful Projects Handled</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">100<span>%</span></div>
            <div className="stat-label">White-Hat SEO Strategies</div>
          </div>
        </div>

        {/* Industry Focus Section */}
        <section id="industries">
          <div className="section-header">
            <span className="section-tag">Targeted Solutions</span>
            <h2 className="section-title">Industry <span>Expertise</span></h2>
          </div>
          <div className="industries-grid">
            <div className="industry-card">
              <div className="industry-icon">✈️</div>
              <h3 className="industry-name">Travel & Leisure</h3>
              <p className="industry-desc">Optimizing content and structure to rank for high-intent booking search terms globally.</p>
              <div className="industry-results">
                <div className="result-metric">Average Metric</div>
                <div className="result-detail">+180% Organic Bookings</div>
              </div>
            </div>
            
            <div className="industry-card">
              <div className="industry-icon">💼</div>
              <h3 className="industry-name">Business & Finance</h3>
              <p className="industry-desc">Building authority with quality backlinks to establish trust and search prominence.</p>
              <div className="industry-results">
                <div className="result-metric">Average Metric</div>
                <div className="result-detail">Top 3 Rankings for Core Keywords</div>
              </div>
            </div>

            <div className="industry-card">
              <div className="industry-icon">🛒</div>
              <h3 className="industry-name">E-Commerce</h3>
              <p className="industry-desc">Technical fixes, schema markup, and category-level optimization to drive product sales.</p>
              <div className="industry-results">
                <div className="result-metric">Average Metric</div>
                <div className="result-detail">45% Growth in Sales Traffic</div>
              </div>
            </div>

            <div className="industry-card">
              <div className="industry-icon">🏢</div>
              <h3 className="industry-name">B2B Lead Generation</h3>
              <p className="industry-desc">Keyword strategy tailored for decision-makers and high-value lead capture landing pages.</p>
              <div className="industry-results">
                <div className="result-metric">Average Metric</div>
                <div className="result-detail">+250% Inbound Inquiries</div>
              </div>
            </div>

            <div className="industry-card">
              <div className="industry-icon">🏪</div>
              <h3 className="industry-name">Small Business (Local)</h3>
              <p className="industry-desc">Google Business Profile setup, local citations, and geo-targeted on-page optimization.</p>
              <div className="industry-results">
                <div className="result-metric">Average Metric</div>
                <div className="result-detail">#1 Position in Local Map Pack</div>
              </div>
            </div>

            <div className="industry-card">
              <div className="industry-icon">🔗</div>
              <h3 className="industry-name">Link Building Specialist</h3>
              <p className="industry-desc">Securing premium guest posts and authority links to power up search visibility.</p>
              <div className="industry-results">
                <div className="result-metric">Average Metric</div>
                <div className="result-detail">DA 50+ Domain Link Acquisition</div>
              </div>
            </div>
          </div>
        </section>

        {/* Proven Campaign Performance */}
        <section id="calculator">
          <div className="section-header">
            <span className="section-tag">Proven Campaign Performance</span>
            <h2 className="section-title">SEO Traffic & Lead <span>Impact Delivered</span></h2>
          </div>
          <div className="calculator-box">
            <div className="calc-grid">
              <div className="calc-inputs">
                <div className="input-group-fixed">
                  <span className="fixed-label">Average Baseline Organic Traffic</span>
                  <div className="fixed-value-box">
                    <span className="fixed-val">30,000</span>
                    <span className="fixed-unit">visits/mo</span>
                  </div>
                </div>

                <div className="input-group-fixed">
                  <span className="fixed-label">Website Conversion Rate</span>
                  <div className="fixed-value-box">
                    <span className="fixed-val">2.5%</span>
                    <span className="fixed-unit">CVR</span>
                  </div>
                </div>

                <div className="input-group-fixed">
                  <span className="fixed-label">Average Lead / Customer Value</span>
                  <div className="fixed-value-box">
                    <span className="fixed-val">$100</span>
                    <span className="fixed-unit">per lead</span>
                  </div>
                </div>
              </div>

              <div className="calc-results">
                <div className="result-big-title">TOTAL MONTHLY ORGANIC TRAFFIC DELIVERED</div>
                <div className="result-big-num">85,500</div>
                
                <div className="result-split">
                  <div className="split-item">
                    <span className="split-label">Monthly Leads</span>
                    <span className="split-val">2,138</span>
                  </div>
                  <div className="split-item">
                    <span className="split-label">Potential Revenue/Mo</span>
                    <span className="split-val">$213,800</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience">
          <div className="section-header">
            <span className="section-tag">Career History</span>
            <h2 className="section-title">Work <span>Experience</span></h2>
          </div>
          <div className="experience-container">
            <div className="exp-item">
              <div className="exp-dot">👔</div>
              <div className="exp-content">
                <div className="exp-header">
                  <div className="exp-role-company">
                    <h3>SEO Team Lead</h3>
                    <div className="exp-company">Joy Technologies, Chennai</div>
                  </div>
                  <span className="exp-date">APRIL 2026 - PRESENT</span>
                </div>
                <ul className="exp-bullets">
                  <li>Lead and mentor a team of SEO specialists, aligning strategy with client search-marketing goals.</li>
                  <li>Direct technical SEO audits, advanced keyword strategy, and on-page/off-page optimizations across primary portfolios.</li>
                  <li>Coordinate with cross-functional teams to streamline content production and optimize site speed and performance.</li>
                </ul>
              </div>
            </div>

            <div className="exp-item">
              <div className="exp-dot">🚀</div>
              <div className="exp-content">
                <div className="exp-header">
                  <div className="exp-role-company">
                    <h3>SEO Specialist</h3>
                    <div className="exp-company">Joy Technologies, Chennai</div>
                  </div>
                  <span className="exp-date">JUNE 2024 - APRIL 2026</span>
                </div>
                <ul className="exp-bullets">
                  <li>Conduct comprehensive technical SEO audits and implement crucial site fixes to improve loading performance, Core Web Vitals, and search visibility.</li>
                  <li>Develop and execute both on-page and off-page SEO strategies, including deep keyword research, content mapping, and optimization.</li>
                  <li>Collaborate with cross-functional development and design teams to align marketing initiatives with client business goals and maximize total ROI.</li>
                </ul>
              </div>
            </div>

            <div className="exp-item">
              <div className="exp-dot">📈</div>
              <div className="exp-content">
                <div className="exp-header">
                  <div className="exp-role-company">
                    <h3>Associate SEO Specialist</h3>
                    <div className="exp-company">Joy Technologies, Chennai</div>
                  </div>
                  <span className="exp-date">JUNE 2023 - JUNE 2024</span>
                </div>
                <ul className="exp-bullets">
                  <li>Successfully transitioned to a permanent, full-time associate role after exceeding performance expectations and metrics.</li>
                  <li>Managed SEO campaigns for 45+ client projects, expanding agency expertise in link building, guest blogging outreach, and search compliance.</li>
                  <li>Ensured consistent on-time project delivery, resulting in enhanced client satisfaction scores and client retention.</li>
                </ul>
              </div>
            </div>

            <div className="exp-item">
              <div className="exp-dot">🎓</div>
              <div className="exp-content">
                <div className="exp-header">
                  <div className="exp-role-company">
                    <h3>Digital Marketing Intern</h3>
                    <div className="exp-company">Joy Technologies, Chennai</div>
                  </div>
                  <span className="exp-date">JANUARY 2023 - MARCH 2023</span>
                </div>
                <ul className="exp-bullets">
                  <li>Built a robust, fundamental understanding of both on-page and off-page SEO ranking factors and best practices.</li>
                  <li>Implemented highly segmented email marketing campaigns to support digital marketing outreach.</li>
                  <li>Gained proficiency in high-quality link acquisition strategies to boost client website authority scores.</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/experience" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Explore Detailed Experience Page & Phase Learnings →
            </Link>
          </div>
        </section>

        {/* Skills & Tools */}
        <section id="skills">
          <div className="section-header">
            <span className="section-tag">Competencies</span>
            <h2 className="section-title">Skills & <span>Tools</span></h2>
          </div>
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="skill-cat-title">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                Core SEO Skills
              </h3>
              <div className="skills-list">
                <div className="skill-item">
                  <div className="skill-meta">
                    <span className="skill-name">On-Page Optimization</span>
                    <span className="skill-pct">95%</span>
                  </div>
                  <div className="skill-track"><div className="skill-fill" style={{ width: '95%' }}></div></div>
                </div>
                <div className="skill-item">
                  <div className="skill-meta">
                    <span className="skill-name">Off-Page & Link Building</span>
                    <span className="skill-pct">90%</span>
                  </div>
                  <div className="skill-track"><div className="skill-fill" style={{ width: '90%' }}></div></div>
                </div>
                <div className="skill-item">
                  <div className="skill-meta">
                    <span className="skill-name">Keywords Research</span>
                    <span className="skill-pct">92%</span>
                  </div>
                  <div className="skill-track"><div className="skill-fill" style={{ width: '92%' }}></div></div>
                </div>
                <div className="skill-item">
                  <div className="skill-meta">
                    <span className="skill-name">Digital Marketing</span>
                    <span className="skill-pct">88%</span>
                  </div>
                  <div className="skill-track"><div className="skill-fill" style={{ width: '88%' }}></div></div>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-cat-title">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
                Analytics & Tools
              </h3>
              <div className="skills-list">
                <div className="skill-item">
                  <div className="skill-meta">
                    <span className="skill-name">Google Analytics, GSC, & GTM</span>
                    <span className="skill-pct">95%</span>
                  </div>
                  <div className="skill-track"><div className="skill-fill" style={{ width: '95%' }}></div></div>
                </div>
                <div className="skill-item">
                  <div className="skill-meta">
                    <span className="skill-name">Looker Studio (Reporting)</span>
                    <span className="skill-pct">85%</span>
                  </div>
                  <div className="skill-track"><div className="skill-fill" style={{ width: '85%' }}></div></div>
                </div>
                <div className="skill-item">
                  <div className="skill-meta">
                    <span className="skill-name">Semrush / Ahrefs</span>
                    <span className="skill-pct">90%</span>
                  </div>
                  <div className="skill-track"><div className="skill-fill" style={{ width: '90%' }}></div></div>
                </div>
                <div className="skill-item">
                  <div className="skill-meta">
                    <span className="skill-name">Google Ads / Meta Campaigns</span>
                    <span className="skill-pct">85%</span>
                  </div>
                  <div className="skill-track"><div className="skill-fill" style={{ width: '85%' }}></div></div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/skills" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Explore Full Skills & Software Stack →
            </Link>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications">
          <div className="section-header">
            <span className="section-tag">Education & Badges</span>
            <h2 className="section-title">Professional <span>Certifications</span></h2>
          </div>
          <div className="certs-grid">
            <div className="cert-card">
              <div>
                <div className="cert-badge">🏅</div>
                <h3 className="cert-title">Google Ads Search Certification</h3>
                <p className="cert-issuer">Google</p>
              </div>
              <div className="cert-date">June 2023 - 2024</div>
            </div>

            <div className="cert-card">
              <div>
                <div className="cert-badge">🏅</div>
                <h3 className="cert-title">Meta Social Media Marketing</h3>
                <p className="cert-issuer">Meta / Coursera</p>
              </div>
              <div className="cert-date">March 2025 - 2027</div>
            </div>

            <div className="cert-card">
              <div>
                <div className="cert-badge">🏅</div>
                <h3 className="cert-title">Navigating On-Page & Technical SEO</h3>
                <p className="cert-issuer">Semrush</p>
              </div>
              <div className="cert-date">Nov 2023 - 2024</div>
            </div>

            <div className="cert-card">
              <div>
                <div className="cert-badge">🏅</div>
                <h3 className="cert-title">LinkedIn and Instagram Marketing</h3>
                <p className="cert-issuer">Great Learning</p>
              </div>
              <div className="cert-date">Sept 2023 - 2024</div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/certifications" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              View Verified Certifications & Credentials Page →
            </Link>
          </div>
        </section>

        {/* Contact Form & Contact Details */}
        <section id="contact">
          <div className="section-header">
            <span className="section-tag">Let's Connect</span>
            <h2 className="section-title">Start Growing <span>Your Traffic</span></h2>
          </div>
          
          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-icon">📧</div>
                <div className="contact-detail">
                  <h4>Email Me</h4>
                  <a href="mailto:prasathmp016@gmail.com">prasathmp016@gmail.com</a>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">📱</div>
                <div className="contact-detail">
                  <h4>Call/WhatsApp</h4>
                  <a href="tel:+918682001285">+91 8682001285</a>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">📍</div>
                <div className="contact-detail">
                  <h4>Location</h4>
                  <p>Navalur, Chennai, India</p>
                </div>
              </div>
            </div>

            <div className="contact-form-box">
              <h3 className="form-title">Send a Message</h3>
              <form onSubmit={handleFormSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group full-width">
                    <label htmlFor="subject">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      required 
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                  <div className="form-group full-width">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      required 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="btn-primary btn-submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {isSubmitted && (
                  <div className="success-message">
                    ✓ Thank you! Your message was sent successfully. Mohanaprasath will get back to you shortly.
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
              href="https://linkedin.com/in/mohanaprasath-m-647396264" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-link"
              title="LinkedIn"
            >
              🔗 LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/certifications" element={<CertificationsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
