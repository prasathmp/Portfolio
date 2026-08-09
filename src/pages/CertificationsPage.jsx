import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CertificationsPage.css';

function CertificationsPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const certificationsData = [
    {
      id: 'meta-coursera-professional',
      title: 'Meta Social Media Marketing Professional Certificate',
      issuer: 'Meta / Coursera',
      date: 'March 15, 2025',
      badge: '🏅',
      issuerLogo: '🌐',
      image: '/meta-social-media-marketing-coursera.png',
      verified: true,
      verifyUrl: 'https://coursera.org/verify/professional-cert/K60DAVWFTGE7',
      description: 'Professional 6-course specialization completed through Meta and Coursera. Validates comprehensive mastery of Meta Ads Manager, social content strategy, audience targeting, advertising with Meta, and campaign optimization capstone.',
      skillsValidated: [
        'Introduction to Social Media Marketing',
        'Social Media Management & Strategy',
        'Fundamentals of Social Media Advertising',
        'Advertising with Meta Ads Manager',
        'Measuring & Optimizing Social Media Campaigns',
        'Meta Social Media Marketing Capstone Project'
      ]
    },
    {
      id: 'meta-associate-badge',
      title: 'Meta Certified Digital Marketing Associate',
      issuer: 'Meta Certified / Meta Blueprint',
      date: 'March 2025',
      badge: '🏅',
      issuerLogo: '♾️',
      image: '/meta-certified-digital-marketing-associate.png',
      verified: true,
      description: 'Official Meta Certified Digital Marketing Associate credential awarded directly by Meta. Demonstrates fundamental proficiency in Meta advertising ecosystem, audience segmentation, campaign objective selection, and digital marketing measurement.',
      skillsValidated: [
        'Meta Advertising Ecosystem & Best Practices',
        'Audience Segmentation & Targeting',
        'Meta Ad Formats & Placement Optimization',
        'Campaign Measurement & Performance Analysis',
        'Meta Business Suite & Ads Manager Setup'
      ]
    },
    {
      id: 'google-ads',
      title: 'Google Ads Search Certification',
      issuer: 'Google',
      date: 'June 2023 - 2024',
      badge: '🏅',
      issuerLogo: '🔍',
      image: '/Google AD search certification.png',
      verified: true,
      description: 'Official accreditation from Google demonstrating mastery in building, optimizing, and managing high-performing Google Search ad campaigns to drive qualified traffic and max ROI.',
      skillsValidated: [
        'Google Ads Search Campaigns',
        'Keyword Match Types & Negative Keywords',
        'Smart Bidding & Target CPA/ROAS',
        'Quality Score Optimization',
        'Ad Extensions & Copywriting'
      ]
    },
    {
      id: 'semrush-seo',
      title: 'Navigating On-Page & Technical SEO',
      issuer: 'Semrush Academy',
      date: 'Nov 2023 - 2024',
      badge: '🏅',
      issuerLogo: '⚡',
      image: '/On page and Technical SEO.png',
      verified: true,
      description: 'Advanced technical SEO credential awarded by Semrush validating expertise in site architecture audits, crawl budget management, Core Web Vitals diagnostics, and structured data implementation.',
      skillsValidated: [
        'Technical Site Architecture Audits',
        'Crawlability & Indexation Diagnostics',
        'Schema.org & JSON-LD Structured Data',
        'Core Web Vitals (LCP, CLS, INP)',
        'Internal Link Graph Optimization'
      ]
    },
    {
      id: 'instagram-marketing',
      title: 'LinkedIn and Instagram Marketing',
      issuer: 'Great Learning',
      date: 'Sept 2023 - 2024',
      badge: '🏅',
      issuerLogo: '📱',
      image: '/Instagram marketing Fundamentals.png',
      verified: true,
      description: 'Specialized digital marketing certification focusing on organic social growth, B2B audience building on LinkedIn, content funnel strategy, and Instagram brand engagement tactics.',
      skillsValidated: [
        'B2B LinkedIn Outreach Strategy',
        'Instagram Algorithm & Reach',
        'Social Media Content Funnels',
        'Hashtag & Audience Targeting',
        'Brand Engagement Analytics'
      ]
    }
  ];

  return (
    <div className="certs-page-container">
      {/* Header Nav */}
      <header className="certs-page-header">
        <div className="header-container">
          <Link to="/" className="logo">
            MOHANAPRASATH <span className="logo-dot">M</span>
          </Link>
          <nav className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/experience" className="nav-link">Experience</Link>
            <Link to="/skills" className="nav-link">Skills & Tools</Link>
            <Link to="/certifications" className="nav-link active">Certifications</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
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

      <main className="certs-page-main">
        {/* Hero Section */}
        <section className="certs-page-hero">
          <div className="certs-hero-content">
            <span className="certs-hero-tag">VERIFIED CREDENTIALS & PROOF OF EXPERTISE</span>
            <h1 className="certs-hero-title">
              Professional <span>Certifications</span>
            </h1>
            <p className="certs-hero-subtitle">
              Industry-accredited certifications from Meta, Google, Semrush, and Great Learning validating 3+ years of expertise in Technical SEO, Search Marketing, and Meta Ads.
            </p>
          </div>

          {/* Quick Stats Row */}
          <div className="certs-stats-row">
            <div className="certs-stat-box">
              <span className="stat-num">5+</span>
              <span className="stat-text">Accredited Certifications</span>
            </div>
            <div className="certs-stat-box">
              <span className="stat-num">100%</span>
              <span className="stat-text">Verified Credentials</span>
            </div>
            <div className="certs-stat-box">
              <span className="stat-text-highlight">Meta & Google</span>
              <span className="stat-text">Official Badges</span>
            </div>
            <div className="certs-stat-box">
              <span className="stat-text-highlight">SEO & Paid Ads</span>
              <span className="stat-text">Dual Competency</span>
            </div>
          </div>
        </section>

        {/* Certifications Cards & Images Grid */}
        <section className="certs-grid-section">
          <div className="certs-cards-container">
            {certificationsData.map(cert => (
              <article key={cert.id} className="cert-detail-card">
                <div className="cert-card-header">
                  <div className="cert-issuer-badge">
                    <span className="issuer-icon">{cert.issuerLogo}</span>
                    <span className="issuer-name">{cert.issuer}</span>
                  </div>
                  <div className="cert-status-tag">✓ Verified Credential</div>
                </div>

                <div className="cert-body-grid">
                  {/* Image Preview Block */}
                  <div 
                    className="cert-image-wrapper"
                    onClick={() => setSelectedImage({ url: cert.image, title: cert.title })}
                    title="Click to view full certificate"
                  >
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="cert-img-preview"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="cert-img-fallback">
                      <span className="fallback-badge">🏅</span>
                      <span>{cert.title}</span>
                    </div>
                    <div className="image-overlay">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                      <span>View High-Res Certificate</span>
                    </div>
                  </div>

                  {/* Text Details Block */}
                  <div className="cert-info-block">
                    <h2 className="cert-title">{cert.title}</h2>
                    <div className="cert-meta-row">
                      <span className="cert-date-text">Issued: {cert.date}</span>
                      {cert.verifyUrl && (
                        <a 
                          href={cert.verifyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="verify-link-btn"
                        >
                          Verify on Coursera ↗
                        </a>
                      )}
                    </div>
                    <p className="cert-desc">{cert.description}</p>

                    <div className="skills-validated-box">
                      <h4>Competencies Validated:</h4>
                      <ul className="skills-val-list">
                        {cert.skillsValidated.map((skill, idx) => (
                          <li key={idx}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="certs-page-cta">
          <h2>Looking for a certified SEO Specialist & Team Lead to drive search traffic?</h2>
          <div className="cta-actions">
            <Link to="/" className="btn-primary">Return to Home</Link>
            <a href="/#contact" className="btn-secondary">Get In Touch</a>
          </div>
        </div>
      </main>

      {/* Modal for viewing certificate image in high resolution */}
      {selectedImage && (
        <div className="cert-modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedImage(null)}>✕</button>
            <h3>{selectedImage.title}</h3>
            <img src={selectedImage.url} alt={selectedImage.title} className="cert-modal-img" />
          </div>
        </div>
      )}

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
    </div>
  );
}

export default CertificationsPage;
