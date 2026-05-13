export type Testimonial = {
  quote: string;
  attribution: string;
  role: string;
};

export type FeaturedAthlete = {
  slug: string;
  name: string;
  league: string;
  team: string;
  image: string;
};

export const featuredAthletes: FeaturedAthlete[] = [
  {
    slug: "zack-williams",
    name: "Zack Williams",
    league: "CFL",
    team: "Calgary Stampeders",
    image: "/media/athletes/zack-williams.jpg",
  },
  {
    slug: "gio-vaccaro",
    name: "Gio Vaccaro",
    league: "CFL",
    team: "Ottawa Redblacks",
    image: "/media/athletes/gio-vaccaro.jpg",
  },
  {
    slug: "victor-olaniran",
    name: "Victor Olaniran",
    league: "CFL",
    team: "Toronto Argonauts",
    image: "/media/athletes/victor-olaniran.jpg",
  },
  {
    slug: "matt-stokman",
    name: "Matt Stokman",
    league: "CFL",
    team: "Calgary Stampeders",
    image: "/media/athletes/matt-stokman.jpg",
  },
  {
    slug: "sean-sevillano",
    name: "Sean Sevillano",
    league: "NCAA D1",
    team: "Notre Dame Fighting Irish",
    image: "/media/athletes/sean-sevillano.jpg",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Placeholder testimonial. Trench Academy didn't just make me a better player — they made me a better student of the game. Replace with real quote.",
    attribution: "Athlete Name",
    role: "DL • Class of 2025",
  },
  {
    quote:
      "Placeholder testimonial from a parent. The coaching, the structure, the people — top to bottom this is the program we wish we'd found years earlier.",
    attribution: "Parent Name",
    role: "Parent",
  },
  {
    quote:
      "Placeholder testimonial. Coming out of high school I had zero offers. Six months at Trench Academy and that changed. Replace with real quote.",
    attribution: "Athlete Name",
    role: "WR • Class of 2024",
  },
];
