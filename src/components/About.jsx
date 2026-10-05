import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="about section container">
      <SectionHeading
        number="01"
        label="A LITTLE ABOUT ME"
        title={
          <>
            A builder at heart.
            <br />
            <span>A student, always.</span>
          </>
        }
      />
      <div className="about-copy">
        <p>{profile.about}</p>
        <p className="muted">{profile.interests}</p>
        <div className="education-card">
          <p className="eyebrow">EDUCATION / {profile.education.status.toUpperCase()}</p>
          <h3>{profile.education.institution}</h3>
          <p>{profile.education.school}</p>
          <p className="muted">{profile.education.track}</p>
        </div>
        <div className="about-notes">
          <span>
            <i /> Learning by doing
          </span>
          <span>Software Engineering · KMITL</span>
        </div>
      </div>
    </section>
  );
}
