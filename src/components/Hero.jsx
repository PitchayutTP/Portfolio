import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-top">
        <span className="eyebrow">PORTFOLIO</span>
        <span className="portfolio-label">
          {profile.portfolioLabel}
        </span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="intro-line">
            Hello, world. I’m {profile.name}{" "}
            <span className="tiny-star">✳</span>
          </p>
          <h1>
            Curiosity.
            <br />
            Code.
            <br />
            <span>Creativity.</span>
          </h1>
          <p className="hero-description">{profile.intro}</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#projects">
              Explore my work <span>↗</span>
            </a>
            <a className="text-link" href="#about">
              About me <span>↗</span>
            </a>
          </div>
        </div>
        <div
          className="hero-art"
          aria-label="Developer profile code illustration"
        >
          <span className="art-cross top-left">+</span>
          <span className="art-cross bottom-right">+</span>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="code-window">
            <div className="window-bar">
              <span className="window-dots">● ● ●</span>
              <span>about-me.js</span>
              <span>↗</span>
            </div>
            <div className="code-content">
              <div>
                <b>01</b>
                <span className="code-muted">// always a work in progress</span>
              </div>
              <div>
                <b>02</b>
                <span>
                  const <strong>developer</strong> = {"{"}
                </span>
              </div>
              <div>
                <b>03</b>
                <span>
                  {" "}
                  name: <em>"{profile.name}"</em>,
                </span>
              </div>
              <div>
                <b>04</b>
                <span>
                  {" "}
                  role: <em>"IT Student"</em>,
                </span>
              </div>
              <div>
                <b>05</b>
                <span>
                  {" "}
                  basedIn: <em>"{profile.location}"</em>,
                </span>
              </div>
              <div>
                <b>06</b>
                <span>
                  {" "}
                  loves: [<em>"code"</em>, <em>"design"</em>],
                </span>
              </div>
              <div>
                <b>07</b>
                <span>
                  {" "}
                  curiosity: <strong>Infinity</strong>,
                </span>
              </div>
              <div>
                <b>08</b>
                <span>{"};"}</span>
              </div>
              <div>
                <b>09</b>
                <span> </span>
              </div>
              <div>
                <b>10</b>
                <span>
                  <strong>build</strong>(somethingMeaningful);
                </span>
              </div>
              <div>
                <b>11</b>
                <span>▍</span>
              </div>
            </div>
            <div className="window-footer">
              <span>JavaScript</span>
              <span>UTF-8 · Always learning</span>
            </div>
          </div>
          <div className="floating-tag">
            <span>⌁</span> A little logic. A lot of possibility.
          </div>
          <span className="art-caption">IDEAS → CODE → SOMETHING REAL</span>
        </div>
      </div>
      <div className="hero-bottom">
        <span>↓ &nbsp; SCROLL TO EXPLORE</span>
        <span>
          BASED IN {profile.location.toUpperCase()}{" "}
          <span className="coordinate">13.7563° N, 100.5018° E</span>
        </span>
      </div>
    </section>
  );
}
