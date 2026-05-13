export type Coach = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
};

export const coaches: Coach[] = [
  {
    slug: "kelly-butler",
    name: "Kelly Butler",
    role: "Role TBD",
    bio: "Placeholder bio. Replace with Kelly's background — credentials, athletes developed, and coaching philosophy.",
    image: "/media/coaches/kelly-butler.jpg",
  },
  {
    slug: "braeden-chaeng",
    name: "Braeden Chaeng",
    role: "Role TBD",
    bio: "Placeholder bio. Replace with Braeden's background — playing pedigree, coaching experience, and what athletes get when they train with him.",
    image: "/media/coaches/kelly-butler.jpg",
  },
  {
    slug: "scott-barbour",
    name: "Scott Barbour",
    role: "Role TBD",
    bio: "Placeholder bio. Replace with real background — playing pedigree, coaching experience, and what athletes get when they train with Scott.",
    image: "/media/coaches/scott-barbour.jpg",
  },
  {
    slug: "eric",
    name: "Eric",
    role: "Role TBD",
    bio: "Placeholder bio. Replace with Eric's background — playing days, coaching résumé, and what he brings to the field.",
    image: "/media/coaches/eric.jpg",
  },
];
