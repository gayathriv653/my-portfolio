import {
  ArrowDown, ArrowUpRight, BriefcaseBusiness, Code2, Download, Github,
  Linkedin, Mail, MapPin, Phone, Send, GraduationCap, Award, Globe2,
  Sparkles, Terminal, ExternalLink
} from "lucide-react";
import Navbar from "./components/Navbar";
import SectionHeading from "./components/SectionHeading";
import ProjectCard from "./components/ProjectCard";
import { profile, skillGroups, projects, experiences, certificates, languages } from "./data/portfolio";

function App() {
  const handleContact = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="hero section-shell" id="home">
          <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
          <div className="hero-content">
            <div className="availability"><span className="pulse" /> Open to learning & opportunities</div>
            <p className="hero-kicker">HELLO, I'M</p>
            <h1>Gayathri <span>V.</span></h1>
            <h2>Aspiring <span className="gradient-text">Full Stack Developer</span></h2>
            <p className="hero-copy">
              I enjoy turning ideas into practical digital experiences through software development,
              creative problem-solving, and continuous learning.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore My Work <ArrowUpRight size={17} /></a>
              <a className="button button-secondary" href="/Resume.pdf" download="Resume.pdf"><Download size={17} /> Download Resume</a>
            </div>
            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a>
              <span className="social-divider" />
              <span className="location"><MapPin size={15} /> {profile.location}</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="profile-frame">
              <img
                src="/profile.jpeg"
                alt="Gayathri V profile"
                onError={(e) => {
                  if (!e.currentTarget.dataset.retried) {
                    e.currentTarget.dataset.retried = "1";
                    e.currentTarget.src = "/profile.jpg";
                  } else {
                    e.currentTarget.src = "/profile-placeholder.svg";
                  }
                }}
              />
              <div className="profile-initials">GV</div>
            </div>
            <div className="floating-card float-code"><Code2 size={18} /><span>Building with<br /><b>React.js</b></span></div>
            <div className="floating-card float-terminal"><Terminal size={18} /><span>Always learning<br /><b>New things</b></span></div>
            <div className="visual-caption">Curiosity · Code · Creativity</div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </section>

        <section className="section-shell section" id="about">
          <SectionHeading eyebrow="GET TO KNOW ME" title="About Me" description="A little introduction about my journey and what motivates me." />
          <div className="about-grid">
            <div className="about-card glass-card">
              <span className="card-icon"><Sparkles /></span>
              <h3>Passionate about building useful technology.</h3>
              <p>{profile.about}</p>
              <div className="about-meta"><span><MapPin size={15} /> {profile.location}</span><span><Globe2 size={15} /> Tamil & English</span></div>
            </div>
            <div className="objective-card">
              <span className="eyebrow">CAREER OBJECTIVE</span>
              <h3>Learning today.<br /><span className="gradient-text">Building tomorrow.</span></h3>
              <p>To grow as a Software Engineer by applying my technical foundation, learning from real-world challenges, and contributing to meaningful software solutions.</p>
              <a href="#contact" className="text-link">Connect with me <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="section-shell section" id="skills">
          <SectionHeading eyebrow="MY TOOLKIT" title="Technical Skills" description="Technologies and strengths I am learning and working with." />
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-card glass-card" key={group.title}>
                <div className="skill-card-head"><span className="skill-index">0{index + 1}</span><h3>{group.title}</h3></div>
                <div className="tag-list skill-tags">{group.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell section" id="education">
          <SectionHeading eyebrow="ACADEMIC BACKGROUND" title="Education" description="The academic foundation behind my technical journey." />
          <div className="timeline-item glass-card">
            <div className="timeline-icon"><GraduationCap /></div>
            <div><span className="timeline-date">EXPECTED GRADUATION · 2027</span><h3>{profile.education.degree}</h3><p>{profile.education.college}</p><span className="subtle-text">Nagapattinam, Tamil Nadu</span></div>
            <span className="education-year">2027</span>
          </div>
        </section>

        <section className="section-shell section" id="projects">
          <SectionHeading eyebrow="WHAT I'VE WORKED ON" title="Featured Projects" description="Selected academic and development projects that reflect my interests." />
          <div className="projects-grid">{projects.map((project) => <ProjectCard key={project.number} project={project} />)}</div>
        </section>

        <section className="section-shell section" id="experience">
          <SectionHeading eyebrow="MY JOURNEY" title="Experience" description="Internship and learning experiences that are helping me grow." />
          <div className="experience-list">
            {experiences.map((item, index) => (
              <article className="experience-item glass-card" key={item.company}>
                <div className="experience-icon"><BriefcaseBusiness /></div>
                <div className="experience-main"><span className="timeline-date">EXPERIENCE 0{index + 1} · {item.duration.toUpperCase()}</span><h3>{item.role}</h3><p className="company-name">{item.company}</p><p className="experience-detail">{item.detail}</p></div>
                <ArrowUpRight className="experience-arrow" size={20} />
              </article>
            ))}
          </div>
          <p className="note-text">Note: Confirm the exact dates and nature of the Mech Tech Research Foundation and Novitech experiences before submitting the final portfolio.</p>
        </section>

        <section className="section-shell section" id="certifications">
          <SectionHeading eyebrow="CONTINUOUS LEARNING" title="Certifications & Languages" />
          <div className="cert-language-grid">
            <div className="glass-card cert-card"><div className="mini-heading"><Award /><h3>Certifications & Achievements</h3></div>{certificates.map((cert) => <div className="certificate-row" key={cert}><span className="certificate-dot" />{cert}</div>)}</div>
            <div className="glass-card language-card"><div className="mini-heading"><Globe2 /><h3>Languages</h3></div><div className="language-pills">{languages.map((lang) => <span className="language-pill" key={lang}>{lang}</span>)}</div><p className="subtle-text">Comfortable communicating in Tamil and English.</p></div>
          </div>
        </section>

        <section className="section-shell section resume-section" id="resume">
          <div className="resume-banner">
            <div><span className="eyebrow">MY RESUME</span><h2>Want to know more<br />about my journey?</h2><p>Download my resume for a concise overview of my education, skills, and experience.</p></div>
            <a className="button button-primary" href="/Resume.pdf" download="Resume.pdf"><Download size={17} /> Download PDF <ArrowUpRight size={16} /></a>
          </div>
        </section>

        <section className="section-shell section contact-section" id="contact">
          <SectionHeading eyebrow="LET'S CONNECT" title="Have an opportunity in mind?" description="I would be happy to connect, learn, and discuss opportunities." />
          <div className="contact-grid">
            <div className="contact-details">
              <a href={`mailto:${profile.email}`} className="contact-line"><span className="contact-icon"><Mail /></span><span><small>EMAIL ME</small><b>{profile.email}</b></span><ArrowUpRight /></a>
              <a href={`tel:${profile.phone}`} className="contact-line"><span className="contact-icon"><Phone /></span><span><small>CALL ME</small><b>+91 {profile.phone}</b></span><ArrowUpRight /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-line"><span className="contact-icon"><Linkedin /></span><span><small>LINKEDIN</small><b>Connect professionally</b></span><ExternalLink /></a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="contact-line"><span className="contact-icon"><Github /></span><span><small>GITHUB</small><b>Explore my code</b></span><ExternalLink /></a>
            </div>
            <form className="contact-form glass-card" onSubmit={handleContact}>
              <label>Your name<input name="name" type="text" placeholder="Enter your name" required /></label>
              <label>Your email<input name="email" type="email" placeholder="Enter your email" required /></label>
              <label>Your message<textarea name="message" rows="4" placeholder="Write your message..." required /></label>
              <button className="button button-primary form-button" type="submit">Send Message <Send size={16} /></button>
              <p className="form-note">This form opens your email app with the message prepared. It does not store submissions.</p>
            </form>
          </div>
        </section>
      </main>
      <footer className="footer"><a className="brand" href="#home">Gayathri<span className="brand-dot">.</span></a><p>Designed & built with curiosity by Gayathri V.</p><span>© {new Date().getFullYear()} · All rights reserved</span></footer>
    </>
  );
}

export default App;