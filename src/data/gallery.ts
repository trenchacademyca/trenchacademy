// Drill / training imagery used contextually across the site
// (programs, about, marketing sections). No standalone gallery page.

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export const drillImages: GalleryImage[] = [
  { src: "/media/drills/group-drill-1.jpg", alt: "Group drill", caption: "Group Drill" },
  { src: "/media/drills/ramsey-bag-drill.jpg", alt: "Bag drill", caption: "Bag Drill" },
  { src: "/media/drills/high-school-1.jpg", alt: "High school drill", caption: "High School" },
  { src: "/media/drills/high-school-2.jpg", alt: "High school athletes drill", caption: "High School" },
  { src: "/media/drills/group-drill-2.jpg", alt: "Group drill", caption: "Group Drill" },
  { src: "/media/drills/college-athletes.jpg", alt: "College athletes drill", caption: "College" },
  { src: "/media/drills/cfl-pros.jpg", alt: "CFL pros drill", caption: "Pros in the Lab" },
];
