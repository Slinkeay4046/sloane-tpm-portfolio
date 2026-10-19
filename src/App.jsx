import React, { useState } from 'react';

const Arrow = ({ diagonal = false }) => <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>;

const projects = [
  {
    id: 'knx', number: '01', eyebrow: 'FOUNDER-LED SAAS PLATFORM', title: 'Turning a complex event workflow into one connected product',
    org: 'KNX Technologies', period: '2026 — Present', category: 'Product & Platform',
    description: 'Leading product direction and engineering for a multi-role platform that brings event organizers, instructors, DJs, and attendees into a coordinated experience.',
    tags: ['Product strategy', 'Payments', 'Full-stack delivery'],
    situation: 'Community events depend on fragmented tools for registrations, payments, communication, and administrative workflows. Different participant roles require different permissions and interfaces.',
    ownership: 'Founder and full-stack engineer. Responsible for defining product scope, making UX and architecture decisions, implementing integrations, and iterating on workflows.',
    approach: [
      'Mapped the needs of organizers, instructors, DJs, and attendees into distinct platform roles and workflows.',
      'Developed the application using React/Vite, Supabase/PostgreSQL, and Stripe Connect.',
      'Prioritized ticketing, event management, permissions, messaging, and administration as interconnected capabilities.',
      'Balanced product decisions with implementation effort and operational considerations.'
    ],
    outcome: 'Built and launched a SaaS platform with core event, payment, role, and administration workflows. Add verified adoption and transaction metrics when available.',
    artifact: 'Suggested supporting artifacts: feature roadmap, stakeholder map, architecture diagram, and launch checklist.',
    theme: 'mint'
  },
  {
    id: 'ecr', number: '02', eyebrow: 'MULTI-CLIENT HEALTHCARE DELIVERY', title: 'Coordinating healthcare implementations from kickoff to go-live',
    org: 'Oracle Health', period: '2023 — Present', category: 'Program Delivery',
    description: 'Managed electronic case reporting implementation activities across approximately 50 healthcare clients, connecting technical readiness with stakeholder coordination.',
    tags: ['Program coordination', 'Stakeholders', 'Go-live planning'],
    situation: 'Electronic case reporting deployments require synchronized onboarding, implementation milestones, data-quality follow-up, and external approval steps.',
    ownership: 'Project management responsibilities for approximately 50 eCR clients, from kickoff and onboarding through soft and hard go-live.',
    approach: [
      'Coordinated client onboarding and implementation milestones.',
      'Tracked readiness and follow-up activities across multiple concurrent client deployments.',
      'Worked across technical and client-facing stakeholders to move implementations toward go-live.',
      'Supported data-quality monitoring and follow-up solutions related to external approval.'
    ],
    outcome: 'An earlier resume documented 76% of the approximately 50 clients as post-go-live at that reporting point. Confirm the current figure before publishing as a present-day KPI.',
    artifact: 'Suggested supporting artifacts: anonymized rollout tracker, dependency map, status dashboard, and go-live readiness criteria.',
    theme: 'blue'
  },
  {
    id: '3plta', number: '03', eyebrow: 'APPLICATION SECURITY & TECHNICAL PROGRAM DELIVERY', title: '3PLTA — Third-Party Dependency Package Remediation',
    org: 'Oracle Health', period: '2023 — Present', category: 'Technical Delivery',
    description: 'Contributed to enterprise application security and modernization through third-party dependency vulnerability remediation, package upgrades, compatibility testing, and release validation.',
    tags: ['Security remediation', 'Dependency management', 'Release validation'],
    situation: 'Known third-party package vulnerabilities and runtime compatibility changes required focused remediation while preserving enterprise application stability and release readiness.',
    ownership: 'Software engineering contributor responsible for technical risk identification, vulnerability remediation, compatibility testing, and release validation in collaboration with engineering workflows. Formal ownership of the overall remediation program is not claimed.',
    approach: [
      'Identified and remediated vulnerable third-party dependencies in enterprise applications.',
      'Updated packages including Express, AJV, qs, and minimatch, prioritizing vulnerability and compatibility considerations.',
      'Supported Node.js runtime upgrades and resolved related compatibility issues.',
      'Used Jenkins CI/CD pipelines and Git-based workflows to support testing, deployment, and release management.',
      'Performed regression testing and troubleshooting to validate application stability and quality assurance.',
      'Collaborated within engineering workflows to address security, maintainability, and technical decision-making requirements.'
    ],
    outcome: 'Improved application security posture, dependency maintainability, and release readiness while reducing exposure to known third-party package vulnerabilities.',
    artifact: 'Suggested supporting artifacts: sanitized dependency register, vulnerability-prioritization log, compatibility test plan, and release-validation checklist.',
    theme: 'peach'
  }
];

