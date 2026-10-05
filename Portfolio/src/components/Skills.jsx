import { skillGroups } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <SectionHeading
        number="03"
        label="MY TOOLKIT"
        title="The tools behind the ideas."
      >
        <p className="section-description">
          Always learning. Always adding to the list.
        </p>
      </SectionHeading>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <span className="skill-icon" aria-hidden="true">
              {group.icon}
            </span>
            <h3>{group.title}</h3>
            <p>{group.detail}</p>
            <div className="tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="learning-note">
        <span>↳ &nbsp; AREAS OF EXPERIENCE</span>
        <p>Web development · Cloud applications · Data visualization</p>
        <span className="learning-star" aria-hidden="true">
          ✳
        </span>
      </div>
    </section>
  );
}
