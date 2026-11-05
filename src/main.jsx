
import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Code2,
  Sparkles,
  MapPin,
  Eye
} from 'lucide-react';

import './styles.css';

// Google Drive assets
const PROFILE_IMAGE =
  'https://drive.google.com/uc?export=view&id=1_fgJIAz5eJK_kH5LwHVeaXkkrmt9F3Ee';

const RESUME_VIEW =
  'https://drive.google.com/file/d/1lJBF0cPMm-rB7HMPsnBtsYmRuQwX5e-u/view';

const RESUME_DOWNLOAD =
  'https://drive.google.com/uc?export=download&id=1lJBF0cPMm-rB7HMPsnBtsYmRuQwX5e-u';

const projects = [
  {
    n: '01',
    title: 'Memento',
    type: 'AI · RAG · Full Stack',
    desc: 'An AI-powered document knowledge workspace. Upload documents, retrieve relevant source chunks, and ask questions through a conversational assistant.',
    stack: ['Java 21', 'Spring Boot 3', 'Spring AI', 'React', 'PostgreSQL + pgvector'],
    link: 'https://github.com/GANESH-0-0-7/Memento',
    featured: true
  },
  {
    n: '02',
    title: 'VisionMate',
    type: 'Major Project · Assistive AI',
    desc: 'AI-powered assistive smart glasses designed to support visually impaired users with real-time object detection, face recognition, object memory, obstacle guidance, GPS navigation and audio feedback.',
    stack: ['Python', 'YOLOv8', 'InsightFace', 'Raspberry Pi', 'Flask', 'WebSocket', 'OpenStreetMap'],
    link: 'https://github.com/GANESH-0-0-7/Major_project_model',
    featured: true
  },
  {
    n: '03',
    title: 'JobNova',
    type: 'Recruitment · Full Stack',
    desc: 'A recruitment platform with candidate and recruiter workflows for job posting, job discovery, applications and application tracking.',
    stack: ['React', 'Spring Boot', 'MongoDB Atlas', 'JWT', 'Serper API'],
    link: 'https://job-nova-liard.vercel.app/',
    github: 'https://github.com/GANESH-0-0-7/JobNova_0.1'
  },
  {
    n: '04',
    title: 'JeevantaX',
    type: 'Healthcare · AI',
    desc: 'A healthcare platform supporting appointment scheduling and electronic health records, with AI-assisted features and location-based hospital discovery.',
    stack: ['React', 'Spring Boot', 'MongoDB Atlas', 'Gemini API', 'OpenStreetMap'],
    link: 'https://jeevanta-x-git-main-asura8.vercel.app/'
  },
  {
    n: '05',
    title: 'Smart Expense Tracker',
    type: 'FinTech · MERN',
    desc: 'A personal finance and expense-tracking application built using the MERN stack.',
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    link: 'https://github.com/GANESH-0-0-7/Smart-Expense-Tracker-System'
  },
  {
    n: '06',
    title: 'Real-Time Face Recognition',
    type: 'Computer Vision',
    desc: 'A Python computer-vision project focused on real-time face recognition using OpenCV.',
    stack: ['Python', 'OpenCV'],
    link: 'https://github.com/GANESH-0-0-7/Real-Time-Face-Recognition-'
  },
  {
    n: '07',
    title: 'MealRush',
    type: 'Frontend Development',
    desc: 'A food-related web application built using core web technologies.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    link: 'https://github.com/GANESH-0-0-7/MealRush'
  }
];

