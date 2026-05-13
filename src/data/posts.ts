export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  coverImage?: string;
  body: string;
};

export const posts: Post[] = [
  {
    slug: "gio-vaccaro-first-overall-2026-cfl-draft",
    title: "First Overall: Gio Vaccaro Goes #1 to the Redblacks",
    date: "2026-04-28",
    excerpt:
      "One of our own just got called first. Congratulations to Giordano Vaccaro — selected first overall by the Ottawa Redblacks in the 2026 CFL Canadian Draft.",
    category: "Athletes",
    coverImage: "/media/posts/gio-vaccaro-draft.jpg",
    body: `Gio has been in the trenches with us for years. Long before the call. Long before the cameras. Long before tonight.

On April 28, that work paid off in front of the whole country. The Ottawa Redblacks made Giordano Vaccaro the first overall pick in the 2026 CFL Canadian Draft. First in the country.

For us, it's bigger than a draft slot. It's what Gio represents — the kid who came in, put in the reps when nobody was watching, brought every teammate around him up, and never made the work about himself. That's the standard. That's the family. That's the way every athlete coming up after him gets to point at the screen and say, "I'm chasing that."

To Gio — congratulations from everyone at Trench Academy. You earned every bit of it. Go get the next one.

To every athlete still in the lab: keep working. The trenches don't lie.`,
  },
  {
    slug: "welcome-to-the-trenches",
    title: "Welcome to the Trenches",
    date: "2026-03-15",
    excerpt:
      "Why we built Trench Academy by Recruit Ready, and what it means for the athletes walking through our doors.",
    category: "News",
    coverImage: "/media/family/family.jpg",
    body: `Placeholder post body. Replace with the founder's letter — why this program exists, what the trenches mean to us, and who this is for.

We're building something for athletes who want more than reps. We're building a pipeline — grassroots through pro — that takes football seriously and the people in it even more seriously.

Welcome to the trenches.`,
  },
];
