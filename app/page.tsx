import { also, experience, projects, site, skills } from "./content";

function ExternalLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <nav className="nav" aria-label="Page sections">
        <div className="container nav-inner">
          <ul>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
          <ExternalLink className="nav-resume" href={site.resume}>Resume</ExternalLink>
        </div>
      </nav>

      <main className="container" id="main">
        <header className="hero">
          <h1>{site.name}</h1>
          <p className="hero-role">{site.role}</p>
          <p className="hero-summary">{site.summary}</p>
          <p className="hero-location">{site.location}</p>
          <div className="actions">
            <ExternalLink className="btn btn-primary" href={site.resume}>Resume</ExternalLink>
            <ExternalLink className="btn" href={site.github}>GitHub</ExternalLink>
            <ExternalLink className="btn" href={site.linkedin}>LinkedIn</ExternalLink>
            <a className="btn" href={`mailto:${site.email}`}>Email</a>
          </div>
        </header>

        <section className="section" id="experience" aria-labelledby="experience-heading">
          <h2 id="experience-heading">Experience</h2>

          {experience.map((job) => (
            <article className="job" key={job.company}>
              <div className="job-head">
                <h3>{job.title}, {job.company}</h3>
                <p className="job-dates">{job.dates}</p>
              </div>
              <ul className="highlights">
                {job.highlights.map((highlight) => (
                  <li key={highlight.label}>
                    <strong>{highlight.value}</strong>
                    <span>{highlight.label}</span>
                  </li>
                ))}
              </ul>
              <ul className="bullets">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="section" id="projects" aria-labelledby="projects-heading">
          <h2 id="projects-heading">Projects</h2>

          <div className="cards">
            {projects.map((project) => (
              <article className="card" key={project.name}>
                <div className="card-head">
                  <h3>{project.name}</h3>
                  <ul className="card-links" aria-label={`${project.name} links`}>
                    {project.links.map((link) => (
                      <li key={link.href}>
                        <ExternalLink href={link.href}>
                          {link.label}<span className="sr-only">: {project.name}</span>
                        </ExternalLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="card-desc">{project.description}</p>
                {project.result && <p className="card-result">{project.result}</p>}
                {project.details && (
                  <ul className="bullets">
                    {project.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                )}
                <ul className="tags" aria-label="Stack">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="also" aria-labelledby="also-heading">
          <h2 id="also-heading">Also</h2>

          <div className="also">
            {also.map((item) => (
              <article key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills" aria-labelledby="skills-heading">
          <h2 id="skills-heading">Skills</h2>

          <dl className="skills">
            {skills.map((group) => (
              <div key={group.label}>
                <dt>{group.label}</dt>
                <dd>{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>

      <footer className="container">
        <div className="footer">
          <p>© 2026 {site.name}</p>
          <ul>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><ExternalLink href={site.github}>GitHub</ExternalLink></li>
            <li><ExternalLink href={site.linkedin}>LinkedIn</ExternalLink></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
