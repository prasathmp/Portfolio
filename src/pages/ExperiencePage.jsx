import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ExperiencePage.css';

function ExperiencePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="experience-page-container">
      {/* Header / Nav */}
      <header className="exp-page-header">
        <div className="header-container">
          <Link to="/" className="logo">
            MOHANAPRASATH <span className="logo-dot">M</span>
          </Link>
          <nav className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/experience" className="nav-link active">Experience</Link>
            <Link to="/skills" className="nav-link">Skills & Tools</Link>
            <Link to="/certifications" className="nav-link">Certifications</Link>
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

      <main className="exp-page-main">
        {/* Hero Section */}
        <section className="exp-page-hero">
          <div className="exp-hero-content">
            <span className="exp-hero-tag">CAREER JOURNEY & LEARNING PATHWAY</span>
            <h1 className="exp-hero-title">
              Professional <span>Work Experience</span>
            </h1>
            <p className="exp-hero-subtitle">
              A comprehensive breakdown of my roles, key responsibilities, strategic impact, and core learnings across 3+ years in SEO and Digital Marketing at Joy Technologies, Chennai.
            </p>
          </div>

          {/* Quick Stats Banner */}
          <div className="exp-stats-row">
            <div className="exp-stat-box">
              <span className="stat-num">3+</span>
              <span className="stat-text">Years SEO Experience</span>
            </div>
            <div className="exp-stat-box">
              <span className="stat-text-highlight">4 Career Phases</span>
              <span className="stat-text">Intern to Team Lead</span>
            </div>
            <div className="exp-stat-box">
              <span className="stat-num">45+</span>
              <span className="stat-text">Client Projects Handled</span>
            </div>
            <div className="exp-stat-box">
              <span className="stat-num">100%</span>
              <span className="stat-text">White-Hat SEO Strategies</span>
            </div>
          </div>
        </section>

        {/* Detailed Roles & Learnings Timeline */}
        <section className="exp-timeline-section">
          <div className="section-header">
            <span className="section-tag">Role Breakdown & Phase Evolution</span>
            <h2 className="section-title">Positions & <span>Key Learnings</span></h2>
          </div>

          <div className="detailed-roles-list">
            
            {/* ROLE 1: SEO Team Lead */}
            <article className="role-card primary-role">
              <div className="role-card-badge">Current Role</div>
              <div className="role-card-header">
                <div className="role-icon-box">👔</div>
                <div className="role-title-group">
                  <h2>SEO Team Lead</h2>
                  <div className="role-company-location">
                    <span className="company-name">Joy Technologies</span> • <span className="location">Chennai, India</span>
                  </div>
                </div>
                <div className="role-duration-badge">APRIL 2026 - PRESENT</div>
              </div>

              <div className="role-summary">
                Leading and mentoring a dedicated team of SEO specialists, standardizing agency campaign workflows, directing technical SEO audits, and managing search marketing strategy across 45+ active client portfolios.
              </div>

              <div className="role-details-grid">
                <div className="role-column">
                  <h3 className="column-title">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    Key Responsibilities & Hands-On Scope
                  </h3>
                  <ul className="details-list">
                    <li><strong>Team Leadership & Mentorship:</strong> Direct junior SEO specialists and outreach associates, conduct code/audit reviews, and establish quality control SOPs for all search campaigns.</li>
                    <li><strong>Enterprise Technical SEO:</strong> Oversee deep technical site architecture audits, JavaScript rendering performance, crawl budget optimization, and advanced schema markup deployment.</li>
                    <li><strong>Cross-Departmental Collaboration:</strong> Partner directly with frontend developers, UI/UX designers, and content teams to ensure technical SEO compliance during site builds and redesigns.</li>
                    <li><strong>Client Growth Advisory:</strong> Formulate search roadmaps, monitor KPI velocity, and present ROI metrics directly to enterprise stakeholders using custom Looker Studio dashboards.</li>
                  </ul>
                </div>

                <div className="role-column learnings-column">
                  <h3 className="column-title">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    Key Learnings & Strategic Growth
                  </h3>
                  <ul className="learnings-list">
                    <li>Mastered high-level team management, task delegation, and cross-functional project coordination.</li>
                    <li>Transitioned from tactical SEO execution to holistic multi-channel search & brand growth planning.</li>
                    <li>Developed strong client relationship management skills and client account retention strategies.</li>
                  </ul>
                </div>
              </div>

              <div className="role-tags">
                <span className="tag">Team Leadership</span>
                <span className="tag">Technical SEO SOPs</span>
                <span className="tag">Looker Studio</span>
                <span className="tag">Client Advisory</span>
                <span className="tag">Enterprise Strategy</span>
              </div>
            </article>

            {/* ROLE 2: SEO Specialist */}
            <article className="role-card">
              <div className="role-card-header">
                <div className="role-icon-box">🚀</div>
                <div className="role-title-group">
                  <h2>SEO Specialist</h2>
                  <div className="role-company-location">
                    <span className="company-name">Joy Technologies</span> • <span className="location">Chennai, India</span>
                  </div>
                </div>
                <div className="role-duration-badge">JUNE 2024 - APRIL 2026</div>
              </div>

              <div className="role-summary">
                Designed and executed end-to-end technical, on-page, and off-page SEO strategies for diverse international clients across Travel, E-Commerce, Finance, and B2B sectors.
              </div>

              <div className="role-details-grid">
                <div className="role-column">
                  <h3 className="column-title">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    Key Responsibilities & Hands-On Scope
                  </h3>
                  <ul className="details-list">
                    <li><strong>Technical SEO & Core Web Vitals:</strong> Diagnosed and fixed technical errors using Screaming Frog and GSC, resolving LCP/CLS/INP performance bottlenecks and indexing errors.</li>
                    <li><strong>Search Intent & Content Mapping:</strong> Conducted keyword gap research, mapped user commercial intent, and optimized site taxonomy to capture high-converting search traffic.</li>
                    <li><strong>High-Authority Link Acquisition:</strong> Executed targeted white-hat backlink campaigns, acquiring DA 50+ contextual backlinks to increase domain authority.</li>
                    <li><strong>CRO & Analytics Integration:</strong> Configured GA4 custom events and Google Tag Manager tracking to optimize user conversion funnels and boost overall client ROI.</li>
                  </ul>
                </div>

                <div className="role-column learnings-column">
                  <h3 className="column-title">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    Key Learnings & Strategic Growth
                  </h3>
                  <ul className="learnings-list">
                    <li>Deep technical understanding of search engine crawling, indexation algorithms, and page render mechanics.</li>
                    <li>Data-driven decision making using industry-standard tools (Semrush, Ahrefs, GSC, Screaming Frog).</li>
                    <li>Bridging technical SEO optimizations directly with Conversion Rate Optimization (CRO) for maximum business revenue.</li>
                  </ul>
                </div>
              </div>

              <div className="role-tags">
                <span className="tag">Core Web Vitals</span>
                <span className="tag">Keyword Strategy</span>
                <span className="tag">Link Building (DA 50+)</span>
                <span className="tag">GA4 & GTM</span>
                <span className="tag">Semrush & Ahrefs</span>
              </div>
            </article>

            {/* ROLE 3: Associate SEO Specialist */}
            <article className="role-card">
              <div className="role-card-header">
                <div className="role-icon-box">📈</div>
                <div className="role-title-group">
                  <h2>Associate SEO Specialist</h2>
                  <div className="role-company-location">
                    <span className="company-name">Joy Technologies</span> • <span className="location">Chennai, India</span>
                  </div>
                </div>
                <div className="role-duration-badge">JUNE 2023 - JUNE 2024</div>
              </div>

              <div className="role-summary">
                Promoted to full-time associate specialist after exceeding performance expectations; independently managed SEO campaigns for nearly 20 concurrent projects across multiple client verticals.
              </div>

              <div className="role-details-grid">
                <div className="role-column">
                  <h3 className="column-title">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    Key Responsibilities & Hands-On Scope
                  </h3>
                  <ul className="details-list">
                    <li><strong>On-Page Execution:</strong> Implemented title tag, meta description, heading structure (H1-H6), internal linking, and image alt text optimizations across client websites.</li>
                    <li><strong>Outreach & Citations:</strong> Executed scaled off-page campaigns, guest blogging outreach, local citations, and Google Business Profile management.</li>
                    <li><strong>Campaign Deliverables:</strong> Maintained consistent on-time project delivery, resulting in enhanced client satisfaction scores and account renewals.</li>
                  </ul>
                </div>

                <div className="role-column learnings-column">
                  <h3 className="column-title">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    Key Learnings & Strategic Growth
                  </h3>
                  <ul className="learnings-list">
                    <li>Gained speed and agility in managing multiple concurrent client accounts simultaneously.</li>
                    <li>Developed systematic guest blogging and outreach relationship networks.</li>
                    <li>Understood key factors driving client retention and clear performance reporting.</li>
                  </ul>
                </div>
              </div>

              <div className="role-tags">
                <span className="tag">On-Page Optimization</span>
                <span className="tag">Guest Blogging</span>
                <span className="tag">Local SEO</span>
                <span className="tag">Competitor Analysis</span>
              </div>
            </article>

            {/* ROLE 4: Digital Marketing Intern */}
            <article className="role-card">
              <div className="role-card-header">
                <div className="role-icon-box">🎓</div>
                <div className="role-title-group">
                  <h2>Digital Marketing Intern</h2>
                  <div className="role-company-location">
                    <span className="company-name">Joy Technologies</span> • <span className="location">Chennai, India</span>
                  </div>
                </div>
                <div className="role-duration-badge">JANUARY 2023 - MARCH 2023</div>
              </div>

              <div className="role-summary">
                Gained foundational hands-on training in search engine optimization, digital marketing outreach, email campaign segmentation, and web authority building.
              </div>

              <div className="role-details-grid">
                <div className="role-column">
                  <h3 className="column-title">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    Key Responsibilities & Hands-On Scope
                  </h3>
                  <ul className="details-list">
                    <li><strong>SEO Fundamentals & Keyword Research:</strong> Assisted senior specialists in initial keyword discovery, search volume metrics, and on-page auditing.</li>
                    <li><strong>Email Outreach Campaigns:</strong> Implemented segmented email marketing campaigns and prospect list building to support outreach efforts.</li>
                    <li><strong>Authority Prospecting:</strong> Performed initial publisher research and directory submissions to build domain trust signals.</li>
                  </ul>
                </div>

                <div className="role-column learnings-column">
                  <h3 className="column-title">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    Key Learnings & Strategic Growth
                  </h3>
                  <ul className="learnings-list">
                    <li>Solidified core principles of Google search algorithms and ranking factors.</li>
                    <li>Learned effective email outreach techniques and digital communication etiquette.</li>
                    <li>Gained familiarity with agency operational rhythms, task management tools, and digital workflows.</li>
                  </ul>
                </div>
              </div>

              <div className="role-tags">
                <span className="tag">SEO Fundamentals</span>
                <span className="tag">Email Marketing</span>
                <span className="tag">Link Prospecting</span>
                <span className="tag">Directory Submissions</span>
              </div>
            </article>

          </div>
        </section>

        {/* Back to Home CTA */}
        <div className="exp-page-cta">
          <h2>Interested in working together or reviewing specific case studies?</h2>
          <div className="cta-actions">
            <Link to="/" className="btn-primary">Return to Home</Link>
            <a href="/#contact" className="btn-secondary">Get In Touch</a>
          </div>
        </div>
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
    </div>
  );
}

export default ExperiencePage;
