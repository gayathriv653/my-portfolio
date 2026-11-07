import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Education", "education"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <a className="brand" href="#home" onClick={() => setOpen(false)}>
        <span className="brand-mark"><Sparkles size={17} /></span>
        Gayathri<span className="brand-dot">.</span>
      </a>
      <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? "nav-links nav-open" : "nav-links"}>
        {links.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let's Talk <span>↗</span></a>
      </nav>
    </header>
  );
}