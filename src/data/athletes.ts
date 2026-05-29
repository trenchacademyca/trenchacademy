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
  image?: string;
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
    slug: "gavin-coakes",
    name: "Gavin Coakes",
    league: "CFL",
    team: "Toronto Argonauts",
    image: "/media/athletes/gavin-coakes.jpg",
  },
  {
    slug: "sean-sevillano",
    name: "Sean Sevillano",
    league: "NCAA",
    team: "Notre Dame Fighting Irish",
    image: "/media/athletes/sean-sevillano.jpg",
  },
  {
    slug: "dolapo-egunjobi",
    name: "Dolapo Egunjobi",
    league: "NCAA",
    team: "UT Martin Skyhawks",
    image: "/media/athletes/dolapo-egunjobi.jpg",
  },
  {
    slug: "john-rabet",
    name: "John Rabet",
    league: "NCAA",
    team: "Rhode Island Rams",
    image: "/media/athletes/john-rabet.jpg",
  },
  {
    slug: "linkin-zylstra",
    name: "Linkin Zylstra",
    league: "NCAA",
    team: "Holy Cross Crusaders",
    image: "/media/athletes/linkin-zylstra.jpg",
  },
  {
    slug: "sean-rowe",
    name: "Sean Rowe",
    league: "U SPORTS",
    team: "Manitoba Bisons",
    image: "/media/athletes/sean-rowe.jpg",
  },
  {
    slug: "dawson-waldner",
    name: "Dawson Waldner",
    league: "U SPORTS",
    team: "Manitoba Bisons",
    image: "/media/athletes/dawson-waldner.jpg",
  },
  {
    slug: "thierry-moro",
    name: "Thierry Moro",
    league: "U SPORTS",
    team: "UBC Thunderbirds",
    image: "/media/athletes/thierry-moro.jpg",
  },
  {
    slug: "denzel-sam-uje",
    name: "Denzel Sam-Uje",
    league: "Prep",
    team: "St. Thomas More",
    image: "/media/athletes/denzel-sam-uje.jpg",
  },
  {
    slug: "jaxson-fury",
    name: "Jaxson Fury",
    league: "Prep",
    team: "Rabun Gap Eagles",
    image: "/media/athletes/jaxson-fury.jpg",
  },
  {
    slug: "ramsey-millar",
    name: "Ramsey Millar",
    league: "Prep",
    team: "St. Thomas More",
    image: "/media/athletes/ramsey-millar.jpg",
  },
  {
    slug: "joziah-mckay",
    name: "Joziah McKay",
    league: "High School",
    team: "Dakota Collegiate",
    image: "/media/athletes/joziah-mckay.jpg",
  },
  {
    slug: "antayos-kabaalu",
    name: "Antayos Kabaalu",
    league: "High School",
    team: "Miles Mac Buckeyes",
    image: "/media/athletes/antayos-kabaalu.jpg",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Trench Academy didn't just make me a better player. They made me a better student of the game.",
    attribution: "Denzel Sam-Uje",
    role: "Prep · St. Thomas More",
  },
  {
    quote:
      "The coaching the players receive, the upbeat attitudes they bring out, and the drive to see the athletes succeed at every level they compete at. They teach more than the game. They teach an attitude. My sons have learned a tremendous amount about the preparation it takes to be ready for the challenge on game day. Thank you, Coaches.",
    attribution: "Owen Williams",
    role: "Parent",
  },
  {
    quote:
      "Everything I learned in this program is what got me here. Now I put that same work in every day to earn my spot.",
    attribution: "Gio Vaccaro",
    role: "CFL · Ottawa Redblacks",
  },
];
