import { useState } from "react";
import { profile } from "../data/portfolio";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="wordmark" aria-label="Home">
          {profile.brand}
          <sup>®</sup>
        </a>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close −" : "Menu +"}
        </button>
        <nav
          id="navigation"
          className={open ? "navigation is-open" : "navigation"}
          aria-label="Main navigation"
        >
          {["About", "Projects", "Skills", "Activities", "Contact"].map(
            (label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                onClick={() => setOpen(false)}
              >
                {label}
                {label === "Contact" && " ↗"}
              </a>
            ),
          )}
        </nav>
        <span className="header-note">IT STUDENT & DEVELOPER</span>
      </div>
    </header>
  );
}
