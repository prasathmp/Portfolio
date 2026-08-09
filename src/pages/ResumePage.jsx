import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ResumePage.css';

function ResumePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-page-wrapper">
      {/* Header Nav (Hidden on print) */}
      <header className="resume-header no-print">
        <div className="header-container">
          <Link to="/" className="logo">
            MOHANAPRASATH <span className="logo-dot">M</span>
          </Link>
          <nav className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/experience" className="nav-link">Experience</Link>
            <Link to="/skills" className="nav-link">Skills & Tools</Link>
            <Link to="/certifications" className="nav-link">Certifications</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <button onClick={handlePrint} className="btn-resume print-btn">
              🖨️ Print / Save as PDF
            </button>
            <a 
              href="/Mohanaprasath_M___Resume.pdf" 
              download="Mohanaprasath_M_SEO_Lead_Resume.pdf"
              className="btn-primary"
            >
              📥 Download PDF
            </a>
          </nav>
        </div>
      </header>

      {/* Main Resume Container (ATS Formatted Document) */}
      <main className="ats-resume-container">
        
        {/* Top Actions Bar (Hidden on print) */}
        <div className="ats-action-bar no-print">
          <div className="ats-badge">✓ 100% ATS Optimized & Recruiter Verified Format</div>
          <div className="action-buttons">
            <button onClick={handlePrint} className="btn-secondary">
              🖨️ Print Resume
            </button>
            <a 
              href="/Mohanaprasath_M___Resume.pdf" 
              download="Mohanaprasath_M_SEO_Lead_Resume.pdf" 
              className="btn-primary"
            >
              📥 Download PDF Version
            </a>
          </div>
        </div>

        {/* ATS Document Layout */}
        <article className="ats-document">
          
          {/* Header Contact Block */}
          <header className="ats-header">
            <h1 className="ats-name">MOHANAPRASATH M</h1>
            <p className="ats-target-title">SEO TEAM LEAD | ORGANIC GROWTH & WHITE-HAT SPECIALIST</p>
            <div className="ats-contact-line">
              <span>Navalur, Chennai, India - 603103</span> • 
              <span>Phone: <a href="tel:+918682001285">+91 8682001285</a></span> • 
              <span>Email: <a href="mailto:prasathmp016@gmail.com">prasathmp016@gmail.com</a></span>
            </div>
            <div className="ats-links-line">
              <span>LinkedIn: <a href="https://www.linkedin.com/in/mohanaprasath-m-647396264/" target="_blank" rel="noreferrer">linkedin.com/in/mohanaprasath-m</a></span> • 
              <span>Portfolio: <a href="https://mohanaprasath-portfolio.vercel.app" target="_blank" rel="noreferrer">mohanaprasath-portfolio.vercel.app</a></span>
            </div>
          </header>

          <hr className="ats-divider" />

          {/* Executive Summary */}
          <section className="ats-section">
            <h2 className="ats-section-title">PROFESSIONAL SUMMARY</h2>
            <p className="ats-text">
              Results-driven <strong>SEO Team Lead & Senior SEO Specialist</strong> with <strong>3+ years of experience</strong> architecting, executing, and scaling technical SEO, backlink acquisition, and Conversion Rate Optimization (CRO) strategies. Proven track record of managing <strong>45+ client projects</strong> across Travel, E-Commerce, Finance, and B2B sectors—delivering an average of <strong>+185% organic traffic growth</strong> and scaling client search revenue. Expert in Google Search Console (GSC), GA4, GTM, Semrush, Ahrefs, Screaming Frog, Core Web Vitals optimization, and leading cross-functional dev and outreach teams under agency SOPs.
            </p>
          </section>

          {/* Technical Skills & Competencies */}
          <section className="ats-section">
            <h2 className="ats-section-title">CORE COMPETENCIES & TECHNICAL SKILLS</h2>
            <ul className="ats-skills-list">
              <li><strong>Technical SEO & Performance:</strong> Core Web Vitals Optimization, XML Sitemaps, Robots.txt, Canonical Validation, Schema.org (JSON-LD), Crawl Budget Optimization.</li>
              <li><strong>Analytics & Data Attribution:</strong> Google Search Console (GSC), Google Analytics 4 (GA4), Google Tag Manager (GTM), Looker Studio (Automated Executive Dashboards), Conversion Funnel Mapping.</li>
              <li><strong>SEO Software Suite & Auditing:</strong> Semrush Suite, Ahrefs Suite, Screaming Frog SEO Spider, Google Keyword Planner, PageSpeed Insights, Chrome UX Report (CrUX), Hunter.io, BuzzStream.</li>
              <li><strong>On-Page & CRO Strategy:</strong> Search Intent Keyword Mapping, Title & Meta Description CTR Optimization, H1-H6 Hierarchy Restructuring, Internal Link Graph Tuning, Landing Page CTA Placement.</li>
              <li><strong>Off-Page & Authority Acquisition:</strong> White-Hat Link Building, DA 50+ Contextual Guest Blogging, Unlinked Brand Mention Reclamation, Local Citations, Google Business Profile Management.</li>
              <li><strong>Leadership & Quality Control:</strong> Team Mentorship, Standard Operating Procedures (SOPs), Code & Audit QA Reviews, Client Advisory, Stakeholder Growth Reporting.</li>
            </ul>
          </section>

          {/* Work Experience */}
          <section className="ats-section">
            <h2 className="ats-section-title">PROFESSIONAL WORK EXPERIENCE</h2>

            {/* Role 1 */}
            <div className="ats-job-block">
              <div className="ats-job-header">
                <span className="ats-job-role">SEO Team Lead</span>
                <span className="ats-job-date">April 2026 – Present</span>
              </div>
              <div className="ats-job-company">Joy Technologies • Chennai, India</div>
              <ul className="ats-bullet-list">
                <li>Lead, mentor, and direct a team of SEO specialists and outreach associates, managing search-marketing operations across 45+ active client accounts.</li>
                <li>Standardized agency Standard Operating Procedures (SOPs) for technical site auditing, keyword mapping, backlink acquisition, and quality assurance reviews.</li>
                <li>Direct enterprise technical SEO audits, resolving indexation bottlenecks, crawl errors, and structured JSON-LD schema deployments.</li>
                <li>Collaborate with web developers and UI/UX designers to integrate search compliance into site builds and production code releases.</li>
                <li>Formulate growth roadmaps and present monthly organic traffic ROI reports to enterprise stakeholders using automated Looker Studio dashboards.</li>
              </ul>
            </div>

            {/* Role 2 */}
            <div className="ats-job-block">
              <div className="ats-job-header">
                <span className="ats-job-role">SEO Specialist</span>
                <span className="ats-job-date">June 2024 – April 2026</span>
              </div>
              <div className="ats-job-company">Joy Technologies • Chennai, India</div>
              <ul className="ats-bullet-list">
                <li>Designed and executed end-to-end technical, on-page, and off-page SEO strategies for international client portfolios in Travel, E-Commerce, Finance, and B2B sectors.</li>
                <li>Diagnosed and resolved Core Web Vitals performance bottlenecks using Screaming Frog and GSC, improving mobile page speed scores.</li>
                <li>Conducted competitor keyword gap analysis and search intent mapping to capture high-converting transactional search queries.</li>
                <li>Executed white-hat backlink campaigns, acquiring high-authority DA 50+ contextual backlinks to scale client domain authority scores.</li>
                <li>Configured GA4 custom events and Google Tag Manager tracking to optimize landing page CTA placements and user conversion paths.</li>
              </ul>
            </div>

            {/* Role 3 */}
            <div className="ats-job-block">
              <div className="ats-job-header">
                <span className="ats-job-role">Associate SEO Specialist</span>
                <span className="ats-job-date">June 2023 – June 2024</span>
              </div>
              <div className="ats-job-company">Joy Technologies • Chennai, India</div>
              <ul className="ats-bullet-list">
                <li>Promoted to full-time associate specialist following top-tier intern performance; managed SEO execution for 20+ concurrent client accounts.</li>
                <li>Executed technical on-page optimizations including title tags, meta descriptions, header tag structures, internal linking, and image alt text.</li>
                <li>Managed scaled off-page outreach, guest blogging, local citation management, and Google Business Profile optimizations.</li>
                <li>Maintained consistent on-time project delivery schedules, driving enhanced client retention rates and customer satisfaction scores.</li>
              </ul>
            </div>

            {/* Role 4 */}
            <div className="ats-job-block">
              <div className="ats-job-header">
                <span className="ats-job-role">Digital Marketing Intern</span>
                <span className="ats-job-date">January 2023 – March 2023</span>
              </div>
              <div className="ats-job-company">Joy Technologies • Chennai, India</div>
              <ul className="ats-bullet-list">
                <li>Performed initial keyword discovery, competitor search volume benchmarking, and technical audit support for senior specialists.</li>
                <li>Implemented segmented email marketing outreach sequences and built target publisher contact prospect databases.</li>
                <li>Executed foundational off-page submissions, business directory verifications, and link prospecting.</li>
              </ul>
            </div>
          </section>

          {/* Certifications */}
          <section className="ats-section cert-section">
            <h2 className="ats-section-title">PROFESSIONAL CERTIFICATIONS</h2>
            <ul className="ats-simple-list">
              <li><strong>Meta Social Media Marketing Professional Certificate</strong> – Meta / Coursera (Issued Mar 2025 | Verification ID: K60DAVWFTGE7)</li>
              <li><strong>Meta Certified Digital Marketing Associate</strong> – Meta Certified / Meta Blueprint (Issued Mar 2025)</li>
              <li><strong>Google Ads Search Certification</strong> – Google (Issued June 2023)</li>
              <li><strong>Navigating On-Page & Technical SEO</strong> – Semrush Academy (Issued Nov 2023)</li>
              <li><strong>LinkedIn & Instagram Marketing Certification</strong> – Great Learning (Issued Sept 2023)</li>
            </ul>
          </section>

          {/* Education & Personal Details */}
          <section className="ats-section education-section">
            <h2 className="ats-section-title">EDUCATION & ADDITIONAL DETAILS</h2>
            <ul className="ats-simple-list">
              <li><strong>Degree:</strong> Bachelor's Degree in Relevant Discipline | Tamil Nadu, India</li>
              <li><strong>Languages:</strong> English (Professional), Tamil (Native)</li>
              <li><strong>Work Preference:</strong> Open to Remote, Hybrid, or On-Site opportunities globally</li>
            </ul>
          </section>

        </article>
      </main>

      {/* Footer (Hidden on print) */}
      <footer className="no-print">
        <div className="footer-container">
          <div className="footer-text">
            © {new Date().getFullYear()} Mohanaprasath M. All Rights Reserved.
          </div>
          <div className="footer-socials">
            <a 
              href="https://www.linkedin.com/in/mohanaprasath-m-647396264/" 
              target="_blank" 
              rel="noreferrer" 
              className="social-icon-link"
            >
              🔗 LinkedIn Profile
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ResumePage;
