import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "@/components/Icons";
import { ProjectVideo } from "@/components/ProjectVideo";
import { ProjectGallery } from "@/components/ProjectGallery";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return { title: project ? `${project.title} — Anisha Gupta` : "Project — Anisha Gupta", description: project?.summary };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return <main className="detail-page">
    <header className="site-header"><Link className="wordmark" href="/"><span className="wordmark-mark">A<span>.</span></span><span className="wordmark-name">ANISHA GUPTA</span></Link><Link className="detail-back" href="/#projects"><ArrowLeft size={15} /> All projects</Link></header>
    <article className={`detail-content shell accent-${project.accent}`}>
      <div className="detail-overline"><span>PROJECT / {project.number}</span><span>{project.eyebrow}</span></div>
      <h1>{project.title}<i>.</i></h1>
      <p className="detail-summary">{project.summary}</p>
      <div className="detail-visual"><div className="visual-top"><span>CONCEPTUAL SYSTEM VIEW</span><span className="visual-signal"><i /><i /><i /></span></div><div className="detail-visual-center"><div className="detail-orbit orbit-one" /><div className="detail-orbit orbit-two" /><div className="detail-core">{project.number}</div><span className="detail-chip chip-a">INPUT</span><span className="detail-chip chip-b">PROCESS</span><span className="detail-chip chip-c">OUTPUT</span></div><div className="visual-bottom"><span>{project.eyebrow}</span><span>ANISHA GUPTA · 2026</span></div></div>
      <div className="detail-columns"><section><div className="section-kicker">Overview</div><p className="detail-description">{project.description}</p><div className="detail-callout">{project.outcome}</div></section><section><div className="section-kicker">Architecture & workflow</div><ol className="workflow-list">{project.workflow.map((step, index) => <li key={step}><span>0{index + 1}</span><p>{step}</p></li>)}</ol></section></div>
      <section className="detail-highlights"><div className="section-kicker">Implementation highlights</div><div className="highlight-grid">{project.highlights.map((highlight) => <div key={highlight}><span>↗</span>{highlight}</div>)}</div></section>
      <section className="detail-tech"><div className="section-kicker">Technology</div><div className="tag-row">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></section>
      {project.slug === "ai-order-supervisor" && <ProjectVideo title={project.title} src="https://raw.githubusercontent.com/annieannie12345/ai-order-supervisor/main/Final_video.mp4" />}
      {project.slug === "medical-rag-assistant" && <ProjectGallery title="Application Preview" images={[{ src: "/projects/medical-chatbot/ui.png", alt: "Medical chatbot application interface", caption: "Medical Chatbot Interface" }]} />}
      {project.slug === "credit-risk-engine" && <ProjectGallery title="Application Screenshots" images={[{ src: "/projects/credit-risk/1.png", alt: "Credit risk applicant scoring dashboard", caption: "Applicant Scoring Dashboard" }, { src: "/projects/credit-risk/2.png", alt: "Credit risk model performance dashboard", caption: "Model Performance Dashboard" }]} />}
      <div className="detail-actions">{project.github || project.demo ? <>{project.github && <a className="button button-outline" href={project.github} target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight size={15} /></a>}{project.demo && <a className="button button-outline" href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={15} /></a>}</> : <span className="link-pending">Repository / demo link to be added</span>}<Link className="button button-text" href="/#projects">More projects <ArrowUpRight size={15} /></Link></div>
    </article>
    <footer className="site-footer shell"><Link className="wordmark" href="/"><span className="wordmark-mark">A<span>.</span></span><span className="wordmark-name">ANISHA GUPTA</span></Link><Link href="/#contact">GET IN TOUCH ↗</Link></footer>
  </main>;
}
