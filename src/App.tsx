import "./App.css";

function App() {
  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
       
<div className="logo">
  <img src="/profile.jpg" alt="Mihretu Tekalign Woldemariam" />
</div>

       <div className="nav-links">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#experience">Experience</a>
  <a href="#education">Education</a>
  <a href="#languages">Languages</a>
  <a href="#skills">Skills</a>
  <a href="#projects">Projects</a>
  <a href="#contact">Contact</a>
</div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="eyebrow">IT PROFESSIONAL & SOFTWARE DEVELOPER</p>

          <h1>
            Building practical
            <span> IT solutions </span>
            that solve real problems.
          </h1>

          <p className="hero-description">
            IT Support Specialist and Software Developer focused on IT service
            management, networking, full-stack development, cloud technologies,
            and practical technology solutions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Projects
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="profile-circle">MT</div>

          <h2>IT Support Specialist</h2>

          <p>Software Developer • Networking • Cloud</p>

          <div className="availability">
            <span></span>
            Open to Remote Opportunities
          </div>
        </div>
      </section>

      {/* About */}
{/* About */}
<section id="about" className="section">
  <div className="section-heading">
    <p className="section-label">ABOUT ME</p>
    <h2>IT Support experience combined with modern technology skills</h2>
  </div>

  <div className="about-content">
    <p>
      I am an IT Support and Service Desk professional with 12+ years of
      experience spanning Tier 1–2 service desk operations, second-level
      technical support, incident management, and business application
      support.
    </p>

    <p>
      I have experience handling escalated incidents end-to-end, including
      diagnosing root causes, coordinating cross-functional resolution,
      managing technical escalations, and closing incidents within SLA
      requirements.
    </p>

    <p>
      My technical skills include hardware and software troubleshooting,
      Windows support, remote user support, TCP/IP, DNS, DHCP, SQL, Excel,
      Power BI, Python, Java, C++, JavaScript, and business application
      support.
    </p>

    <p>
      I am currently focused on remote Technical Support, Service Desk, and
      Application Support opportunities where I can combine my extensive
      troubleshooting experience with modern technology and software
      development skills.
    </p>
  </div>
</section>
{/* Experience */}
<section id="experience" className="section experience-section">
  <div className="section-heading">
    <p className="section-label">EXPERIENCE</p>
    <h2>Professional Experience</h2>
  </div>

  <div className="experience-list">

    {/* Current Position */}
    <article className="experience-card">
      <div className="experience-header">
        <div>
          <h3>Second Level Support Supervisor</h3>
          <h4>Ethio Telecom</h4>
        </div>

        <span className="experience-date">
          Oct 2023 – Present
        </span>
      </div>

      <ul>
        <li>
          Lead second-level support operations within the Information
          Systems division, owning escalated incidents from intake through
          resolution.
        </li>

        <li>
          Coordinate with network, applications, and infrastructure teams
          to restore services and maintain system availability.
        </li>

        <li>
          Drive technical troubleshooting, incident escalation, and
          continuous service-improvement initiatives.
        </li>

        <li>
          Monitor and coordinate resolution of complex, high-impact
          technical issues affecting business-critical systems.
        </li>
      </ul>
    </article>

    {/* Advanced Support */}
    <article className="experience-card">
      <div className="experience-header">
        <div>
          <h3>
            Advanced Level Support & Incident Management Supervisor
          </h3>

          <h4>Ethio Telecom</h4>
        </div>

        <span className="experience-date">
          Apr 2021 – Oct 2023
        </span>
      </div>

      <ul>
        <li>
          Oversaw advanced incident management and technical problem
          resolution for escalated support cases.
        </li>

        <li>
          Implemented root-cause analysis processes to identify and reduce
          recurring incidents.
        </li>

        <li>
          Redesigned escalation workflows to improve service reliability
          and reduce time-to-resolution.
        </li>

        <li>
          Performed diagnostics and resolved incidents within SLA
          requirements.
        </li>

        <li>
          Documented technical solutions and developed knowledge-base
          resources for recurring issues.
        </li>
      </ul>
    </article>

    {/* Application Support */}
    <article className="experience-card">
      <div className="experience-header">
        <div>
          <h3>Business Application Support Supervisor</h3>
          <h4>Ethio Telecom</h4>
        </div>

        <span className="experience-date">
          Jan 2021 – Apr 2021
        </span>
      </div>

      <ul>
        <li>
          Supervised application support teams responsible for enterprise
          business systems.
        </li>

        <li>
          Maintained availability and smooth operation of business-critical
          applications.
        </li>

        <li>
          Coordinated troubleshooting and resolution of application issues
          across technical teams and end users.
        </li>
      </ul>
    </article>

    {/* Service Desk Supervisor */}
    <article className="experience-card">
      <div className="experience-header">
        <div>
          <h3>IT Service Desk Supervisor</h3>
          <h4>Ethio Telecom</h4>
        </div>

        <span className="experience-date">
          Dec 2018 – Dec 2020
        </span>
      </div>

      <ul>
        <li>
          Managed daily IT service desk operations and coordinated incident
          handling.
        </li>

        <li>
          Improved service delivery and incident-resolution processes.
        </li>

        <li>
          Provided direct technical support to end users for incidents and
          service requests.
        </li>
      </ul>
    </article>

    {/* Service Desk Analyst */}
    <article className="experience-card">
      <div className="experience-header">
        <div>
          <h3>IT Service Desk Analyst</h3>
          <h4>Ethio Telecom</h4>
        </div>

        <span className="experience-date">
          Oct 2016 – Dec 2018
        </span>
      </div>

      <ul>
        <li>
          Provided technical support across systems, hardware, and networks
          for internal users.
        </li>

        <li>
          Handled tickets, incidents, and service requests within SLA
          requirements.
        </li>

        <li>
          Diagnosed and resolved hardware, software, and connectivity
          issues.
        </li>

        <li>
          Communicated technical solutions clearly to non-technical users.
        </li>
      </ul>
    </article>

    {/* Contact Center */}
    <article className="experience-card">
      <div className="experience-header">
        <div>
          <h3>Contact Center Advisor</h3>
          <h4>Ethio Telecom</h4>
        </div>

        <span className="experience-date">
          Nov 2012 – Oct 2016
        </span>
      </div>

      <ul>
        <li>
          Supported high-volume customer service operations and resolved
          customer and technical inquiries efficiently.
        </li>

        <li>
          Maintained professional and SLA-conscious communication across
          high-volume customer interactions.
        </li>
      </ul>
    </article>

    {/* Programming Instructor */}
    <article className="experience-card">
      <div className="experience-header">
        <div>
          <h3>Part-Time Programming Instructor</h3>
          <h4>
            Virtual Engineering PLC & Dynami Computerized & Graphics
            Training Center
          </h4>
        </div>

        <span className="experience-date">
          Nov 2012 – Present
        </span>
      </div>

      <ul>
        <li>
          Teach foundational and intermediate programming courses in
          Python, Java, and C++.
        </li>

        <li>
          Guide learners through practical projects and coding assignments.
        </li>

        <li>
          Explain technical concepts in an accessible way, supporting
          effective communication with both technical and non-technical
          users.
        </li>
      </ul>
    </article>

  </div>
</section>

{/* Education & Certifications */}
<section id="education" className="section education-section">
  <div className="section-heading">
    <p className="section-label">EDUCATION & CERTIFICATIONS</p>
    <h2>Education and Professional Training</h2>
  </div>

  <div className="education-card">
    <div className="education-icon">🎓</div>
    <div>
      <h3>Bachelor of Science in Information Systems</h3>
      <h4>Addis Ababa University</h4>
      <p>Graduated in 2012</p>
    </div>
  </div>

  <h3 className="certification-heading">
    Certifications & Professional Training
  </h3>

  <div className="certification-grid">
    <div className="certification-card">CompTIA A+</div>
    <div className="certification-card">
      Oracle Cloud Infrastructure Foundations Associate
    </div>
    <div className="certification-card">Azure AI Fundamentals</div>
    <div className="certification-card">AI Fundamentals</div>
    <div className="certification-card">Intermediate Python</div>
    <div className="certification-card">Data Manipulation with Pandas</div>
    <div className="certification-card">Introduction to R</div>
    <div className="certification-card">Programming Fundamentals</div>
    <div className="certification-card">
      Implementing and Configuring Cisco Identity Services Engine (SISE) 5.0
    </div>
    <div className="certification-card">
      Implementing Cisco Enterprise Wireless Networks (ENWLSI) 2.0
    </div>
  </div>
</section>

{/* Languages */}
<section id="languages" className="section languages-section">
  <div className="section-heading">
    <p className="section-label">LANGUAGES</p>
    <h2>Languages I Speak</h2>
  </div>

  <div className="languages-grid">
    <div className="language-card">English</div>
    <div className="language-card">Amharic</div>
    <div className="language-card">Kafigna</div>
    <div className="language-card">Shekigna</div>
  </div>
</section>

      {/* Skills */}
      <section id="skills" className="section skills-section">
        <div className="section-heading">
          <p className="section-label">SKILLS</p>
          <h2>What I work with</h2>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>🖥️ IT Support</h3>
            <p>
              Help desk, troubleshooting, incident management, service
              operations, and technical support.
            </p>
          </div>

          <div className="skill-card">
            <h3>🌐 Networking</h3>
            <p>
              Network troubleshooting, Cisco technologies, connectivity,
              infrastructure, and network security.
            </p>
          </div>

          <div className="skill-card">
            <h3>💻 Software Development</h3>
            <p>
              React, TypeScript, JavaScript, Node.js, Express, Python, and
              REST API development.
            </p>
          </div>

          <div className="skill-card">
            <h3>🗄️ Databases</h3>
            <p>
              PostgreSQL, MySQL, database design, SQL queries, and application
              data management.
            </p>
          </div>

          <div className="skill-card">
            <h3>☁️ Cloud & Systems</h3>
            <p>
              Microsoft Azure, Windows systems, Linux, system administration,
              and cloud technologies.
            </p>
          </div>

          <div className="skill-card">
            <h3>📊 Data & Automation</h3>
            <p>
              Python, data analysis, automation, visualization, and practical
              technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="section-heading">
          <p className="section-label">PROJECTS</p>
          <h2>Featured work</h2>
        </div>

        <div className="projects-grid">
          <article className="project-card">
            <div className="project-number">01</div>

            <h3>IT Helpdesk Ticketing System</h3>

            <p>
              Full-stack IT support application for creating, tracking,
              assigning, updating, and managing technical support tickets.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>PostgreSQL</span>
            </div>

            <a
              href="https://github.com/uterhim/helpdesk-ticketing-system"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub →
            </a>
          </article>

          <article className="project-card">
            <div className="project-number">02</div>

            <h3>Intelligent Traffic Management System</h3>

            <p>
              Research and prototype project exploring intelligent traffic
              management, simulation, traffic data analysis, and adaptive
              traffic control.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>SUMO</span>
              <span>TraCI</span>
              <span>Pandas</span>
            </div>

            <a
              href="https://github.com/uterhim"
              target="_blank"
              rel="noreferrer"
            >
              View Projects →
            </a>
          </article>

          <article className="project-card">
            <div className="project-number">03</div>

            <h3>IT Support Knowledge Base</h3>

            <p>
              Practical IT support documentation and knowledge resources for
              troubleshooting common technical and networking problems.
            </p>

            <div className="project-tags">
              <span>IT Support</span>
              <span>Networking</span>
              <span>Troubleshooting</span>
            </div>

            <a
              href="https://github.com/uterhim/IT-Support-Knowledge-Base"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub →
            </a>
          </article>
        </div>
      </section>

      {/* Contact */}
<section id="contact" className="contact-section">
  <p className="section-label">CONTACT</p>

  <h2>Let's work together.</h2>

  <p>
    I'm open to remote IT support, service desk, application support,
    software development, and technology opportunities.
  </p>

  <div className="contact-buttons">

    <a href="mailto:uterhim@gmail.com">
      📧 Email Me
    </a>

    <a href="tel:+251930015456">
      📱 Call Me
    </a>

    <a
      href="https://github.com/uterhim"
      target="_blank"
      rel="noreferrer"
    >
      💻 GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/mihretu-tekalign-039233213"
      target="_blank"
      rel="noreferrer"
    >
      🔗 LinkedIn
    </a>

  </div>
</section>

      {/* Footer */}
      <footer>
        <p>© 2026 Mihretu. Built with React + TypeScript.</p>
      </footer>
    </div>
  );
}

export default App;