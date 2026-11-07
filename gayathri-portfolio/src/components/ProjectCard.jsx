import { ArrowUpRight, Code2 } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-top">
        <span className="project-number">{project.number}</span>
        <span className={`status ${project.status === "In Progress" ? "status-progress" : ""}`}>{project.status}</span>
      </div>
      <p className="project-category">{project.category}</p>
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <ul className="project-highlights">
        {project.highlights.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <div className="tag-list">
        {project.technologies.map((tech) => <span className="tag" key={tech}>{tech}</span>)}
      </div>
      <div className="project-footer"><span><Code2 size={15} /> Selected technologies</span><ArrowUpRight size={18} /></div>
    </article>
  );
}