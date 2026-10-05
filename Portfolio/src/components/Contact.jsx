import { useState } from "react";
import { profile } from "../data/portfolio";

export default function Contact() {
  const [message, setMessage] = useState("");
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setMessage("Email copied.");
    } catch {
      setMessage(`Copy this address: ${profile.email}`);
    }
  }
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-top">
          <p className="eyebrow">05 / CONTACT</p>
        </div>
        <div className="contact-body">
          <div>
            <h2>
              Contact
              <br />
              <span>information.</span>
            </h2>
            <p>
              {profile.fullName} · {profile.location}
            </p>
          </div>
          <a
            className="contact-arrow"
            href={`mailto:${profile.email}`}
            aria-label="Send an email"
          >
            ↗
          </a>
        </div>
        <div className="contact-bottom">
          <a href={`mailto:${profile.email}`} className="email-link">
            {profile.email} ↗
          </a>
          <button onClick={copyEmail} className="copy-button">
            Copy email <span>▢</span>
          </button>
          <span role="status" className="copy-status">
            {message}
          </span>
          <span className="contact-location">{profile.location} ↗</span>
        </div>
        <div className="contact-profiles">
          <a href={profile.phoneHref}><span>PHONE</span>{profile.phone} ↗</a>
          <a href={profile.github} target="_blank" rel="noreferrer"><span>GITHUB</span>PitchayutTP ↗</a>
        </div>
      </div>
    </section>
  );
}
