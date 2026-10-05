import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Activities from "./components/Activities";
import { profile } from "./data/portfolio";
import "./App.css";
import "./components/ResumeContent.css";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Activities />
        <Contact />
      </main>
      <footer className="container footer">
        <a className="wordmark" href="#home">
          {profile.brand}
          <sup>®</sup>
        </a>
        <span>
          © {new Date().getFullYear()} · Designed with intention. Built with
          curiosity.
        </span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}
