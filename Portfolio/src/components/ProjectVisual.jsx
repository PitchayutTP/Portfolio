// Decorative project covers; set project.image to display an actual screenshot.
export default function ProjectVisual({ project }) {
  if (project.image) {
    return (
      <img
        className="project-cover-image"
        src={project.image}
        alt={project.imageAlt || project.title}
        width="960"
        height="640"
        loading="lazy"
      />
    );
  }

  return (
    <div className={`project-visual project-cover cover-${project.id}`} aria-hidden="true">
      <div className="cover-top"><span>PROJECT / {project.id}</span><span>↗</span></div>
      <div className="cover-orbit" />
      <div className="cover-type">
        <span className="cover-monogram">{project.title === 'PetTracks' ? 'PT' : project.title === 'MyMatchHistory' ? 'MH' : 'LS'}</span>
        <strong>{project.title}</strong>
      </div>
      <div className="cover-bottom"><span>{project.category}</span><span>CODE / DESIGN</span></div>
    </div>
  );
}
