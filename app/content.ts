// All copy on the site lives here. Edit this file to change what the page says.

export type Link = { label: string; href: string };

export type Job = {
  title: string;
  company: string;
  location?: string;
  dates: string;
  // Figures pulled straight from the bullets, shown above them for skimmers.
  highlights?: { value: string; label: string }[];
  // The page shows the first 4 and puts the rest behind a "Show more" toggle.
  bullets: string[];
};

export type Project = {
  name: string;
  note?: string;
  // Same rule as jobs: first 4 shown, the rest behind a "Show more" toggle.
  bullets: string[];
  tags: string[];
  links: Link[];
};

export const site = {
  name: "Eshaan Singh",
  role: "Software Engineer",
  title: "Eshaan Singh, Software Engineer",
  summary:
  "Software engineer with internship and professional experience in full-stack development and data systems. Hands-on experience building reliable data pipelines and AI agents, with expertise in Python, TypeScript and SQL. Built a system that traces every unit of inventory across 94 shipments and saves about 15 hours of manual work a week, and placed in the top 10% of a 24-hour AI hackathon, bringing strong ownership and reliability to small, fast-moving teams.",
  location: "Seattle area, open to relocating.",
  url: "https://eshaans.github.io",
  email: "eshaan.singh09@gmail.com",
  resume: "/resume.pdf",
  github: "https://github.com/EshaanS",
  linkedin: "https://linkedin.com/in/eshaan-singh-72306021a",
};

