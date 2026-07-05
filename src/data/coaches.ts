export type Coach = {
  slug: string;
  name: string;
  role?: string;
  bio: string;
  image: string;
};

export const coaches: Coach[] = [
  {
    slug: "zack-williams",
    name: "Zack Williams",
    role: "Offensive Line",
    bio: "Currently plays in the CFL with the Calgary Stampeders.",
    image: "/media/coaches/zack-williams.jpg",
  },
  {
    slug: "gio-vaccaro",
    name: "Gio Vaccaro",
    role: "Offensive Line",
    bio: "Currently plays in the CFL with the Ottawa Redblacks.",
    image: "/media/athletes/gio-vaccaro.jpg",
  },
  {
    slug: "victor-olaniran",
    name: "Victor Olaniran",
    role: "Offensive Line",
    bio: "Currently plays in the CFL with the Toronto Argonauts.",
    image: "/media/athletes/victor-olaniran.jpg",
  },
  {
    slug: "kelly-butler",
    name: "Kelly Butler",
    role: "Offensive Line",
    bio: "Played across the NFL, CFL, Arena, and NCAA.",
    image: "/media/coaches/kelly-butler.jpg",
  },
  {
    slug: "eric-anderson",
    name: "Eric Anderson",
    role: "Offensive Line",
    bio: "Played in the Arena League and at the NCAA level.",
    image: "/media/coaches/eric.jpg",
  },
  {
    slug: "braeden-cheang",
    name: "Braeden Cheang",
    role: "Offensive Line",
    bio: "Played U Sports.",
    image: "/media/coaches/braeden-cheang.jpg",
  },
  {
    slug: "scott-barbour",
    name: "Scott Barbour",
    role: "Defensive Line",
    bio: "Played at the NCAA level.",
    image: "/media/coaches/scott-barbour.jpg",
  },
  {
    slug: "max-fisher",
    name: "Max Fisher",
    role: "Offensive Line",
    bio: "Played U Sports.",
    image: "/media/coaches/max-fisher.jpg",
  },
];
