import { also, experience, projects, site, skills } from "./content";

export default function Home() {
  return (
      <div>
        <nav className="navbar">
          <a href="#" className="navbar-logo">eshaan.singh</a>
          <ul className="navbar-links">
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href={`mailto:${site.email}`}>Contact</a></li>
          </ul>
        </nav>

        <div className="content">
          <div className="hero">
            <h1>Eshaan <span>Singh</span></h1>
            <p className="hero-sub">{site.role}</p>
            <p className="hero-summary">{site.summary}</p>
            <p className="hero-location">{site.location}</p>
            <div className="hero-links">
              <a className="link-resume" href={site.resume} target="_blank" rel="noopener">Resume</a>
              <a href={site.github} target="_blank" rel="noopener">GitHub</a>
              <a href={site.linkedin} target="_blank" rel="noopener">LinkedIn</a>
              <a href={`mailto:${site.email}`}>Email</a>
            </div>
          </div>

          <section className="section" id="experience">
            <div className="section-label">Experience</div>

            {experience.map((job) => (
              <div className="job" key={job.company}>
                <div className="job-head">
                  <div className="job-title">{job.title}, {job.company}</div>
                  <div className="job-dates">{job.dates}</div>
                </div>
                <ul className="bullets">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="section" id="projects">
            <div className="section-label">Projects</div>

            {projects.map((project) => (
              <div className="project" key={project.name}>
                <div className="project-name">{project.name}</div>
                <p className="project-desc">{project.description}</p>
                {project.result && <p className="project-result">{project.result}</p>}
                {project.details && (
                  <ul className="bullets">
                    {project.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                )}
                <div className="project-footer">
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a
                          className={link.label === "Live" ? "link-primary" : undefined}
                          href={link.href}
                          target="_blank"
                          rel="noopener"
                          key={link.href}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section className="section" id="also">
            <div className="section-label">Also</div>

            {also.map((item) => (
              <div className="also-item" key={item.name}>
                <div className="also-name">{item.name}</div>
                <p className="project-desc">{item.description}</p>
              </div>
            ))}
          </section>

          <section className="section" id="skills">
            <div className="section-label">Skills</div>
            <div className="skills-grid">
              {skills.map((group) => (
                <div key={group.label}>
                  <div className="skill-label">{group.label}</div>
                  <div className="skill-items">{group.items.join(", ")}</div>
                </div>
              ))}
            </div>
          </section>

          <footer className="footer">
            <p>© 2026 Eshaan Singh</p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </footer>
        </div>
      </div>
  );
}