// Newest first.
export const experience: Job[] = [
  {
    title: "Software Developer",
    company: "TechMagnet",
    dates: "Sep 2026 to present",
    highlights: [
      { value: "94", label: "inbound shipments traced unit by unit" },
      { value: "685", label: "automated tests maintained" },
      { value: "~15 hrs", label: "of manual shipment tracking saved each week" },
    ],
    bullets: [
      "Built an end-to-end Amazon FBA reconciliation platform (Python, Amazon SP-API, SQL Server, C#/.NET WinForms) tracing every unit across 94 inbound shipments from shipment through sale, return, reimbursement and payout, replacing manual reconciliation in Seller Central.",
      "Designed the reconciliation engine: FIFO unit allocation across shipments, a close-out rule under which a shipment closes only when every unit is paid, reimbursed or written off, carry-forward of open issues, and write-off and claims registers with a full audit trail.",
      "Automated reimbursement claims end to end: detection, de-duplication against Amazon's reimbursement records, and ready-to-file case text; reclassified $3,083 of refunds under Returnless Resolutions so unclaimable cases are never filed.",
      "Built a seller performance dashboard combining Amazon account health with 12 Walmart performance metrics across four time windows, surfacing 175 policy issues and a carrier mismatch on 41 of 43 Walmart orders, each figure showing its source and refresh time.",
      "Integrated the Amazon SP-API (10+ report types and APIs), the Walmart Marketplace API and the UPS Tracking API through rate-limited, read-only collectors that strip buyer personal data before anything is stored.",
      "Found that data collection had silently stopped for four weeks, and built a nightly automated pipeline (collect, load, build, retention) that keeps every dashboard current without manual runs.",
      //   is a non-breaking space, so a number never separates from its unit.
      "Cut database storage 76% (1,248 MB to 299 MB) by converting raw JSON into typed daily aggregates, verified figure for figure across 148,000 product-day rows.",
      "Diagnosed a shared Azure SQL database capped at 2 GB when its plan allowed 250 GB, unblocking the whole team; deployed 38 Flyway migrations with before-and-after checks proving no other team's data was touched.",
      "Designed a multi-account architecture: one codebase runs on each seller account's own machine with its own credentials, feeding a shared reporting database, with isolation enforced in code and SQL row-level security.",
      "Maintained 685 automated tests, including regression tests on a frozen data snapshot and parity checks proving the database matches Amazon's raw files.",
      "Saved the company about 15 hours a week of manual shipment tracking.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Perpex",
    location: "Remote",
    dates: "Jun 2025 to Dec 2025",
    bullets: [
      "Architected a shared, multi-tenant database schema from first principles, designed to let a single shared codebase serve 200+ restaurant locations without per-location duplication.",
      "Built a suite of Django REST APIs on top of that schema to support order management, inventory tracking, and customer preference handling across the full location footprint.",
      "Shipped 10+ modular React components (dashboards, dynamic forms) decoupled from per-location config, letting new features reach all 200+ locations without location-specific rework.",
      "Authored technical documentation for the shared schema so the team could safely extend it going forward.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "WebBoost Solutions by UM",
    location: "Remote",
    dates: "May 2024 to Aug 2024",
    bullets: [
      "Worked in an Agile Scrum team on live client projects, contributing across frontend and backend, with daily stand-ups and sprint planning.",
      "Built responsive, cross-device interfaces using React, Tailwind CSS, and Bootstrap, owning delivery of 15+ customer-facing dashboard components from design through production deployment.",
      "Developed server-side logic and database queries in Node.js against SQL and NoSQL databases, integrating the REST APIs that powered those dashboards.",
      "Shipped every change through Git/GitHub PR review with senior engineers.",
      "Collaborated daily with designers, backend developers, and project managers using Trello and Slack.",
    ],
  },
  {
    title: "Data Center Technician",
    company: "Redapt Inc.",
    location: "Woodinville, WA",
    dates: "Jul 2022 to Jul 2023",
    bullets: [
      "Performed hands-on wiring and cabling for server racks as part of routine deployment and maintenance.",
      "Ran QA testing across multiple types of server hardware, verifying configuration and function before systems were cleared for use.",
      "Tested individual server units and full racks on a recurring basis across a fleet of 50+ distributed systems.",
      "Ran, maintained, and tested the company's established Python/Bash automation layered on manual QA, part of a workflow that cut validation time by roughly 40%.",
    ],
  },
  {
    title: "Software Engineer",
    company: "My Technology Geeks",
    location: "Kent, WA",
    dates: "May 2021 to Jun 2022",
    bullets: [
      "Performed hands-on hardware repair and upgrade work across 100+ networked PCs, laptops, and desktops, validating each change before closing the ticket.",
      "Ran QA testing on serviced machines to confirm hardware changes and configuration updates held before returning systems to service.",
      "Designed and built a Python and Bash automation system that scanned networks and pulled hardware specifications across the full 100+ system fleet, replacing a manual per-machine inspection process.",
      "Automated driver installation and hardware configuration across the fleet.",
      "Diagnosed hardware and network configuration issues across the fleet and built scripting to resolve recurring problems at scale.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "signal-router",
    bullets: [
      // ‑ is a non-breaking hyphen, so "24-hour" never splits across two lines.
      "Built a retrieval-first routing agent for the HackerRank Orchestrate 24‑hour hackathon, achieving 92% retrieval hit@3 with zero pipeline errors across 110 real messages; placed in the top 10% of participants.",
      "Derived the core architecture from data analysis before writing any code: a user's reaction to a semantically similar past message predicted the correct routing action 9/9 and 10/10 across two categories.",
      "Caught and fixed a live regression that had silently disabled scam detection, verified via full regression testing before shipping.",
    ],
    tags: ["Python", "Pandas", "scikit-learn", "Google Gemini API"],
    links: [{ label: "GitHub", href: "https://github.com/EshaanS/signal-router" }],
  },
  {
    name: "TrainingARK",
    note: "Prototype",
    bullets: [
      "Conceived and built solo, from an ambiguous idea to a deployed product, with no spec handed down.",
      "Tracked 24 zones across 4 players live in a centralized Zustand store exposing 50+ actions.",
      "Built a stack-based resolver for cast, triggered and activated abilities across 11 trigger event types.",
      "Shipped accounts with Auth.js plus draft, unlisted and public publishing for user-built scenarios.",
      "Added follows, likes, editable and reportable comments, subscription feeds, bookmarks, playlists and notifications.",
      "Designed a PostgreSQL/Prisma schema of 15 models across 6 migrations, served by 22 API routes.",
      "Wrote 260+ Vitest tests covering the builder store, drafts, comments, subscriptions and trigger detection.",
      "Styled the interface with 30 CSS Modules and Tailwind, rendering real card images from Scryfall.",
    ],
    tags: ["Next.js", "React", "TypeScript", "Zustand", "Prisma", "PostgreSQL", "Auth.js", "Vitest"],
    links: [
      { label: "Live", href: "https://trainingark.vercel.app" },
      { label: "GitHub", href: "https://github.com/EshaanS/TrainingARK" },
    ],
  },
  {
    name: "FinSight",
    bullets: [
      "Designed a distributed backend (Go ingestion + Python FastAPI query service over shared PostgreSQL), each independently deployable.",
      "Let users query financial data in plain English via a Gemini-powered natural language interface.",
      "Migrated the backend onto AWS (RDS, EC2) using Terraform, including a Caddy reverse proxy for automatic HTTPS.",
    ],
    tags: ["Go", "Python", "FastAPI", "PostgreSQL", "React", "TypeScript", "Gemini", "Terraform", "AWS"],
    links: [
      { label: "Live", href: "https://eshaan-finsight.vercel.app" },
      { label: "GitHub", href: "https://github.com/EshaanS/FinSight" },
    ],
  },
  {
    name: "Mod the Agents",
    bullets: [
      "Streamed a 4-agent debate platform live over Server-Sent Events with 30ms token batching.",
      "Independently diagnosed and resolved a production deployment bug (VITE_API_URL bake-time issue, missing TypeScript declaration) to ship a stable build.",
    ],
    tags: ["React", "TypeScript", "Node.js", "Express", "Cerebras Gemma 4"],
    links: [
      { label: "Live", href: "https://mod-the-agents-front.onrender.com" },
      { label: "GitHub", href: "https://github.com/EshaanS/mod-the-agents" },
    ],
  },
  {
    name: "MarketMind",
    bullets: [
      "Built a platform generating consumer personas, SWOT analysis, and marketing copy from a single brand brief, integrating Gemini via Next.js API routes with structured JSON output parsing.",
    ],
    tags: ["Next.js", "TypeScript", "React", "Tailwind", "Gemini"],
    links: [{ label: "GitHub", href: "https://github.com/EshaanS/MarketMind" }],
  },
  {
    name: "SentiPulse",
    bullets: [
      "Built a Python FastAPI backend running a HuggingFace DistilBERT model to classify text sentiment with a confidence score, shown through a Next.js frontend with interactive pie charts.",
    ],
    tags: ["Next.js", "TypeScript", "Python", "FastAPI", "HuggingFace"],
    links: [{ label: "GitHub", href: "https://github.com/EshaanS/SentiPulse" }],
  },
  {
    name: "ClubHub",
    bullets: [
      "Built the majority of the frontend and contributed to backend integration on a 4-person team building a club management platform. Led the frontend; a teammate led backend.",
    ],
    tags: ["Next.js", "React", "Django", "PostgreSQL", "Docker"],
    links: [{ label: "GitHub", href: "https://github.com/Strider3039/Club-Hub" }],
  },
  {
    name: "OpenWillis",
    note: "Open source clinical research library",
    bullets: [
      "Built the hand tremor detection module, measuring tremor frequency and amplitude, as 1 of 4 contributors, during a two-semester senior capstone (Fall 2025 to Spring 2026) in remote collaboration with Brooklyn Health.",
    ],
    tags: ["unittest", "PyTest"],
    links: [],
  },
];

export const skills = [
  { label: "Languages", items: ["Go", "Python", "C#", "TypeScript", "JavaScript", "SQL"] },
  { label: "Frameworks", items: ["React", "Next.js", "FastAPI", "Django", "Node.js", "Express", "Tailwind CSS", "Zustand", "Auth.js", ".NET Framework"] },
  { label: "Data", items: ["PostgreSQL", "SQL Server", "Azure SQL", "Prisma", "MongoDB", "MySQL", "Supabase", "Prisma", "Flyway migrations"] },
  {
    label: "AI / Testing",
    items: ["Claude Code", "Google Gemini API", "HuggingFace", "scikit-learn", "PyTest", "Vitest", "unittest", "parity and regression testing"],
  },
];
