import { experience, projects, site, skills, type Project } from "./content";
import { featured, shots, type Shot } from "./screens";

// Cards show this many bullets; the rest sit behind a "Show more" toggle.
const VISIBLE_BULLETS = 4;

function ExternalLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

function Bullets({ items }: { items: string[] }) {
  if (items.length === 1) {
    return <p className="card-text">{items[0]}</p>;
  }

  const rest = items.slice(VISIBLE_BULLETS);

  return (
    <>
      <ul className="bullets">
        {items.slice(0, VISIBLE_BULLETS).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {rest.length > 0 && (
        // <details> so the toggle works with JavaScript turned off.
        <details className="more">
          <summary>
            <span className="more-closed">Show {rest.length} more</span>
            <span className="more-open">Show less</span>
          </summary>
          <ul className="bullets">
            {rest.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </details>
      )}
    </>
  );
}

// The stages the reconciliation platform follows a unit through (first TechMagnet bullet).
const TRACE_STAGES = ["Shipment", "Sale", "Return", "Reimbursement", "Payout"];

// The rule under the name: one unit traced through every stage, ending reconciled.
// CSS only. The markup below is the finished state; the animation plays up to it once.
function Trace() {
  return (
    <div
      className="trace"
      role="img"
      aria-label="A single unit of inventory traced from shipment through sale, return, reimbursement and payout, ending reconciled."
    >
      <div className="trace-track">
        <span className="trace-line" />
        {TRACE_STAGES.map((stage, i) => (
          <span className="trace-slot" style={{ "--i": i } as React.CSSProperties} key={stage} />
        ))}
        <span className="trace-unit" />
        <span className="trace-end">
          <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
            <path d="M2.5 6.5 5 9l4.5-5.5" />
          </svg>
        </span>
      </div>
      <ol className="trace-stages">
        {TRACE_STAGES.map((stage, i) => (
          <li style={{ "--col": i * 2 } as React.CSSProperties} key={stage}>{stage}</li>
        ))}
        <li>Reconciled</li>
      </ol>
    </div>
  );
}

// `sizes` tells the browser how wide the image is drawn, so phones fetch the small file.
function Screenshot({ shot, sizes }: { shot: Shot; sizes: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static export: these are pre-sized WebP files
    <img
      className="shot"
      src={`${shot.base}-800.webp`}
      srcSet={`${shot.base}-480.webp 480w, ${shot.base}-800.webp 800w, ${shot.base}-1200.webp 1200w`}
      sizes={sizes}
      width={shot.width}
      height={shot.height}
      alt={shot.alt}
      loading="lazy"
      decoding="async"
    />
  );
}

function ProjectHead({ project }: { project: Project }) {
  return (
    <div className="project-head">
      <div>
        <h3>{project.name}</h3>
        {project.note && <p className="project-note">{project.note}</p>}
      </div>
      {project.links.length > 0 && (
        <ul className="links" aria-label={`${project.name} links`}>
          {project.links.map((link) => (
            <li key={link.href}>
              <ExternalLink href={link.href}>
                {link.label}<span className="sr-only">: {project.name}</span>
              </ExternalLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Stack({ tags }: { tags: string[] }) {
  return (
    <ul className="stack" aria-label="Stack">
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}

export default function Home() {
  // Three tiers, in page order: large lifted cards, cards with a screenshot, plain ruled rows.
  const large = projects.filter((project) => featured.includes(project.name));
  const withShot = projects.filter((project) => !featured.includes(project.name) && shots[project.name]);
  const rows = projects.filter((project) => !featured.includes(project.name) && !shots[project.name]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <nav className="nav" aria-label="Page sections">
        <div className="wrap nav-inner">
          <ul>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
          <ExternalLink className="btn btn-primary" href={site.resume}>Resume</ExternalLink>
        </div>
      </nav>

      <main id="main">
        <header className="hero wrap">
          <h1 className="name">{site.name}</h1>
          <Trace />
          <div className="hero-body">
            <div>
              <p className="hero-role">{site.role}</p>
              <p className="hero-summary">{site.summary}</p>
            </div>
            <div className="hero-side">
              <p className="hero-location">{site.location}</p>
              <div className="actions">
                <ExternalLink className="btn btn-primary" href={site.resume}>Resume</ExternalLink>
                <ExternalLink className="btn" href={site.github}>GitHub</ExternalLink>
                <ExternalLink className="btn" href={site.linkedin}>LinkedIn</ExternalLink>
                <a className="btn" href={`mailto:${site.email}`}>Email</a>
              </div>
            </div>
          </div>
        </header>

        <section className="band" id="experience" aria-labelledby="experience-heading">
          <div className="wrap">
            <h2 id="experience-heading">Experience</h2>

            <div className="timeline">
              {experience.map((job) => (
                <article
                  className={job.dates.includes("present") ? "role role-current" : "role"}
                  key={`${job.company} ${job.title}`}
                >
                  <div className="role-when">
                    <p className="role-dates">{job.dates}</p>
                    {job.location && <p className="role-place">{job.location}</p>}
                  </div>
                  <div className="role-sheet">
                    <h3>{job.title}</h3>
                    <p className="role-org">{job.company}</p>
                    {job.highlights && (
                      <ul className="figures">
                        {job.highlights.map((highlight) => (
                          <li key={highlight.label}>
                            <strong>{highlight.value}</strong>
                            <span>{highlight.label}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <Bullets items={job.bullets} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="band" id="projects" aria-labelledby="projects-heading">
          <div className="wrap">
            <h2 id="projects-heading">Projects</h2>

            <div className="tier tier-large">
              {large.map((project) => (
                <article className="feature" key={project.name}>
                  <div className="feature-head">
                    <ProjectHead project={project} />
                    {shots[project.name] && (
                      <Screenshot shot={shots[project.name]} sizes="(min-width: 56rem) 24rem, 100vw" />
                    )}
                  </div>
                  <div className="feature-body">
                    <Bullets items={project.bullets} />
                  </div>
                  <Stack tags={project.tags} />
                </article>
              ))}
            </div>

            <div className="tier tier-shots">
              {withShot.map((project) => (
                <article className="shotcard" key={project.name}>
                  <Screenshot shot={shots[project.name]} sizes="(min-width: 48rem) min(50vw, 36rem), 100vw" />
                  <div className="shotcard-body">
                    <ProjectHead project={project} />
                    <Bullets items={project.bullets} />
                    <Stack tags={project.tags} />
                  </div>
                </article>
              ))}
            </div>

            <div className="tier tier-rows">
              {rows.map((project) => (
                <article className="row" key={project.name}>
                  <ProjectHead project={project} />
                  <div className="row-body">
                    <Bullets items={project.bullets} />
                    <Stack tags={project.tags} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="band" id="skills" aria-labelledby="skills-heading">
          <div className="wrap">
            <h2 id="skills-heading">Skills</h2>

            <dl className="skills">
              {skills.map((group) => (
                <div key={group.label}>
                  <dt>{group.label}</dt>
                  <dd>{group.items.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>

      <footer className="band">
        <div className="wrap footer">
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