const skills = [
  ['Programming', 'Java', 'JavaScript', 'Python', 'C'],
  ['Backend', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'REST APIs', 'JWT', 'Spring Security'],
  ['Frontend', 'React.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  ['Databases', 'PostgreSQL', 'MongoDB', 'MongoDB Atlas', 'MySQL'],
  ['AI & Computer Vision', 'Spring AI', 'RAG', 'YOLOv8', 'InsightFace', 'OpenCV'],
  ['Tools', 'Git', 'GitHub', 'Maven', 'Postman', 'VS Code']
];

function App() {
  const [imageFailed, setImageFailed] = React.useState(false);

  return (
    <div className="site-shell">

      <header className="nav wrap">
        <a className="wordmark" href="#home">GC<span>.</span></a>

        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#work">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="nav-cta"
          href={RESUME_DOWNLOAD}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume <Download size={14} />
        </a>
      </header>

      <main>

        {/* HERO */}
        <section id="home" className="hero wrap">

          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              PORTFOLIO · 2026
            </div>

            <h1>
              Building thoughtful<br />
              <em>digital experiences.</em>
            </h1>

            <p className="hero-intro">
              I'm <strong>Ganesh C</strong> — a Computer Science
              student and aspiring Java Full-Stack Developer
              exploring the intersection of reliable software
              and intelligent systems.
            </p>

            <div className="hero-actions">
              <a className="button dark" href="#work">
                Explore my work <ArrowUpRight size={17} />
              </a>

              <a
                className="text-link"
                href={RESUME_DOWNLOAD}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download résumé <Download size={15} />
              </a>
            </div>

            <div className="hero-meta">
              <span><MapPin size={14} /> Bengaluru, India</span>
              <span>JSSATEB · B.E. CSE · 2023—2027</span>
            </div>
          </div>

          {/* PROFILE IMAGE */}
          <div className="portrait-wrap">
            <div className="portrait-frame">

              {!imageFailed ? (
                <img
                  src={PROFILE_IMAGE}
                  alt="Ganesh C profile"
                  className="profile-image"
                  onError={() => setImageFailed(true)}
                />
              ) : (
                <div className="portrait-placeholder">
                  <span>GC</span>
                  <small>PROFILE IMAGE UNAVAILABLE</small>
                </div>
              )}

            </div>

            <div className="portrait-note">
              <span className="note-dot" />
              Open to opportunities
            </div>

            <div className="vertical-label">
              JAVA · FULL STACK · AI
            </div>
          </div>

          <div className="hero-index">01 / INTRODUCTION</div>
        </section>

        {/* STATS */}
        <section className="stats-band">
          <div className="wrap stats">
            <div><strong>8.43</strong><span>CGPA</span></div>
            <div><strong>07</strong><span>PROJECTS</span></div>
            <div><strong>03<sup>rd</sup></strong><span>HACKATHON PLACE</span></div>
            <div><strong>2027</strong><span>GRADUATION</span></div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section wrap about">
          <div className="section-kicker">01 — ABOUT</div>

          <div className="about-content">
            <h2>
              Curious by nature.<br />
              <em>Engineer by practice.</em>
            </h2>

            <div className="about-text">
              <p>
                I'm pursuing a B.E. in Computer Science and
                Engineering at JSS Academy of Technical Education,
                Bengaluru. I enjoy turning ideas into useful products
                — from backend services and responsive interfaces
                to AI-powered applications.
              </p>

              <p>
                My work spans Java and Spring Boot development,
                React applications, database design, retrieval-
                augmented generation, and computer vision.
                I value clean architecture, continuous learning,
                and solving real problems through technology.
              </p>

              <div className="education">
                <span>EDUCATION</span>
                <strong>B.E. — Computer Science & Engineering</strong>
                <small>JSS Academy of Technical Education, Bengaluru · 2023–2027</small>
                <small>CGPA: 8.43 / 10</small>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section skills-section">
          <div className="wrap">
            <div className="section-kicker">02 — TOOLKIT</div>

            <div className="section-heading">
              <h2>Technologies I<br /><em>work with.</em></h2>
              <p>
                A growing toolkit for building full-stack products,
                backend systems and intelligent applications.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map(([name, ...items]) => (
                <div className="skill-card" key={name}>
                  <div className="skill-icon">
                    <Code2 size={17} />
                  </div>
                  <h3>{name}</h3>
                  <div className="tags">
                    {items.map(item => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="work" className="section wrap work-section">
          <div className="section-kicker">03 — SELECTED WORK</div>

          <div className="section-heading">
            <h2>Projects with<br /><em>purpose.</em></h2>
            <p>
              A selection of academic, personal and full-stack
              projects exploring different areas of software engineering.
            </p>
          </div>

          <div className="projects">
            {projects.map(project => (
              <article
                className={`project ${project.featured ? 'featured' : ''}`}
                key={project.n}
              >
                <div className="project-number">{project.n}</div>

                <div className="project-main">
                  <div className="project-type">{project.type}</div>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>

                  <div className="tags">
                    {project.stack.map(item => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>

                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title}`}
                >
                  <ArrowUpRight size={21} />
                </a>

                {project.github && (
                  <a
                    className="project-link"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub ${project.title}`}
                  >
                    <Github size={18} />
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENT */}
        <section className="achievement">
          <div className="wrap achievement-inner">
            <div className="section-kicker">04 — RECOGNITION</div>

            <div>
              <div className="award-label">
                <Sparkles size={16} /> HACKATHON ACHIEVEMENT
              </div>

              <h2>
                3rd Place at<br />
                <em>JSSATEB Hackathon.</em>
              </h2>

              <p>
                Recognized for developing ReferAI,
                an AI-powered employee referral platform.
              </p>
            </div>

            <div className="award-mark">
              03<span>RD</span>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section wrap contact">
          <div className="section-kicker">05 — GET IN TOUCH</div>

          <h2>
            Have a good idea?<br />
            <em>Let's build it.</em>
          </h2>

          <p>
            I'm always interested in connecting, learning
            and exploring meaningful opportunities.
          </p>

          <a
            className="button dark"
            href="mailto:ganeshac2006@gmail.com"
          >
            Say hello <ArrowUpRight size={17} />
          </a>

          <div className="contact-links">
            <a href="mailto:ganeshac2006@gmail.com">
              <Mail size={15} /> Email
            </a>

            <a
              href="https://www.linkedin.com/in/ganesh-c-2402ba447"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={15} /> LinkedIn
            </a>

            <a
              href="https://github.com/GANESH-0-0-7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={15} /> GitHub
            </a>

            <a
              href="https://leetcode.com/u/SAITMAN/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code2 size={15} /> LeetCode
            </a>
          </div>
        </section>

      </main>

      <footer className="footer">
        <div className="wrap">
          <span>© 2026 Ganesh C</span>
          <span>Designed with intention · Built with React</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>

    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
