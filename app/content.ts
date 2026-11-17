// All copy on the site lives here. Edit this file to change what the page says.

export type Link = { label: string; href: string };

export type Job = {
  title: string;
  company: string;
  dates: string;
  bullets: string[];
};

export type Project = {
  name: string;
  description: string;
  result?: string;
  details?: string[];
  tags: string[];
  links: Link[];
};

export const site = {
  name: "Eshaan Singh",
  role: "Software Engineer",
  title: "Eshaan Singh, Software Engineer",
  summary:
    "Software developer at TechMagnet, where I built the Amazon FBA reconciliation platform that traces every unit from inbound shipment to payout.",
  location: "Seattle area, open to relocating to San Francisco.",
  url: "https://eshaans.github.io",
  email: "eshaan.singh09@gmail.com",
  resume: "/resume.pdf",
  github: "https://github.com/EshaanS",
  linkedin: "https://linkedin.com/in/eshaan-singh-72306021a",
};

export const experience: Job[] = [
  {
    title: "Software Developer",
    company: "TechMagnet",
    dates: "Sep 2026 to present",
    bullets: [
      "Built an end-to-end Amazon FBA reconciliation platform (Python, Amazon SP-API, SQL Server, C#/.NET WinForms) that traces every unit across 94 inbound shipments through sale, return, reimbursement and payout, replacing manual reconciliation in Seller Central.",
      "Designed the reconciliation engine: FIFO unit allocation across shipments, a close-out rule under which a shipment closes only when every unit is paid, reimbursed or written off, carry-forward of open issues, and write-off and claims registers with a full audit trail.",
      "Automated reimbursement claims end to end: detection, de-duplication against Amazon's reimbursement records, and ready-to-file case text. Reclassified $3,083 of refunds under Returnless Resolutions so unclaimable cases are never filed.",
      "Built a seller performance dashboard combining Amazon account health with 12 Walmart performance metrics across four time windows, surfacing 175 policy issues and a carrier mismatch on 41 of 43 Walmart orders, with each figure showing its source and refresh time.",
      "Integrated the Amazon SP-API (10+ report types and APIs), the Walmart Marketplace API and the UPS Tracking API through rate-limited, read-only collectors that strip buyer personal data before anything is stored.",
      "Found that data collection had silently stopped for four weeks, and built a nightly automated pipeline (collect, load, build, retention) that keeps every dashboard current.",
      "Maintained 685 automated tests, including parity checks proving the database matches Amazon's raw files.",
      "Saved the company about 15 hours a week of manual shipment tracking.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "signal-router",
    description:
      "A retrieval-first routing agent with a deterministic safety layer, built for the HackerRank Orchestrate 24-hour hackathon.",
    result:
      "92% retrieval hit@3 with zero pipeline errors across 110 real messages. Placed in the top 10% of participants.",
    details: [
      "Derived the architecture from data analysis before writing code: a user's reaction to a semantically similar past message predicted the correct routing action 9/9 and 10/10 across two categories.",
      "Caught and fixed a live regression that had silently disabled scam detection, verified with full regression testing before shipping.",
    ],
    tags: ["Python", "Pandas", "scikit-learn", "Google Gemini API"],
    links: [{ label: "GitHub", href: "https://github.com/EshaanS/signal-router" }],
  },
  {
    name: "TrainingARK",
    description:
      "A training simulator for competitive Commander (Magic: The Gathering), built solo with no spec.",
    result:
      "15 Prisma models across 6 migrations, 22 API routes and 260+ Vitest tests.",
    details: [
      "A Zustand store tracks 24 zones across 4 players, with a stack-based resolver for cast, triggered and activated abilities across 11 trigger event types.",
      "Auth.js accounts with draft, unlisted and public publishing, plus follows, comments with reporting, and notifications, on PostgreSQL and Prisma.",
      "Real card images from Scryfall.",
    ],
    tags: ["Next.js", "React", "TypeScript", "Zustand", "Tailwind", "Prisma", "PostgreSQL", "Supabase"],
    links: [
      { label: "Live", href: "https://trainingark.vercel.app" },
      { label: "GitHub", href: "https://github.com/EshaanS/TrainingARK" },
    ],
  },
  {
    name: "FinSight",
    description:
      "A financial data platform built with Go and Python. It ingests real stock market data, stores it in PostgreSQL, and lets users query it in plain English using Gemini.",
    tags: ["Go", "Python", "FastAPI", "PostgreSQL", "React", "TypeScript", "Gemini"],
    links: [
      { label: "Live", href: "https://eshaan-finsight.vercel.app" },
      { label: "GitHub", href: "https://github.com/EshaanS/FinSight" },
    ],
  },
  {
    name: "MarketMind",
    description:
      "An AI marketing content generator. Enter a brand and a product and get consumer personas, a SWOT analysis and marketing copy, with Gemini's output parsed as structured JSON.",
    tags: ["Next.js", "TypeScript", "Gemini", "Tailwind"],
    links: [{ label: "GitHub", href: "https://github.com/EshaanS/MarketMind" }],
  },
  {
    name: "Mod the Agents",
    description:
      "A real-time multi-agent debate platform built for the Cerebras x Google DeepMind Gemma 4 Hackathon.",
    details: [
      "Four agents with distinct perspectives contest any input in parallel, streamed live over SSE with token batching.",
      "A mid-debate human injection flow feeds a synthesis agent for a final verdict.",
    ],
    tags: ["React", "TypeScript", "Vite", "Node.js", "Express", "Cerebras"],
    links: [
      { label: "Live", href: "https://mod-the-agents-front.onrender.com" },
      { label: "GitHub", href: "https://github.com/EshaanS/mod-the-agents" },
    ],
  },
];

export const also = [
  {
    name: "OpenWillis",
    description:
      "An open source clinical research library. I built the hand tremor detection module as 1 of 4 contributors during a senior capstone with Brooklyn Health.",
  },
  {
    name: "ClubHub",
    description:
      "Next.js, React, Django and PostgreSQL. I led the frontend on a 4-person team, and a teammate led the backend.",
  },
];

export const skills = [
  { label: "Languages", items: ["Go", "Python", "C#", "TypeScript", "JavaScript", "SQL"] },
  { label: "Frameworks", items: ["React", "Next.js", "FastAPI", "Django", "Node.js"] },
  { label: "Data", items: ["PostgreSQL", "SQL Server", "Azure SQL", "Prisma", "MongoDB"] },
  {
    label: "AI / Testing",
    items: ["Claude Code (daily use)", "Google Gemini API", "PyTest", "Vitest", "parity and regression testing"],
  },
];
