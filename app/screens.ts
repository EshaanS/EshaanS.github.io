// Presentation data for the Projects section. The copy itself lives in content.ts;
// this file only decides which projects get more room and which have a screenshot.

export type Shot = {
  // Path prefix under public/. Files are <base>-480.webp, -800.webp and -1200.webp.
  base: string;
  // Intrinsic size of the largest file. All three share this 16:10 ratio.
  width: number;
  height: number;
  alt: string;
};

// Projects that get the large, lifted cards. Matched by name.
export const featured = ["signal-router", "TrainingARK"];

// Screenshots captured from the live demos by scripts/capture-screenshots.mjs.
// The alt text describes what each capture actually shows; update it when recapturing.
export const shots: Record<string, Shot> = {
  TrainingARK: {
    base: "/shots/trainingark",
    width: 1200,
    height: 750,
    alt: "TrainingARK home page: a list of the newest scenarios, each marked Beginner and tagged with its commanders, beside a sidebar with Home, Create, Tutorial, Rules & Banlist and About.",
  },
  FinSight: {
    base: "/shots/finsight",
    width: 1200,
    height: 750,
    alt: "FinSight dashboard: a year-long price chart for AAPL beside a watchlist of eight stocks, with a box at the bottom for asking a question in plain English.",
  },
  "Mod the Agents": {
    base: "/shots/mod-the-agents",
    width: 1200,
    height: 750,
    alt: "Mod the Agents start screen: a text box for the claim to debate, with buttons to add an image, customize the agents and start the debate.",
  },
};
