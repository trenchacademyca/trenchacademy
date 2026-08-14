export const site = {
  name: "Trench Academy",
  tagline: "Trust the process.",
  description:
    "Trench Academy develops football athletes from grassroots through college and pro. Position-specific training, recruiting prep, and elite-level development.",
  url: "https://trenchacademy.ca",
  emailUser: "info",
  emailDomain: "trenchacademy.ca",
  phone: "",
  location: "",
  // Web3Forms public access key — routes form submissions to the configured inbox.
  formAccessKey: "b1d1befa-bbac-4232-80f3-9416a51ed29d",
  // Separate Web3Forms key for the Youth Program landing-page inquiries.
  youthProgramAccessKey: "c7163f0c-53d8-44c2-bdff-93ad986c8551",
  // Google Apps Script Web App — receives a parallel copy of each submission
  // and appends to the inquiries spreadsheet. Configure via NEXT_PUBLIC_SHEET_URL / _TOKEN.
  sheetUrl: process.env.NEXT_PUBLIC_SHEET_URL || "",
  sheetToken: process.env.NEXT_PUBLIC_SHEET_TOKEN || "",
  social: {
    instagram: "https://www.instagram.com/trenchacademy.ca/",
  },
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Athletes", href: "/athletes" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
