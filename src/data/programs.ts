export type Program = {
  slug: string;
  name: string;
  level: string;
  summary: string;
  bullets: string[];
  cta: string;
  image: string;
};

export const programs: Program[] = [
  {
    slug: "grassroots",
    name: "Grassroots Foundations",
    level: "Ages 8–13",
    summary:
      "Movement, fundamentals, and confidence — built on the field, not in front of a screen. We teach the game the right way, from the ground up.",
    bullets: [
      "Speed, agility, and athletic base",
      "Position fundamentals (all positions)",
      "Mental reps and football IQ",
      "Small-group coaching, high reps",
    ],
    cta: "Start your athlete",
    image: "/media/drills/group-drill-1.jpg",
  },
  {
    slug: "middle-school",
    name: "Middle School Development",
    level: "Grades 6–8",
    summary:
      "The make-or-break years. We sharpen skill, install technique that translates to varsity, and start building the highlight reel that gets you noticed.",
    bullets: [
      "Position-specific technique",
      "Strength and conditioning",
      "Film breakdown basics",
      "Highlight tape capture",
    ],
    cta: "Get in the lab",
    image: "/media/drills/ramsey-bag-drill.jpg",
  },
  {
    slug: "high-school",
    name: "High School Performance",
    level: "Grades 9–12",
    summary:
      "Train like a college athlete. Position mastery, recruiting strategy, and the work behind every offer. This is where the real ones separate.",
    bullets: [
      "Elite position coaching",
      "Combine prep (40, broad, shuttle)",
      "Film + recruiting profile build",
      "Camp and showcase strategy",
    ],
    cta: "Earn your offer",
    image: "/media/drills/high-school-1.jpg",
  },
  {
    slug: "college-prep",
    name: "Recruit Ready / College Prep",
    level: "Juniors • Seniors • Transfers",
    summary:
      "Built for athletes chasing the next level. Recruiting prep, exposure, and the player development colleges expect when you walk on campus.",
    bullets: [
      "1-on-1 recruiting strategy",
      "Highlight + skills tape production",
      "Coach outreach playbook",
      "Transfer portal navigation",
    ],
    cta: "Get recruit ready",
    image: "/media/drills/college-athletes.jpg",
  },
  {
    slug: "pro-prep",
    name: "Pro Prep",
    level: "Draft eligible • Free agents",
    summary:
      "For athletes preparing for pro days, combines, and tryouts. Position-specific film, peak performance work, and the fine details scouts grade.",
    bullets: [
      "Combine + pro day prep",
      "Position-specific scheme work",
      "Game speed conditioning",
      "Agent + opportunity guidance",
    ],
    cta: "Train for the league",
    image: "/media/drills/cfl-pros.jpg",
  },
  {
    slug: "1-on-1",
    name: "Private 1-on-1 Training",
    level: "All levels",
    summary:
      "Just you and a coach. Built around your tape, your goals, and the exact things holding you back from the next step.",
    bullets: [
      "Custom plan tied to your film",
      "Position-specific deep work",
      "Flexible scheduling",
      "Parents welcome to observe",
    ],
    cta: "Book a session",
    image: "/media/drills/high-school-2.jpg",
  },
];