const capabilities = [
  { no: '01', title: 'Program execution', desc: 'Milestones, coordinated rollouts, risk tracking, and go-live readiness.' },
  { no: '02', title: 'Product & stakeholder alignment', desc: 'Requirements, cross-functional communication, trade-offs, and prioritization.' },
  { no: '03', title: 'Technical fluency', desc: 'Web platforms, APIs, databases, cloud services, infrastructure, and security.' },
  { no: '04', title: 'Clear communication', desc: 'Making complex systems understandable to technical and non-technical partners.' }
];

function App() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('All');
  const [menuOpen, setMenuOpen] = useState(false);
  const active = projects.find(p => p.id === selected);
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  function openProject(id) {
    setSelected(id);
    document.body.style.overflow = 'hidden';
  }
  function closeProject() {
    setSelected(null);
    document.body.style.overflow = '';
  }

  return <>
    <header className="site-header" id="top">
      <div className="container nav-inner">
        <a className="wordmark" href="#top" aria-label="Sloane Davidson home">SD<span className="wordmark-dot">.</span></a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>☰</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          <a onClick={() => setMenuOpen(false)} href="#work">Selected work</a>
          <a onClick={() => setMenuOpen(false)} href="#about">About</a>
          <a onClick={() => setMenuOpen(false)} href="#expertise">Expertise</a>
          <a onClick={() => setMenuOpen(false)} href="#contact" className="nav-contact">Get in touch <Arrow diagonal /></a>
        </nav>
      </div>
    </header>

    <main>
      <section className="hero">
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot"/> TECHNICAL PROGRAMS · PRODUCT · DELIVERY</div>
            <h1>Making complex<br/>technology <em>work.</em></h1>
            <p className="hero-description">I'm Sloane Davidson — a software engineer, technical consultant, and SaaS founder who connects engineering details with product direction and coordinated delivery.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#work">Explore my work <Arrow /></a>
              <a className="button button-ghost" href="/Sloane_Davidson_Resume.pdf" download>Download resume <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
            <div className="hero-art-card"><div className="art-mini-label">WHAT I BRING TO THE TABLE</div><div>Clarity<span className="art-plus">+</span></div><div>Execution<span className="art-plus">+</span></div><div>Perspective<span className="art-plus">.</span></div></div>
            <div className="art-coordinate">STRATEGY / SYSTEMS / PEOPLE</div>
          </div>
        </div>
        <div className="container hero-bottom"><span>ATLANTA, GEORGIA · REMOTE COLLABORATION</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="proof-strip" aria-label="Experience highlights"><div className="container proof-grid">
        <div><strong>50<span>+</span></strong><span>Healthcare client implementations coordinated</span></div>
        <div><strong>3</strong><span>Core domains: healthcare, federal technology, SaaS</span></div>
        <div><strong>M.S.</strong><span>Software Engineering</span></div>
      </div></section>

      <section className="section work-section" id="work">
        <div className="container">
          <div className="section-topline"><span className="section-kicker">01 / FEATURED WORK</span><span className="section-aside">SELECTED CASE STUDIES</span></div>
          <div className="section-intro"><h2>Work at the intersection<br/>of <em>people & systems.</em></h2><p>A selection of technical initiatives covering product direction, implementation coordination, and enterprise software delivery.</p></div>
          <div className="filters" aria-label="Filter case studies">{['All','Product & Platform','Program Delivery','Technical Delivery'].map(x => <button key={x} className={filter === x ? 'filter active' : 'filter'} onClick={() => setFilter(x)} aria-pressed={filter === x}>{x}</button>)}</div>
          <div className="project-grid">{filtered.map(p => <button className={`project-card theme-${p.theme}`} key={p.id} onClick={() => openProject(p.id)} aria-label={`Read case study: ${p.title}`}>
            <div className="project-visual"><div className="visual-top"><span>{p.number} / CASE STUDY</span><span className="visual-arrow">↗</span></div><div className="visual-center"><span className="visual-ring ring-outer"/><span className="visual-ring ring-inner"/><div className="visual-inside">{p.id === 'knx' ? 'KNX' : p.id === 'ecr' ? 'eCR' : '3PLTA'}<small>{p.id === 'knx' ? 'PLATFORM' : p.id === 'ecr' ? 'DELIVERY' : 'SECURITY'}</small></div></div><div className="visual-bottom">{p.org.toUpperCase()}</div></div>
            <div className="project-content"><div className="project-meta"><span>{p.org}</span><span>{p.period}</span></div><h3>{p.title}</h3><p>{p.description}</p><div className="tag-row">{p.tags.map(t=><span key={t}>{t}</span>)}</div><div className="project-link">Explore case study <Arrow diagonal /></div></div>
          </button>)}</div>
          <p className="confidential-note">Case studies use public-facing summaries. Internal systems, confidential records, and sensitive client details are excluded.</p>
        </div>
      </section>

      <section className="section about-section" id="about"><div className="container about-grid"><div><div className="section-kicker">02 / ABOUT ME</div><h2>Technical depth.<br/><em>Human perspective.</em></h2></div><div className="about-body"><p className="about-lead">I enjoy the space between a complicated technical problem and the people who need it solved.</p><p>My background spans enterprise healthcare engineering, federal software environments, multi-client implementation management, and building my own SaaS platform. That blend helps me understand what teams are building, why it matters, and what it takes to deliver.</p><p>I'm especially interested in technical program and product roles where strategic thinking, thoughtful collaboration, and clear execution are equally important.</p><a href="/Sloane_Davidson_Resume.pdf" download className="text-link">View my resume <Arrow diagonal /></a></div></div></section>

      <section className="section expertise-section" id="expertise"><div className="container"><div className="section-topline"><span className="section-kicker">03 / HOW I WORK</span><span className="section-aside">CORE STRENGTHS</span></div><div className="section-intro compact"><h2>From idea<br/>to <em>implementation.</em></h2><p>Combining engineering fluency with practical coordination and people-centered problem solving.</p></div><div className="cap-grid">{capabilities.map(c=><div className="cap-card" key={c.no}><span>{c.no} /</span><h3>{c.title}</h3><p>{c.desc}</p></div>)}</div><div className="tools-bar"><span>TECHNICAL CONTEXT</span><p>React · Node.js · REST APIs · SQL · Supabase · OCI · Kubernetes/OKE · CI/CD · Jira · Agile</p></div></div></section>

      <section className="contact-section" id="contact"><div className="container contact-layout"><div><div className="section-kicker">04 / CONNECT</div><h2>Let's make the<br/><em>complex clear.</em></h2><p>Interested in technical program management, platform delivery, and product-focused opportunities.</p></div><div className="contact-actions"><a className="button button-dark" href="/Sloane_Davidson_Resume.pdf" download>Download resume <span aria-hidden="true">↓</span></a><p className="contact-edit">Add a professional email or LinkedIn URL in <code>src/App.jsx</code> before publishing.</p></div></div></section>
    </main>
    <footer><div className="container footer-inner"><a className="wordmark" href="#top">SD<span className="wordmark-dot">.</span></a><span>© {new Date().getFullYear()} Sloane Davidson</span><a href="#top">BACK TO TOP ↑</a></div></footer>

    {active && <div className="modal-backdrop" onMouseDown={e => { if (e.target === e.currentTarget) closeProject(); }} role="presentation"><section className="case-modal" role="dialog" aria-modal="true" aria-labelledby="case-title"><div className="modal-head"><span>{active.number} / {active.eyebrow}</span><button aria-label="Close case study" onClick={closeProject}>✕</button></div><div className="modal-body"><p className="case-org">{active.org} · {active.period}</p><h2 id="case-title">{active.title}</h2><p className="case-summary">{active.description}</p><div className="case-columns"><div><h3>The challenge</h3><p>{active.situation}</p><h3>My role</h3><p>{active.ownership}</p><h3>Outcome</h3><p>{active.outcome}</p></div><div><h3>Approach</h3><ul>{active.approach.map(a=><li key={a}>{a}</li>)}</ul><div className="artifact-box"><span>PROGRAM ARTIFACTS</span><p>{active.artifact}</p></div></div></div></div></section></div>}
  </>;
}

export default App;
