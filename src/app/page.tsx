import Link from "next/link";
import { ArrowDownToLine, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, Phone, Sparkles } from "@/components/Icons";
import { projects } from "@/data/projects";

const resume = "/Anisha_Gupta_Resume.pdf";

function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Anisha Gupta, home"><span className="wordmark-mark">A<span>.</span></span><span className="wordmark-name">ANISHA GUPTA</span></a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#research">Research</a><a href="#contact">Contact</a>
      </nav>
      <details className="mobile-menu"><summary aria-label="Open navigation menu"><Menu size={18} /><span>MENU</span></summary><nav aria-label="Mobile navigation"><a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#research">Research</a><a href="#contact">Contact</a></nav></details>
      <a className="nav-resume" href={resume} download="Anisha_Gupta_Resume.pdf">Resume <ArrowDownToLine size={14} /></a>
    </header>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <div className="section-heading"><div className="section-kicker">{eyebrow}</div><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export default function Home() {
  return (
    <main id="top">
      <Header />
      <section className="hero shell">
        <div className="hero-copy">
          <div className="availability"><span className="status-dot" /> AI/ML ENGINEER <span className="availability-divider">/</span> DELHI, INDIA</div>
          <h1>ANISHA GUPTA<i className="hero-period">.</i></h1>
          <p className="hero-role">AI/ML Engineer <span>·</span> Generative AI <span>·</span> LLMs <span>·</span> Agentic AI</p>
          <div className="hero-education"><span className="education-icon"><Sparkles size={15} /></span><div><span>CURRENTLY PURSUING</span><strong>M.Tech in Artificial Intelligence <b>|</b> NSUT, Delhi</strong><small>2025 — 2027</small></div></div>
          <p className="hero-intro">I build practical AI systems — from grounded retrieval and intelligent agents to thoughtful, data-driven applications.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">View projects <ArrowRight size={16} /></a><a className="button button-outline" href={resume} download="Anisha_Gupta_Resume.pdf">Download resume <ArrowDownToLine size={15} /></a><a className="button button-text" href="#contact">Contact me <ArrowUpRight size={15} /></a></div>
          <div className="hero-socials"><span>FIND ME ON</span><a href="https://github.com/annieannie12345" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href="https://linkedin.com/in/anisha-gupta-57723418a" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a></div>
        </div>
        <div className="hero-art" aria-label="Abstract network illustration" role="img">
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-orbit orbit-three" />
          <div className="art-grid" /><div className="art-center"><span>AG</span><i /></div>
          <div className="art-node node-one"><span className="node-glyph">⌘</span><small>AGENTS</small></div><div className="art-node node-two"><span className="node-glyph">⌁</span><small>RETRIEVAL</small></div><div className="art-node node-three"><span className="node-glyph">∿</span><small>MODELS</small></div>
          <div className="art-caption"><span>BUILDING WITH INTENT</span><i /></div>
          <div className="art-index">AI / ML<br />2025—27</div>
        </div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /><span>01 / 09</span></div>
      </section>

      <section className="about section shell" id="about">
        <div className="about-label"><span className="section-kicker">01 — A little about me</span><div className="about-monogram">A<span>G</span><i>AI / ML</i></div></div>
        <div className="about-content"><SectionHeading eyebrow="Curious by design" title="Turning ideas into intelligent systems." /><p className="about-lede">I’m an AI/ML engineer interested in the space where language, data and useful software meet.</p><p>Currently pursuing my <strong>M.Tech in Artificial Intelligence at NSUT, Delhi</strong> (2025–2027), I bring an engineering foundation in Electronics and Communication alongside hands-on experience building data and AI applications. During my Data Science internship at Aivariant, I developed an electricity demand forecasting solution across 143K+ hourly records.</p><p>My current focus is on Generative AI, retrieval-augmented generation and agentic systems — building applications that are useful, robust and grounded in the right context.</p><div className="about-tags"><span>GENERATIVE AI</span><span>RETRIEVAL SYSTEMS</span><span>AGENTIC AI</span></div></div>
      </section>

      <section className="experience section shell" id="experience">
        <SectionHeading eyebrow="02 — Experience" title="Learning by building." text="Turning data into dependable, end-to-end solutions." />
        <div className="timeline"><div className="timeline-marker"><span /></div><div className="timeline-entry"><div className="timeline-top"><div><div className="company-line">AIVARIANT <span className="current-pill">INTERNSHIP</span></div><h3>Data Science Intern</h3></div><time>15 JUL 2026 <span>—</span> 15 OCT 2026</time></div><p className="timeline-summary">Built an end-to-end electricity demand forecasting solution using 143K+ hourly PJM records.</p><ul className="detail-list"><li>Engineered calendar, lag and rolling-window features and benchmarked ARIMA, SARIMA, XGBoost, LSTM, GRU, Random Forest and Gradient Boosting with chronological validation.</li><li>Achieved the best recursive forecasting result with XGBoost: <strong>746.13 MW RMSE</strong> on the 2017–2018 holdout dataset.</li><li>Built a Flask dashboard and REST API with model comparisons, interactive 30-day forecasts and CSV export.</li></ul><div className="tag-row"><span>TIME SERIES</span><span>XGBOOST</span><span>FLASK</span><span>FORECASTING</span></div></div></div>
      </section>

      <section className="projects-section section shell" id="projects">
        <div className="projects-head"><SectionHeading eyebrow="03 — Selected work" title="Projects with purpose." text="A selection of systems and experiments at the intersection of AI and real-world problems." /><span className="project-count">03 <i>PROJECTS</i></span></div>
        <div className="project-grid">{projects.map((project) => <article className={`project-card accent-${project.accent}`} key={project.slug}><div className="project-visual"><div className="visual-top"><span>PROJECT / {project.number}</span><span className="visual-signal"><i /><i /><i /></span></div><div className="visual-graphic"><div className="visual-ring ring-a" /><div className="visual-ring ring-b" /><div className="visual-core">{project.number}</div><span className="visual-label label-a">{project.number === "01" ? "ORCHESTRATE" : project.number === "02" ? "RETRIEVE" : "PREDICT"}</span><span className="visual-label label-b">{project.number === "01" ? "EXECUTE" : project.number === "02" ? "RERANK" : "EVALUATE"}</span></div><div className="visual-bottom"><span>{project.eyebrow}</span><span>↗</span></div></div><div className="project-body"><div className="project-number">{project.number} / 03</div><h3>{project.title}</h3><p>{project.summary}</p><div className="tag-row">{project.technologies.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-actions"><Link className="project-link" href={`/projects/${project.slug}`}>Explore project <ArrowUpRight size={15} /></Link>{project.github && <a className="project-github" href={project.github} target="_blank" rel="noreferrer"><Github size={14} /> View on GitHub</a>}</div></div></article>)}</div>
        <p className="project-note">Repository links can be added when available. Project descriptions are based on verified details provided.</p>
      </section>

      <section className="skills section shell" id="skills">
        <SectionHeading eyebrow="04 — Toolkit" title="Tools for thoughtful work." text="A growing toolkit across applied AI, machine learning and software engineering." />
        <div className="skill-grid">
          <SkillGroup number="01" title="Generative AI" skills={["LLMs", "RAG", "Prompt Engineering", "Context Engineering", "Hybrid Search", "Semantic Search", "Dense Embeddings", "Pinecone"]} />
          <SkillGroup number="02" title="Agentic AI" skills={["AI Agents", "Multi-Agent Systems", "Supervisor Agents", "Agent Orchestration", "Temporal Workflows"]} />
          <SkillGroup number="03" title="Machine Learning" skills={["Scikit-learn", "XGBoost", "CatBoost", "Random Forest", "Logistic Regression", "Feature Engineering", "Cross-Validation", "Model Evaluation"]} />
          <SkillGroup number="04" title="Programming & tools" skills={["Python", "SQL", "FastAPI", "Flask", "Streamlit", "MySQL", "SQLAlchemy", "Docker", "Git", "GitHub Actions", "Jupyter Notebook", "Google Colab"]} />
        </div>
      </section>

      <section className="education section shell" id="education">
        <SectionHeading eyebrow="05 — Education" title="Grounded in engineering." />
        <div className="education-list"><article className="education-item education-current"><div className="edu-date">JUL 2025 — MAY 2027 <span>IN PROGRESS</span></div><div className="edu-degree"><h3>M.Tech in Artificial Intelligence</h3><p>Netaji Subhas University of Technology (NSUT), Delhi</p></div><div className="edu-score"><strong>8.0</strong><span>CGPA</span></div></article><article className="education-item"><div className="edu-date">JUL 2019 — JUL 2023</div><div className="edu-degree"><h3>B.Tech in Electronics and Communication Engineering</h3><p>Buddha Institute of Technology, Gorakhpur</p></div><div className="edu-score"><strong>8.15</strong><span>CGPA</span></div></article></div>
      </section>

      <section className="research section shell" id="research">
        <div className="research-top"><SectionHeading eyebrow="06 — Research interests" title="Language deserves better retrieval." text="An ongoing area of exploration into more inclusive, reliable question answering." /><div className="research-badge"><span className="status-dot" /> ONGOING INTEREST</div></div>
        <div className="research-feature"><div className="research-mark">“</div><div><span className="research-kicker">HINGLISH · RAG EVALUATION · MULTILINGUAL SEARCH</span><h3>How can retrieval systems understand the way we actually ask?</h3><p>Exploring evaluation of LLM-based retrieval systems for Hindi-English code-mixed question answering. Interested in multilingual embeddings, semantic retrieval and improving retrieval quality for low-resource and code-mixed languages.</p><div className="research-topics"><span>RAG EVALUATION</span><span>CODE-MIXED QA</span><span>MULTILINGUAL EMBEDDINGS</span><span>LOW-RESOURCE LANGUAGES</span></div></div></div>
      </section>

      <section className="achievement section shell" id="achievements"><div><span className="section-kicker">07 — Achievement</span><h2>Built on a strong<br />technical foundation.</h2></div><div className="achievement-card"><div className="achievement-label">GATE 2025 <span>·</span> DATA SCIENCE & AI</div><div className="achievement-rank"><strong>4521</strong><span>AIR</span></div><p>All India Rank · Data Science and Artificial Intelligence</p><div className="achievement-line"><i /></div></div></section>

      <section className="contact section shell" id="contact"><div className="contact-top"><SectionHeading eyebrow="08 — Get in touch" title="Good work starts with a conversation." text="Interested in AI engineering, applied research or building something useful? I’d be glad to connect." /><a className="button button-primary" href="mailto:ag8136121@gmail.com">Say hello <ArrowUpRight size={16} /></a></div><div className="contact-grid"><a href="tel:+917068619868"><span className="contact-icon"><Phone size={17} /></span><span><small>PHONE</small><strong>+91 70686 19868</strong></span><ArrowUpRight className="contact-arrow" size={16} /></a><a href="mailto:ag8136121@gmail.com"><span className="contact-icon"><Mail size={17} /></span><span><small>EMAIL</small><strong>ag8136121@gmail.com</strong></span><ArrowUpRight className="contact-arrow" size={16} /></a><a href="https://linkedin.com/in/anisha-gupta-57723418a" target="_blank" rel="noreferrer"><span className="contact-icon"><Linkedin size={17} /></span><span><small>LINKEDIN</small><strong>anisha-gupta</strong></span><ArrowUpRight className="contact-arrow" size={16} /></a><a href="https://github.com/annieannie12345" target="_blank" rel="noreferrer"><span className="contact-icon"><Github size={17} /></span><span><small>GITHUB</small><strong>annieannie12345</strong></span><ArrowUpRight className="contact-arrow" size={16} /></a></div><div className="contact-resume"><div><span className="section-kicker">TAKE A CLOSER LOOK</span><strong>Download my resume</strong></div><a className="button button-outline" href={resume} download="Anisha_Gupta_Resume.pdf">Download PDF <ArrowDownToLine size={15} /></a></div></section>

      <footer className="site-footer shell"><a className="wordmark" href="#top"><span className="wordmark-mark">A<span>.</span></span><span className="wordmark-name">ANISHA GUPTA</span></a><span>Thoughtfully built. © 2026 Anisha Gupta.</span><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}

function SkillGroup({ number, title, skills }: { number: string; title: string; skills: string[] }) {
  return <article className="skill-group"><div className="skill-head"><span>{number}</span><h3>{title}</h3></div><div className="skill-pills">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>;
}
