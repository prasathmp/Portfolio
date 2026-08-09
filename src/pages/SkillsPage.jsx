import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SkillsPage.css';

function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skillCategories = [
    { id: 'all', name: 'All Skills & Tools' },
    { id: 'analytics', name: 'Analytics & GSC' },
    { id: 'technical', name: 'Technical & Crawling' },
    { id: 'keywords', name: 'Keyword & Competitor' },
    { id: 'onpage', name: 'On-Page & Content' },
    { id: 'offpage', name: 'Off-Page & Outreach' },
    { id: 'leadership', name: 'Leadership & Strategy' }
  ];

  const skillsData = [
    // Analytics & GSC
    {
      id: 'gsc',
      category: 'analytics',
      name: 'Google Search Console (GSC)',
      icon: '📊',
      proficiency: 98,
      level: 'Expert / Daily Usage',
      description: 'The foundation of technical search monitoring. Used daily to track impression velocity, organic click trends, indexing status, sitemap health, canonical tag validation, and Core Web Vitals (INP, LCP, CLS) performance across 45+ projects.',
      useCases: ['Diagnosing indexing & crawl errors', 'Identifying strike-distance keywords (Positions 4-15)', 'Monitoring INP & Page Experience reports', 'Submitting XML sitemaps and inspecting URLs'],
      tags: ['Indexing', 'CTR Optimization', 'URL Inspection', 'Core Web Vitals']
    },
    {
      id: 'ga4',
      category: 'analytics',
      name: 'Google Analytics 4 (GA4)',
      icon: '📈',
      proficiency: 95,
      level: 'Advanced / Expert',
      description: 'Essential for measuring the true business ROI of organic search. Experienced in configuring custom events, tracking user conversion pathways, organic traffic attribution modeling, and analyzing user landing page behavior.',
      useCases: ['Organic traffic conversion attribution', 'Landing page engagement rate analysis', 'Custom event & conversion goal setup', 'User path exploration & drop-off analysis'],
      tags: ['Attribution', 'Conversion Tracking', 'User Paths', 'GA4 Explorations']
    },
    {
      id: 'gtm',
      category: 'analytics',
      name: 'Google Tag Manager (GTM)',
      icon: '🏷️',
      proficiency: 90,
      level: 'Advanced',
      description: 'Deploying tracking tags, event triggers, and analytics scripts without developer dependency. Expertise in DOM element triggers, form submission tracking, custom JS variables, and scroll-depth tracking.',
      useCases: ['Setting up lead form submit events', 'Tracking CTA button clicks & outbound links', 'Deploying dynamic Schema JSON-LD markup', 'Data layer event mapping'],
      tags: ['Tag Management', 'Data Layer', 'Custom Triggers', 'Event Tracking']
    },
    {
      id: 'looker',
      category: 'analytics',
      name: 'Looker Studio (Data Studio)',
      icon: '📉',
      proficiency: 92,
      level: 'Advanced Specialist',
      description: 'Designing automated, visually compelling client dashboards that blend data from Google Search Console, GA4, Semrush, and Google Sheets into actionable real-time reports for stakeholders.',
      useCases: ['Automated monthly client reporting', 'Multi-source data blending (GSC + GA4)', 'Executive ROI & keyword ranking dashboards', 'MoM and YoY traffic trend comparisons'],
      tags: ['Client Dashboards', 'Data Blending', 'Executive Reporting', 'Automated Metrics']
    },

    // Technical & Crawling
    {
      id: 'screaming-frog',
      category: 'technical',
      name: 'Screaming Frog SEO Spider',
      icon: '🐸',
      proficiency: 96,
      level: 'Expert Auditor',
      description: 'The core tool for enterprise site audits. Executing full site crawls to identify broken 404 links, 301 redirect chains, missing/duplicate meta tags, canonical mismatches, orphaned pages, and JS rendering issues.',
      useCases: ['Crawling 100k+ page site architectures', 'Custom Regex & XPath data extraction', 'Audit of status codes & redirect chains', 'H1, Title, and Meta description audit'],
      tags: ['Site Crawling', 'Redirect Chains', 'XPath Extraction', 'Audit Reports']
    },
    {
      id: 'pagespeed',
      category: 'technical',
      name: 'PageSpeed Insights & CrUX',
      icon: '⚡',
      proficiency: 94,
      level: 'Expert Specialist',
      description: 'Optimizing site speed and Core Web Vitals to meet Google ranking standards. Diagnosing Interaction to Next Paint (INP), Largest Contentful Paint (LCP), and Cumulative Layout Shift (CLS).',
      useCases: ['Identifying render-blocking CSS/JS', 'Image compression & WebP format conversion', 'Font loading optimization (font-display: swap)', 'Improving mobile page speed scores'],
      tags: ['INP', 'LCP', 'CLS', 'Render Blocking', 'Performance']
    },
    {
      id: 'schema',
      category: 'technical',
      name: 'Schema Markup & Rich Snippets',
      icon: '🧩',
      proficiency: 92,
      level: 'Advanced Specialist',
      description: 'Implementing JSON-LD structured data to help search engines understand page context and unlock Rich Snippet features (FAQ, Organization, Local Business, Article, Product, Breadcrumbs).',
      useCases: ['JSON-LD structured data coding', 'Rich snippet SERP feature acquisition', 'Schema validation via Schema.org & Rich Results test', 'Entity SEO optimization'],
      tags: ['JSON-LD', 'Rich Results', 'Entity SEO', 'Schema.org']
    },

    // Keyword & Competitor Research
    {
      id: 'semrush',
      category: 'keywords',
      name: 'Semrush (Suite)',
      icon: '🔍',
      proficiency: 95,
      level: 'Expert User',
      description: 'Leveraging Semrush for deep keyword discovery, competitor organic strategy breakdown, position tracking, keyword gap analysis, and toxic link auditing across diverse client industries.',
      useCases: ['Competitor keyword gap analysis', 'Daily position tracking & SERP features monitoring', 'Keyword Magic Tool intent filtering', 'Site Audit & Backlink Audit modules'],
      tags: ['Keyword Gap', 'Position Tracking', 'SERP Analytics', 'Competitor Research']
    },
    {
      id: 'ahrefs',
      category: 'keywords',
      name: 'Ahrefs (Suite)',
      icon: '🎯',
      proficiency: 92,
      level: 'Expert User',
      description: 'Utilizing Ahrefs Site Explorer and Content Explorer for backlink profile analysis, link intersection discovery, organic traffic estimation, and finding high-performing content ideas.',
      useCases: ['Backlink profile auditing & link intersection', 'Content Gap analysis vs top 5 competitors', 'Domain Rating (DR) & URL Rating (UR) evaluation', 'Organic search traffic estimation'],
      tags: ['Backlink Audit', 'Content Gap', 'Domain Rating', 'Link Intersection']
    },
    {
      id: 'keyword-planner',
      category: 'keywords',
      name: 'Google Keyword Planner & Trends',
      icon: '💡',
      proficiency: 90,
      level: 'Advanced',
      description: 'Uncovering raw search volume data directly from Google, tracking seasonal keyword fluctuations, and grouping transactional vs informational query intent for strategic content mapping.',
      useCases: ['Search volume validation', 'Seasonal search trend forecasting', 'Transactional & commercial query categorization', 'PPC & Organic keyword synergy'],
      tags: ['Search Volume', 'Intent Mapping', 'Seasonal Trends', 'Query Research']
    },

    // On-Page & Content
    {
      id: 'on-page-opt',
      category: 'onpage',
      name: 'On-Page Optimization & Content Mapping',
      icon: '✍️',
      proficiency: 96,
      level: 'Master Competency',
      description: 'Optimizing on-page architecture including Title Tag optimization, Meta Description copy, Heading Tag hierarchy (H1-H6), internal linking structure, image ALT attributes, and keyword density.',
      useCases: ['Crafting high-CTR meta titles & descriptions', 'Internal link graph optimization', 'Header tag hierarchy restructuring', 'URL slug optimization & breadcrumb setup'],
      tags: ['Title Tags', 'Internal Linking', 'H1-H6 Hierarchy', 'CTR Optimization']
    },
    {
      id: 'cms-seo',
      category: 'onpage',
      name: 'WordPress, Yoast, & Rank Math',
      icon: '🌐',
      proficiency: 95,
      level: 'Expert Administrator',
      description: 'Hands-on configuration of popular Content Management Systems (WordPress, Shopify, Webflow) and SEO plugins to automate sitemaps, canonical tags, and meta templates.',
      useCases: ['Rank Math & Yoast SEO configuration', 'WordPress technical performance optimization', 'Robots.txt & XML sitemap management', 'Shopify & E-commerce collection page SEO'],
      tags: ['WordPress', 'Shopify', 'Rank Math', 'Yoast SEO', 'Robots.txt']
    },
    {
      id: 'cro',
      category: 'onpage',
      name: 'Conversion Rate Optimization (CRO)',
      icon: '🎯',
      proficiency: 88,
      level: 'Advanced Practitioner',
      description: 'Aligning organic traffic with conversion design principles. Optimizing landing page call-to-actions (CTAs), lead form placements, user trust signals, and readable UX typography.',
      useCases: ['Landing page CTA placement testing', 'Lead form friction reduction', 'Organic traffic conversion rate improvement', 'Value proposition layout tuning'],
      tags: ['CRO', 'Landing Pages', 'CTA Placement', 'Funnels']
    },

    // Off-Page & Outreach
    {
      id: 'link-building',
      category: 'offpage',
      name: 'Link Building & Backlink Acquisition',
      icon: '🔗',
      proficiency: 94,
      level: 'Master Competency',
      description: 'Executing white-hat link acquisition strategies to build domain authority. Securing DA 50+ contextual backlinks through personalized guest blogging, resource page link building, and broken link replacement.',
      useCases: ['Securing DA 50+ contextual links', 'Publisher prospecting & relationship management', 'Broken link building outreach', 'Unlinked brand mention reclamation'],
      tags: ['Guest Blogging', 'DA 50+ Links', 'Outreach', 'White-Hat']
    },
    {
      id: 'outreach-tools',
      category: 'offpage',
      name: 'Hunter.io, BuzzStream & Outreach',
      icon: '📧',
      proficiency: 88,
      level: 'Advanced',
      description: 'Using specialized prospecting and outreach tools to locate verified editor emails, manage outreach email campaigns, and track publisher response rates.',
      useCases: ['Verified email address discovery', 'Outreach campaign tracking', 'Blogger relationship CRM management', 'Email sequence personalization'],
      tags: ['Hunter.io', 'BuzzStream', 'Email Prospecting', 'Blogger Outreach']
    },

    // Leadership & Strategy
    {
      id: 'team-leadership',
      category: 'leadership',
      name: 'SEO Team Leadership & SOPs',
      icon: '👔',
      proficiency: 95,
      level: 'Current Role / Lead',
      description: 'Leading and mentoring SEO specialists and outreach teams. Establishing Standard Operating Procedures (SOPs) for technical audits, keyword mapping, link building, and campaign quality assurance.',
      useCases: ['Designing agency SEO audit SOPs', 'Mentoring junior specialists & intern training', 'Quality assurance (QA) code & audit reviews', 'Managing deliverables across 45+ projects'],
      tags: ['Team Leadership', 'SEO SOPs', 'QA Standards', 'Mentorship']
    },
    {
      id: 'algo-recovery',
      category: 'leadership',
      name: 'Google Algorithm Update Adaptation',
      icon: '🛡️',
      proficiency: 92,
      level: 'Expert Strategist',
      description: 'Monitoring Google Core Updates, Helpful Content Updates (HCU), and Spam Updates. Analyzing traffic volatility during update rollouts and implementing swift compliance fixes.',
      useCases: ['Analyzing Core Update volatility', 'Helpful Content Update compliance audits', 'E-E-A-T trust signals enhancement', 'Disavow file preparation & spam link cleaning'],
      tags: ['Core Updates', 'HCU Audits', 'E-E-A-T', 'Spam Recovery']
    }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <div className="skills-page-container">
      {/* Header Nav */}
      <header className="skills-page-header">
        <div className="header-container">
          <Link to="/" className="logo">
            MOHANAPRASATH<span className="logo-dot">.M</span>
          </Link>
          <nav className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/experience" className="nav-link">Experience</Link>
            <Link to="/skills" className="nav-link active">Skills & Tools</Link>
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

      <main className="skills-page-main">
        {/* Hero Section */}
        <section className="skills-page-hero">
          <div className="skills-hero-content">
            <span className="skills-hero-tag">TECHNICAL COMPETENCIES & TOOLKIT</span>
            <h1 className="skills-hero-title">
              SEO Skills & <span>Software Stack</span>
            </h1>
            <p className="skills-hero-subtitle">
              A detailed breakdown of the search platforms, analytics software, technical auditing tools, and strategic leadership frameworks mastered over 3+ years of driving organic search growth.
            </p>
          </div>

          {/* Quick Stats Row */}
          <div className="skills-stats-row">
            <div className="skills-stat-box">
              <span className="stat-num">15+</span>
              <span className="stat-text">SEO Tools Mastered</span>
            </div>
            <div className="skills-stat-box">
              <span className="stat-num">3+</span>
              <span className="stat-text">Years Daily Hands-On</span>
            </div>
            <div className="skills-stat-box">
              <span className="stat-text-highlight">GA4 & GSC</span>
              <span className="stat-text">Core Analytics Stack</span>
            </div>
            <div className="skills-stat-box">
              <span className="stat-num">100%</span>
              <span className="stat-text">White-Hat Compliant</span>
            </div>
          </div>
        </section>

        {/* Filter Categories Bar */}
        <section className="skills-filter-section">
          <div className="filter-tabs">
            {skillCategories.map(cat => (
              <button 
                key={cat.id} 
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </section>

        {/* Skills & Tools Cards Grid */}
        <section className="skills-grid-section">
          <div className="skills-cards-grid">
            {filteredSkills.map(skill => (
              <article key={skill.id} className="skill-detail-card">
                <div className="skill-card-top">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-meta-header">
                    <h3>{skill.name}</h3>
                    <span className="skill-level-badge">{skill.level}</span>
                  </div>
                </div>

                {/* Proficiency Bar */}
                <div className="skill-proficiency-block">
                  <div className="proficiency-meta">
                    <span>Mastery Level</span>
                    <span>{skill.proficiency}%</span>
                  </div>
                  <div className="proficiency-track">
                    <div className="proficiency-fill" style={{ width: `${skill.proficiency}%` }}></div>
                  </div>
                </div>

                <p className="skill-desc-text">{skill.description}</p>

                {/* Practical Use Cases */}
                <div className="use-cases-block">
                  <h4>Practical Applications & Use Cases:</h4>
                  <ul>
                    {skill.useCases.map((uc, i) => (
                      <li key={i}>{uc}</li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="skill-card-tags">
                  {skill.tags.map((tag, i) => (
                    <span key={i} className="skill-tag">#{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="skills-page-cta">
          <h2>Ready to deploy an enterprise SEO toolkit to scale your search revenue?</h2>
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

export default SkillsPage;
