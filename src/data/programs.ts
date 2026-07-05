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
    slug: "youth-trench-program",
    name: "Youth",
    level: "Fundamentals & mentorship",
    summary:
      "The Youth Trench Program is a fundamental movement program introducing the basic concepts of football, built around mentorship from our high school athletes.",
    bullets: [
      "Learn fundamental athletic movements: stretching, running, and proper 3-point stance",
      "Develop offensive football movement skills and position-specific fundamentals",
      "Learn the fundamentals of run and pass game, player positions, offensive line splits, and huddle communication",
      "Study film: review your drills, analyze your performance, and identify areas for improvement",
      "Train alongside mentors from our high school, college, and pro O-linemen",
      "Join our academic development and accountability program",
    ],
    cta: "Start your athlete",
    image: "/media/drills/high-school-1.jpg",
  },
  {
    slug: "high-school",
    name: "High School",
    level: "Develop & get recruited",
    summary:
      "Complete development for the high school athlete: on the field, in the weight room, in the film room, and through every step of recruiting.",
    bullets: [
      "Football knowledge & offensive line development",
      "Skill & technical specialization",
      "Weight program",
      "Film review",
      "Recruiting consultation",
      "Evaluation & post-secondary landing spots",
      "Study table",
      "Mental preparation",
      "Mental health awareness & resources",
      "Pre- and post-performance review",
      "Speed, strength, footwork & football IQ",
      "Offensive & defensive line 5v5 team play",
      "Campus tours of Canadian & U.S. universities",
      "1-on-1 development & coaching",
    ],
    cta: "Earn your offer",
    image: "/media/drills/group-drill-1.jpg",
  },
  {
    slug: "college",
    name: "College",
    level: "Position mastery",
    summary:
      "Position-specific development and mental preparation for athletes competing at the college level.",
    bullets: [
      "Fundamental development",
      "Position-specific drills",
      "Mental preparation",
      "Film breakdown",
      "1-on-1 coaching",
      "CFL / NFL mentoring",
    ],
    cta: "Take the next step",
    image: "/media/drills/college-athletes.jpg",
  },
  {
    slug: "combine",
    name: "Combine",
    level: "Pre-draft prep",
    summary:
      "Everything that happens off the tape: on-field testing, interviews, and the presentation that move you up the board.",
    bullets: [
      "Combine on-field drills",
      "Interview preparation",
      "Social media presence",
      "Film review",
      "Mock installation session",
      "1-on-1 coaching",
    ],
    cta: "Prep for the combine",
    image: "/media/drills/combine-prep.jpg",
  },
  {
    slug: "pro",
    name: "Pro",
    level: "Train with the pros",
    summary:
      "For athletes at the top: advanced fundamentals and technical work alongside current pros.",
    bullets: [
      "Train with current pros",
      "Advanced drills & fundamentals",
      "Group sessions",
      "Hand placement & technical specialization",
    ],
    cta: "Train for the league",
    image: "/media/drills/cfl-pros.jpg",
  },
];
