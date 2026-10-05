import { useEffect, useRef, useState } from "react";
import { projects } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import ProjectVisual from "./ProjectVisual";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  useEffect(() => {
    if (selected) dialog.current.showModal();
  }, [selected]);
  function close() {
    dialog.current.close();
    setSelected(null);
  }
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <SectionHeading
          number="02"
          label="SELECTED WORK"
          title="Ideas, brought to life."
        >
          <p className="section-description">
            Web applications, cloud platforms, and interactive dashboards.
          </p>
        </SectionHeading>
        <div className="project-filters" aria-label="Filter projects">
          {[
            ["all", "All projects"],
            ["fullstack", "Full-stack & Cloud"],
            ["frontend", "Frontend"],
          ].map(([value, label]) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              aria-pressed={filter === value}
              className={filter === value ? "active" : ""}
            >
              {label}
              {value === "all" && (
                <span>{String(projects.length).padStart(2, "0")}</span>
              )}
            </button>
          ))}
        </div>
        <div className="project-grid">
          {projects
            .filter((project) => filter === "all" || project.type === filter)
            .map((project) => (
              <article className="project-card" key={project.id}>
                <button
                  className="project-image-button"
                  onClick={() => setSelected(project)}
                  aria-label={`View ${project.title}`}
                >
                  <ProjectVisual project={project} />
                  <span className="project-open">↗</span>
                </button>
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>{project.id}</span>
                </div>
                <div className="project-title">
                  <h3>
                    <button onClick={() => setSelected(project)}>
                      {project.title}
                    </button>
                  </h3>
                  <span aria-hidden="true">↗</span>
                </div>
                <p className="project-subtitle">{project.subtitle}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
        </div>
      </div>
      <dialog
        ref={dialog}
        onCancel={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === dialog.current) close();
        }}
        className="project-dialog"
        aria-labelledby="project-dialog-title"
      >
        {selected && (
          <>
            <button
              className="dialog-close"
              onClick={close}
              aria-label="Close project"
            >
              ✕
            </button>
            <p className="eyebrow">PROJECT / {selected.category}</p>
            <h2 id="project-dialog-title">{selected.title}</h2>
            <p>{selected.description}</p>
            <ul>
              {selected.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <div className="tags">
              {selected.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="project-links">
              {selected.url && (
                <a href={selected.url} target="_blank" rel="noreferrer">
                  Live project ↗
                </a>
              )}
              {selected.source && (
                <a href={selected.source} target="_blank" rel="noreferrer">
                  Source code ↗
                </a>
              )}
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}
